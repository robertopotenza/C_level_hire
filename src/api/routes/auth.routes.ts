import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import { DatabaseService } from '../../services/Database.service';

const router = Router();

interface SignupBody {
  email: string;
  password: string;
  targetSalary: number;
}

// Sign up with target salary (determines pricing)
router.post('/signup', async (req: Request, res: Response) => {
  const { email, password, targetSalary } = req.body as SignupBody;

  if (!email || !password || typeof targetSalary !== 'number') {
    return res.status(400).json({ error: 'Invalid signup payload' });
  }

  try {
    const prisma = DatabaseService.getPrismaClient();
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const weeklyRate = targetSalary * 0.001;

    // Create user in database
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        targetSalary,
        weeklyRate
      }
    });

    const jwtSecret: Secret = process.env.JWT_SECRET || 'secret';
    const signOptions: SignOptions = {
      expiresIn: process.env.JWT_EXPIRES_IN ? parseInt(process.env.JWT_EXPIRES_IN) : 7 * 24 * 60 * 60 // 7 days in seconds
    };

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      jwtSecret,
      signOptions
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        weeklyRate,
        message: `Welcome! Your weekly investment: $${weeklyRate}`
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  if (!email || !password) {
    return res.status(400).json({ error: 'Invalid login payload' });
  }

  try {
    const prisma = DatabaseService.getPrismaClient();
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const jwtSecret: Secret = process.env.JWT_SECRET || 'secret';
    const signOptions: SignOptions = {
      expiresIn: process.env.JWT_EXPIRES_IN ? parseInt(process.env.JWT_EXPIRES_IN) : 7 * 24 * 60 * 60 // 7 days in seconds
    };

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      jwtSecret,
      signOptions
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        weeklyRate: user.weeklyRate
      },
      message: 'Welcome back!'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;
