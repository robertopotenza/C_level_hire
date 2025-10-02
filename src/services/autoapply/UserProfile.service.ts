import { PrismaClient } from '@prisma/client';

export class UserProfileService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getCompleteProfile(userId: string): Promise<any> {
        try {
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
                include: {
                    profile: true,
                    autoApplySettings: true
                }
            });

            if (!user) {
                throw new Error('User not found');
            }

            // Create profile if it doesn't exist
            if (!user.profile) {
                await this.prisma.profile.create({
                    data: {
                        userId: userId,
                        completionPercentage: 0
                    }
                });
                
                // Refetch with profile
                return await this.getCompleteProfile(userId);
            }

            const profile = user.profile;
            const completionPercentage = this.calculateCompletionPercentage(profile);
            
            // Update completion percentage if changed
            if (profile.completionPercentage !== completionPercentage) {
                await this.prisma.profile.update({
                    where: { id: profile.id },
                    data: { completionPercentage }
                });
            }

            return {
                user: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    targetSalary: user.targetSalary
                },
                profile: {
                    ...profile,
                    completionPercentage,
                    skills: profile.skills ? JSON.parse(profile.skills) : [],
                    preferences: profile.preferences ? JSON.parse(profile.preferences) : {}
                },
                autoApplySettings: user.autoApplySettings
            };
        } catch (error) {
            console.error('Error getting complete profile:', error);
            throw error;
        }
    }

    calculateCompletionPercentage(profile: any): number {
        let completed = 0;
        let total = 4;

        // Personal Info (25%)
        if (profile.userId && profile.location && profile.phone) {
            completed++;
        }

        // Experience (25%)
        if (profile.currentRole && profile.yearsExperience && profile.currentSalary) {
            completed++;
        }

        // Education & Skills (25%)
        if (profile.skills && profile.linkedinUrl) {
            completed++;
        }

        // Autoapply Setup (25%)
        if (profile.resumeUrl && profile.workEligibility) {
            completed++;
        }

        return Math.round((completed / total) * 100);
    }

    async updateProfile(userId: string, updateData: any) {
        try {
            const updatedProfile = await this.prisma.profile.upsert({
                where: { userId },
                create: {
                    userId,
                    ...updateData,
                    skills: updateData.skills ? JSON.stringify(updateData.skills) : null,
                    preferences: updateData.preferences ? JSON.stringify(updateData.preferences) : null
                },
                update: {
                    ...updateData,
                    skills: updateData.skills ? JSON.stringify(updateData.skills) : undefined,
                    preferences: updateData.preferences ? JSON.stringify(updateData.preferences) : undefined,
                    updatedAt: new Date()
                }
            });

            // Recalculate completion percentage
            const completionPercentage = this.calculateCompletionPercentage(updatedProfile);
            
            await this.prisma.profile.update({
                where: { id: updatedProfile.id },
                data: { 
                    completionPercentage,
                    personalInfoComplete: !!(updatedProfile.userId && updatedProfile.location && updatedProfile.phone),
                    experienceComplete: !!(updatedProfile.currentRole && updatedProfile.yearsExperience && updatedProfile.currentSalary),
                    educationComplete: !!(updatedProfile.skills && updatedProfile.linkedinUrl),
                    skillsComplete: !!(updatedProfile.resumeUrl && updatedProfile.workEligibility)
                }
            });

            return updatedProfile;
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    }

    async isProfileComplete(userId: string): Promise<boolean> {
        try {
            const profile = await this.getCompleteProfile(userId);
            return profile.profile.completionPercentage >= 80;
        } catch (error) {
            console.error('Error checking profile completion:', error);
            return false;
        }
    }

    async getAutoApplySettings(userId: string) {
        try {
            let settings = await this.prisma.autoApplySettings.findUnique({
                where: { userId }
            });

            if (!settings) {
                settings = await this.prisma.autoApplySettings.create({
                    data: {
                        userId,
                        isEnabled: false,
                        maxDailyApplications: 10
                    }
                });
            }

            return {
                ...settings,
                targetRoles: settings.targetRoles ? JSON.parse(settings.targetRoles) : [],
                excludedCompanies: settings.excludedCompanies ? JSON.parse(settings.excludedCompanies) : [],
                preferredLocations: settings.preferredLocations ? JSON.parse(settings.preferredLocations) : []
            };
        } catch (error) {
            console.error('Error getting autoapply settings:', error);
            throw error;
        }
    }

    async updateAutoApplySettings(userId: string, settings: any) {
        try {
            return await this.prisma.autoApplySettings.upsert({
                where: { userId },
                create: {
                    userId,
                    ...settings,
                    targetRoles: settings.targetRoles ? JSON.stringify(settings.targetRoles) : null,
                    excludedCompanies: settings.excludedCompanies ? JSON.stringify(settings.excludedCompanies) : null,
                    preferredLocations: settings.preferredLocations ? JSON.stringify(settings.preferredLocations) : null
                },
                update: {
                    ...settings,
                    targetRoles: settings.targetRoles ? JSON.stringify(settings.targetRoles) : undefined,
                    excludedCompanies: settings.excludedCompanies ? JSON.stringify(settings.excludedCompanies) : undefined,
                    preferredLocations: settings.preferredLocations ? JSON.stringify(settings.preferredLocations) : undefined,
                    updatedAt: new Date()
                }
            });
        } catch (error) {
            console.error('Error updating autoapply settings:', error);
            throw error;
        }
    }

    async enableAutoApply(userId: string): Promise<boolean> {
        try {
            const isComplete = await this.isProfileComplete(userId);
            if (!isComplete) {
                return false;
            }

            await this.updateAutoApplySettings(userId, {
                isEnabled: true,
                nextScanAt: new Date(Date.now() + 2 * 60 * 60 * 1000) // Next scan in 2 hours
            });

            return true;
        } catch (error) {
            console.error('Error enabling autoapply:', error);
            throw error;
        }
    }
}