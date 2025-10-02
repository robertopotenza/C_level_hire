import express from 'express';
import path from 'path';

const router = express.Router();

// Professional interface route inspired by enterprise platforms
router.get('/professional', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/professional.html'));
});

// Rev1 interface - Enterprise-grade split-screen design
router.get('/rev1', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/rev1.html'));
});

// Rev2 interface - Democratized job search tools (rev1 base with FOMO messaging)
router.get('/rev2', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/rev2.html'));
});

// Rev3 interface - Production-ready with SEO, accessibility, analytics, and lead capture
router.get('/rev3', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/rev3.html'));
});

// Rev3 Production interface - Complete enterprise-grade implementation
router.get('/rev3-production', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/rev3-production.html'));
});

// Dashboard interface - Dynamic profile completion with autoapply integration
router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/dashboard.html'));
});

router.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/dashboard.html'));
});

// Integration test interface
router.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/test-integration.html'));
});

router.get('/test-integration', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/test-integration.html'));
});

// Lead capture API endpoint for rev3
router.post('/api/leads/capture', (req, res) => {
    const { email, targetSalary, fullName } = req.body;
    
    // In production, this would save to database
    console.log('Lead captured:', { email, targetSalary, fullName, timestamp: new Date() });
    
    res.json({
        success: true,
        message: 'Lead captured successfully',
        leadId: Date.now().toString()
    });
});

// API endpoints for professional interface
router.get('/api/professional/stats', (req, res) => {
    res.json({
        executivesPlaced: 1247,
        averageSalaryIncrease: '127%',
        timeToHire: '18 days',
        clientSatisfaction: '98.4%',
        companiesServed: 89,
        rolesActive: Math.floor(Math.random() * 30) + 45
    });
});

router.get('/api/professional/testimonials', (req, res) => {
    res.json({
        testimonials: [
            {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                company: "TechCorp Global",
                quote: "The AI-powered matching was incredible. Found my dream CTO role in 12 days with a 40% salary increase.",
                image: "/images/testimonial-1.jpg"
            },
            {
                name: "Michael Rodriguez",
                role: "Chief Financial Officer", 
                company: "Innovation Labs",
                quote: "Their executive network and negotiation support secured me equity worth $2.1M. Exceptional service.",
                image: "/images/testimonial-2.jpg"
            },
            {
                name: "Jennifer Taylor",
                role: "Chief Marketing Officer",
                company: "Growth Dynamics",
                quote: "Professional, strategic, results-driven. They understand C-suite recruitment like no one else.",
                image: "/images/testimonial-3.jpg"
            }
        ]
    });
});

export default router;