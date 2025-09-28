import { execSync } from 'child_process';

try {
  console.log('Running Prisma migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('Migrations completed successfully');
} catch (error) {
  console.error('Failed to run migrations', error);
  process.exit(1);
}
