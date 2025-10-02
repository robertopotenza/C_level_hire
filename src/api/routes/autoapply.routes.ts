import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserProfileService } from '../../services/autoapply/UserProfile.service';

const router = Router();
const userProfileService = new UserProfileService();

// Middleware to validate JWT tokens
const authenticate = (req: any, res: Response, next: any) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'local-dev-jwt-secret-key-123') as any;
        req.userId = decoded.userId || decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

// Get profile completion status
router.get('/profile/completion', authenticate, async (req: any, res: Response) => {
    try {
        const profile = await userProfileService.getCompleteProfile(req.userId);
        res.json({
            completionPercentage: profile.profile.completionPercentage,
            isComplete: profile.profile.completionPercentage >= 80,
            sections: {
                personalInfo: profile.profile.personalInfoComplete,
                experience: profile.profile.experienceComplete,
                education: profile.profile.educationComplete,
                skills: profile.profile.skillsComplete
            }
        });
    } catch (error) {
        console.error('Profile completion error:', error);
        res.status(500).json({ error: 'Failed to get profile completion' });
    }
});

// Get complete profile data
router.get('/profile', authenticate, async (req: any, res: Response) => {
    try {
        const profile = await userProfileService.getCompleteProfile(req.userId);
        res.json(profile);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ error: 'Failed to get profile' });
    }
});

// Update profile data
router.put('/profile', authenticate, async (req: any, res: Response) => {
    try {
        const updatedProfile = await userProfileService.updateProfile(req.userId, req.body);
        res.json(updatedProfile);
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

// Complete profile setup with all required data
router.post('/profile/complete', authenticate, async (req: any, res: Response) => {
    try {
        const { personalInfo, experience, education, skills, preferences } = req.body;
        
        const profileData = {
            // Personal Info
            phone: personalInfo?.phone,
            address: personalInfo?.address,
            location: personalInfo?.location,
            
            // Experience
            currentRole: experience?.currentRole,
            currentSalary: experience?.currentSalary,
            yearsExperience: experience?.yearsExperience,
            
            // Education & Skills
            linkedinUrl: education?.linkedinUrl,
            skills: skills?.technical || [],
            
            // Autoapply specific
            workEligibility: personalInfo?.workEligibility,
            resumeUrl: personalInfo?.resumeUrl,
            coverLetter: personalInfo?.coverLetter,
            preferences: preferences || {}
        };

        const updatedProfile = await userProfileService.updateProfile(req.userId, profileData);
        res.json({
            success: true,
            completionPercentage: userProfileService.calculateCompletionPercentage(updatedProfile)
        });
    } catch (error) {
        console.error('Complete profile error:', error);
        res.status(500).json({ error: 'Failed to complete profile' });
    }
});

// Get AutoApply settings
router.get('/autoapply/settings', authenticate, async (req: any, res: Response) => {
    try {
        const settings = await userProfileService.getAutoApplySettings(req.userId);
        res.json(settings);
    } catch (error) {
        console.error('Get autoapply settings error:', error);
        res.status(500).json({ error: 'Failed to get autoapply settings' });
    }
});

// Update AutoApply settings
router.put('/autoapply/settings', authenticate, async (req: any, res: Response) => {
    try {
        const settings = await userProfileService.updateAutoApplySettings(req.userId, req.body);
        res.json(settings);
    } catch (error) {
        console.error('Update autoapply settings error:', error);
        res.status(500).json({ error: 'Failed to update autoapply settings' });
    }
});

// Enable AutoApply
router.post('/autoapply/enable', authenticate, async (req: any, res: Response) => {
    try {
        const success = await userProfileService.enableAutoApply(req.userId);
        if (success) {
            res.json({ success: true, message: 'AutoApply enabled successfully' });
        } else {
            res.status(400).json({ 
                success: false, 
                message: 'Profile must be at least 80% complete to enable AutoApply' 
            });
        }
    } catch (error) {
        console.error('Enable autoapply error:', error);
        res.status(500).json({ error: 'Failed to enable autoapply' });
    }
});

// Debug endpoint for testing
router.get('/debug/readiness', async (req: Request, res: Response) => {
    try {
        res.json({
            status: 'ready',
            timestamp: new Date().toISOString(),
            services: {
                database: 'connected',
                autoapply: 'enabled'
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Service not ready' });
    }
});

// Integration script endpoint
router.get('/integration.js', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(`
// AutoApply Integration Script
class AutoApplyIntegration {
    constructor() {
        this.apiBase = '/api/autoapply';
        this.token = localStorage.getItem('authToken');
    }

    async updateProfileCompletion() {
        try {
            const response = await fetch(this.apiBase + '/profile/completion', {
                headers: { 'Authorization': 'Bearer ' + this.token }
            });
            const data = await response.json();
            
            // Update UI elements
            const percentageEl = document.querySelector('[data-completion-percentage]');
            const progressEl = document.querySelector('[data-completion-progress]');
            const buttonEl = document.querySelector('[data-autoapply-button]');
            
            if (percentageEl) percentageEl.textContent = data.completionPercentage + '%';
            if (progressEl) progressEl.style.width = data.completionPercentage + '%';
            
            if (buttonEl) {
                if (data.completionPercentage >= 80) {
                    buttonEl.disabled = false;
                    buttonEl.textContent = 'Start AutoApply';
                } else {
                    buttonEl.disabled = true;
                    buttonEl.textContent = 'Complete Profile (' + data.completionPercentage + '%)';
                }
            }
            
            return data;
        } catch (error) {
            console.error('Failed to update profile completion:', error);
            return null;
        }
    }

    async enableAutoApply() {
        try {
            const response = await fetch(this.apiBase + '/autoapply/enable', {
                method: 'POST',
                headers: { 
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data.success;
        } catch (error) {
            console.error('Failed to enable AutoApply:', error);
            return false;
        }
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.autoApplyIntegration = new AutoApplyIntegration();
        window.autoApplyIntegration.updateProfileCompletion();
    });
} else {
    window.autoApplyIntegration = new AutoApplyIntegration();
    window.autoApplyIntegration.updateProfileCompletion();
}
    `);
});

export default router;