/**
 * Diagnostic script to check which profile section is missing in production
 *
 * This will help identify why the dashboard shows 75% instead of 100%
 *
 * Usage:
 * 1. Get a valid auth token from localStorage when logged into the dashboard
 * 2. Replace YOUR_TOKEN_HERE with the actual token
 * 3. Run: node check-profile-completion.js
 */

const https = require('https');

const API_URL = 'https://autoapply-production-1393.up.railway.app';
const AUTH_TOKEN = 'YOUR_TOKEN_HERE'; // Replace with actual token from browser localStorage

function makeRequest(path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'autoapply-production-1393.up.railway.app',
            port: 443,
            path: path,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve(data);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

async function checkCompletion() {
    console.log('🔍 Checking Profile Completion Status\n');
    console.log('API URL:', API_URL);
    console.log('Token:', AUTH_TOKEN.substring(0, 20) + '...\n');

    try {
        // Check completion endpoint
        console.log('1️⃣ Fetching /api/wizard/completion...');
        const completion = await makeRequest('/api/wizard/completion');
        console.log('Response:', JSON.stringify(completion, null, 2));

        if (completion.success) {
            const { percentage, sections, completedSections, totalSections } = completion.data;

            console.log('\n📊 COMPLETION SUMMARY:');
            console.log('━'.repeat(50));
            console.log(`Overall: ${percentage}% (${completedSections}/${totalSections} sections)`);
            console.log('━'.repeat(50));
            console.log('\n📋 SECTION STATUS:');
            console.log('  Job Preferences:', sections.jobPreferences ? '✅ Complete' : '❌ Missing');
            console.log('  Profile:', sections.profile ? '✅ Complete' : '❌ Missing');
            console.log('  Eligibility:', sections.eligibility ? '✅ Complete' : '❌ Missing');
            console.log('  Screening:', sections.screening ? '✅ Complete' : '❌ Missing');

            // Identify missing sections
            const missingSections = [];
            if (!sections.jobPreferences) missingSections.push('Job Preferences');
            if (!sections.profile) missingSections.push('Profile');
            if (!sections.eligibility) missingSections.push('Eligibility');
            if (!sections.screening) missingSections.push('Screening Answers');

            if (missingSections.length > 0) {
                console.log('\n⚠️  MISSING SECTIONS:');
                missingSections.forEach(section => {
                    console.log(`  • ${section}`);
                });
                console.log('\n💡 ACTION NEEDED:');
                console.log(`Complete the missing section${missingSections.length > 1 ? 's' : ''} in the wizard to reach 100%`);
            } else {
                console.log('\n✅ All sections complete!');
            }

            // If showing 75%, identify which section is missing
            if (percentage === 75) {
                console.log('\n🔍 75% indicates exactly 3 out of 4 sections are complete.');
                console.log('The missing section is causing the static 75% display.');
            }
        } else {
            console.log('\n❌ Error:', completion.message);
            if (completion.message.includes('token')) {
                console.log('\n💡 To fix:');
                console.log('1. Open browser DevTools (F12)');
                console.log('2. Go to Application/Storage > Local Storage');
                console.log('3. Copy the value of "authToken"');
                console.log('4. Replace YOUR_TOKEN_HERE in this script');
            }
        }

    } catch (error) {
        console.error('❌ Request failed:', error.message);
    }
}

// Run the check
checkCompletion();
