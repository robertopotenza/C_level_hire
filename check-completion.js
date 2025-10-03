const { PrismaClient } = require('@prisma/client');

async function checkProfileCompletion() {
    const prisma = new PrismaClient();

    try {
        // Find the user (assuming eng.potenza@gmail.com)
        const user = await prisma.user.findUnique({
            where: { email: 'eng.potenza@gmail.com' },
            include: {
                profile: true
            }
        });

        if (!user) {
            console.log('❌ User not found');
            return;
        }

        console.log('👤 User found:', user.email);

        const profile = user.profile;
        if (!profile) {
            console.log('❌ No profile found');
            return;
        }

        console.log('📊 Profile Analysis:');
        console.log('==================');

        // Check each section (25% each)
        let completed = 0;
        const sections = [];

        // 1. Personal Info (25%)
        const hasPersonalInfo = profile.userId && profile.location && profile.phone;
        sections.push({
            name: 'Personal Info',
            complete: hasPersonalInfo,
            fields: {
                userId: !!profile.userId,
                location: !!profile.location,
                phone: !!profile.phone
            }
        });
        if (hasPersonalInfo) completed++;

        // 2. Experience (25%)
        const hasExperience = profile.currentRole && profile.yearsExperience && profile.currentSalary;
        sections.push({
            name: 'Experience',
            complete: hasExperience,
            fields: {
                currentRole: !!profile.currentRole,
                yearsExperience: !!profile.yearsExperience,
                currentSalary: !!profile.currentSalary
            }
        });
        if (hasExperience) completed++;

        // 3. Education & Skills (25%)
        const hasEducationSkills = profile.skills && profile.linkedinUrl;
        sections.push({
            name: 'Education & Skills',
            complete: hasEducationSkills,
            fields: {
                skills: !!profile.skills,
                linkedinUrl: !!profile.linkedinUrl
            }
        });
        if (hasEducationSkills) completed++;

        // 4. Autoapply Setup (25%)
        const hasAutoapply = profile.resumeUrl && profile.workEligibility;
        sections.push({
            name: 'Autoapply Setup',
            complete: hasAutoapply,
            fields: {
                resumeUrl: !!profile.resumeUrl,
                workEligibility: !!profile.workEligibility
            }
        });
        if (hasAutoapply) completed++;

        const percentage = Math.round((completed / 4) * 100);

        console.log(`Completion: ${completed}/4 sections (${percentage}%)\n`);

        sections.forEach((section, i) => {
            const status = section.complete ? '✅' : '❌';
            console.log(`${i+1}. ${section.name}: ${status}`);
            Object.entries(section.fields).forEach(([field, hasValue]) => {
                const fieldStatus = hasValue ? '✓' : '✗';
                console.log(`   ${fieldStatus} ${field}`);
            });
            console.log('');
        });

        // Show actual field values for debugging
        console.log('Raw Profile Data:');
        console.log('================');
        console.log(JSON.stringify({
            userId: profile.userId,
            location: profile.location,
            phone: profile.phone,
            currentRole: profile.currentRole,
            yearsExperience: profile.yearsExperience,
            currentSalary: profile.currentSalary,
            skills: profile.skills ? 'HAS_DATA' : null,
            linkedinUrl: profile.linkedinUrl,
            resumeUrl: profile.resumeUrl,
            workEligibility: profile.workEligibility
        }, null, 2));

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

checkProfileCompletion();