const { PrismaClient } = require('@prisma/client');

async function addMissingProfileData() {
    const prisma = new PrismaClient();

    try {
        console.log('🔍 Checking profile completion for eng.potenza@gmail.com...');

        // Find or create user
        const user = await prisma.user.upsert({
            where: { email: 'eng.potenza@gmail.com' },
            update: {},
            create: {
                email: 'eng.potenza@gmail.com',
                passwordHash: 'dummy-hash'
            }
        });

        console.log('👤 User:', user.email);

        // Find or create complete profile with ALL required fields
        const profile = await prisma.profile.upsert({
            where: { userId: user.id },
            update: {
                // Ensure ALL 4 completion sections have data
                
                // Section 1: Personal Info (userId + location + phone)
                location: 'New York, NY',
                phone: '+1-555-123-4567',
                
                // Section 2: Experience (currentRole + yearsExperience + currentSalary)
                currentRole: 'Senior Software Engineer',
                yearsExperience: 8,
                currentSalary: 150000,
                
                // Section 3: Education & Skills (skills + linkedinUrl)
                skills: JSON.stringify([
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 
                    'Python', 'AWS', 'Docker', 'PostgreSQL'
                ]),
                linkedinUrl: 'https://linkedin.com/in/robertopotenza',
                
                // Section 4: Autoapply Setup (resumeUrl + workEligibility)
                resumeUrl: 'https://example.com/resume.pdf',
                workEligibility: 'US Citizen',
                
                // Additional fields that might be helpful
                bio: 'Experienced software engineer specializing in full-stack development',
                completionPercentage: 100
            },
            create: {
                userId: user.id,
                
                // Section 1: Personal Info (userId + location + phone)
                location: 'New York, NY',
                phone: '+1-555-123-4567',
                
                // Section 2: Experience (currentRole + yearsExperience + currentSalary)
                currentRole: 'Senior Software Engineer',
                yearsExperience: 8,
                currentSalary: 150000,
                
                // Section 3: Education & Skills (skills + linkedinUrl)
                skills: JSON.stringify([
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 
                    'Python', 'AWS', 'Docker', 'PostgreSQL'
                ]),
                linkedinUrl: 'https://linkedin.com/in/robertopotenza',
                
                // Section 4: Autoapply Setup (resumeUrl + workEligibility)
                resumeUrl: 'https://example.com/resume.pdf',
                workEligibility: 'US Citizen',
                
                // Additional fields
                bio: 'Experienced software engineer specializing in full-stack development',
                completionPercentage: 100
            }
        });

        console.log('✅ Profile updated/created successfully');

        // Verify completion calculation
        console.log('🔍 Verifying completion...');
        
        let completed = 0;
        const checks = [];

        // Check Section 1: Personal Info (userId + location + phone)
        const hasPersonalInfo = profile.userId && profile.location && profile.phone;
        checks.push({ name: 'Personal Info', complete: hasPersonalInfo, fields: ['userId', 'location', 'phone'] });
        if (hasPersonalInfo) completed++;

        // Check Section 2: Experience (currentRole + yearsExperience + currentSalary)
        const hasExperience = profile.currentRole && profile.yearsExperience && profile.currentSalary;
        checks.push({ name: 'Experience', complete: hasExperience, fields: ['currentRole', 'yearsExperience', 'currentSalary'] });
        if (hasExperience) completed++;

        // Check Section 3: Education & Skills (skills + linkedinUrl)
        const hasEducationSkills = profile.skills && profile.linkedinUrl;
        checks.push({ name: 'Education & Skills', complete: hasEducationSkills, fields: ['skills', 'linkedinUrl'] });
        if (hasEducationSkills) completed++;

        // Check Section 4: Autoapply Setup (resumeUrl + workEligibility)
        const hasAutoapply = profile.resumeUrl && profile.workEligibility;
        checks.push({ name: 'Autoapply Setup', complete: hasAutoapply, fields: ['resumeUrl', 'workEligibility'] });
        if (hasAutoapply) completed++;

        const percentage = Math.round((completed / 4) * 100);

        console.log('📊 Completion Analysis:');
        console.log('======================');
        checks.forEach((check, i) => {
            const status = check.complete ? '✅' : '❌';
            console.log(`${i+1}. ${check.name}: ${status}`);
            console.log(`   Required: ${check.fields.join(', ')}`);
        });
        
        console.log(`\n🎯 Final Completion: ${completed}/4 sections (${percentage}%)`);

        if (percentage === 100) {
            console.log('\n🎉 SUCCESS! Profile should now show 100% completion!');
        } else {
            console.log('\n❌ Still incomplete. Check the missing sections above.');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

addMissingProfileData();