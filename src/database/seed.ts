import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedDatabase() {
    console.log('🌱 Seeding database with test data...');

    try {
        // Create a test user
        const hashedPassword = await bcrypt.hash('testpassword123', 10);
        
        const user = await prisma.user.create({
            data: {
                email: 'test@clevelhire.com',
                passwordHash: hashedPassword,
                firstName: 'John',
                lastName: 'Executive',
                targetSalary: 250000,
                weeklyRate: 480.77 // 0.1% of 250k salary
            }
        });

        console.log('✅ Created test user:', user.email);

        // Create a comprehensive profile
        const profile = await prisma.profile.create({
            data: {
                userId: user.id,
                currentRole: 'Senior VP of Engineering',
                currentSalary: 220000,
                yearsExperience: 15,
                location: 'San Francisco, CA',
                linkedinUrl: 'https://linkedin.com/in/johnexecutive',
                phone: '+1-415-555-0123',
                address: '123 Tech Street, San Francisco, CA 94105',
                workEligibility: 'US Citizen',
                resumeUrl: 'https://example.com/resume.pdf',
                coverLetter: 'Experienced technology leader with 15+ years in scaling engineering organizations.',
                skills: JSON.stringify([
                    'Engineering Leadership',
                    'Team Building',
                    'Strategic Planning',
                    'Product Development',
                    'Cloud Architecture',
                    'Agile Methodologies'
                ]),
                preferences: JSON.stringify({
                    targetRoles: ['VP Engineering', 'CTO', 'Head of Engineering'],
                    industries: ['Technology', 'Fintech', 'Healthcare'],
                    companySize: 'Series B to Public',
                    remotePreference: 'Hybrid'
                }),
                personalInfoComplete: true,
                experienceComplete: true,
                educationComplete: true,
                skillsComplete: true,
                completionPercentage: 100
            }
        });

        console.log('✅ Created complete profile with 100% completion');

        // Create AutoApply settings
        const autoApplySettings = await prisma.autoApplySettings.create({
            data: {
                userId: user.id,
                isEnabled: false,
                maxDailyApplications: 15,
                targetRoles: JSON.stringify(['VP Engineering', 'CTO', 'Head of Engineering']),
                excludedCompanies: JSON.stringify(['Meta', 'Amazon']),
                minSalary: 200000,
                maxSalary: 400000,
                preferredLocations: JSON.stringify(['San Francisco', 'New York', 'Remote']),
                remoteOnly: false
            }
        });

        console.log('✅ Created AutoApply settings');

        // Create a second user with incomplete profile
        const incompleteUser = await prisma.user.create({
            data: {
                email: 'incomplete@clevelhire.com',
                passwordHash: hashedPassword,
                firstName: 'Jane',
                lastName: 'Candidate',
                targetSalary: 180000,
                weeklyRate: 346.15
            }
        });

        const incompleteProfile = await prisma.profile.create({
            data: {
                userId: incompleteUser.id,
                currentRole: 'Director of Product',
                yearsExperience: 8,
                location: 'Austin, TX',
                personalInfoComplete: false,
                experienceComplete: true,
                educationComplete: false,
                skillsComplete: false,
                completionPercentage: 25
            }
        });

        console.log('✅ Created incomplete profile (25% completion) for testing');

        // Create some sample job applications
        const applications = await prisma.application.createMany({
            data: [
                {
                    userId: user.id,
                    jobTitle: 'VP of Engineering',
                    company: 'TechCorp Inc',
                    jobUrl: 'https://techcorp.com/jobs/vp-engineering',
                    status: 'applied',
                    appliedAt: new Date(),
                    matchScore: 0.92,
                    atsType: 'workday',
                    applicationMethod: 'autoapply'
                },
                {
                    userId: user.id,
                    jobTitle: 'CTO',
                    company: 'StartupXYZ',
                    jobUrl: 'https://startupxyz.com/careers/cto',
                    status: 'pending',
                    appliedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
                    matchScore: 0.87,
                    atsType: 'greenhouse',
                    applicationMethod: 'autoapply'
                }
            ]
        });

        console.log('✅ Created sample job applications');

        console.log('\n🎉 Database seeded successfully!');
        console.log('\n📊 Test Data Summary:');
        console.log(`- Complete Profile User: ${user.email} (100% complete)`);
        console.log(`- Incomplete Profile User: ${incompleteUser.email} (25% complete)`);
        console.log(`- Password for both: testpassword123`);
        console.log(`- Sample Applications: 2 entries`);
        console.log('\n🔧 You can now test the dashboard with these users!');

        return {
            completeUser: user,
            incompleteUser: incompleteUser,
            profile,
            incompleteProfile,
            autoApplySettings
        };

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

async function clearDatabase() {
    console.log('🧹 Clearing existing data...');
    
    await prisma.application.deleteMany();
    await prisma.autoApplySettings.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.subscription.deleteMany();
    await prisma.user.deleteMany();
    
    console.log('✅ Database cleared');
}

// Migration function to convert existing wizard data
async function migrateWizardData() {
    console.log('🔄 Migrating wizard data to autoapply profiles...');
    
    // This would typically read from existing user data and convert it
    // For now, we'll demonstrate the structure
    
    const existingWizardData = {
        personalInfo: {
            firstName: 'Sarah',
            lastName: 'Johnson',
            email: 'sarah@example.com',
            phone: '+1-555-0199',
            location: 'Seattle, WA',
            workEligibility: 'H1B Visa'
        },
        experience: {
            currentRole: 'Senior Product Manager',
            currentSalary: 165000,
            yearsExperience: 12,
            targetSalary: 200000
        },
        education: {
            linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
            resumeUrl: 'https://example.com/sarah-resume.pdf'
        },
        skills: {
            technical: ['Product Strategy', 'Data Analytics', 'User Research', 'Agile/Scrum'],
            preferences: {
                targetRoles: ['Senior PM', 'Director of Product', 'VP Product'],
                industries: ['SaaS', 'E-commerce', 'Fintech']
            }
        }
    };

    const hashedPassword = await bcrypt.hash('migrateduser123', 10);
    
    const migratedUser = await prisma.user.create({
        data: {
            email: existingWizardData.personalInfo.email,
            passwordHash: hashedPassword,
            firstName: existingWizardData.personalInfo.firstName,
            lastName: existingWizardData.personalInfo.lastName,
            targetSalary: existingWizardData.experience.targetSalary,
            weeklyRate: (existingWizardData.experience.targetSalary * 0.001) // 0.1% weekly
        }
    });

    const migratedProfile = await prisma.profile.create({
        data: {
            userId: migratedUser.id,
            phone: existingWizardData.personalInfo.phone,
            location: existingWizardData.personalInfo.location,
            workEligibility: existingWizardData.personalInfo.workEligibility,
            currentRole: existingWizardData.experience.currentRole,
            currentSalary: existingWizardData.experience.currentSalary,
            yearsExperience: existingWizardData.experience.yearsExperience,
            linkedinUrl: existingWizardData.education.linkedinUrl,
            resumeUrl: existingWizardData.education.resumeUrl,
            skills: JSON.stringify(existingWizardData.skills.technical),
            preferences: JSON.stringify(existingWizardData.skills.preferences),
            personalInfoComplete: true,
            experienceComplete: true,
            educationComplete: true,
            skillsComplete: true,
            completionPercentage: 100
        }
    });

    console.log('✅ Migrated wizard data for user:', migratedUser.email);
    return { migratedUser, migratedProfile };
}

async function main() {
    const action = process.argv[2] || 'seed';
    
    try {
        switch (action) {
            case 'clear':
                await clearDatabase();
                break;
            case 'migrate':
                await migrateWizardData();
                break;
            case 'seed':
            default:
                await clearDatabase();
                await seedDatabase();
                await migrateWizardData();
                break;
        }
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

if (require.main === module) {
    main();
}

export { seedDatabase, clearDatabase, migrateWizardData };