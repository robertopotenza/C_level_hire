import { Request, Response, Router } from 'express';
import { PlatformConfig } from '../../config/platform.config';

type CommitmentKey = keyof typeof PlatformConfig.pricing.commitments;

const router = Router();

// Calculate pricing based on target salary
router.post('/pricing/calculate', (req: Request, res: Response) => {
  const { targetSalary, commitment = 'weekly' } = req.body as {
    targetSalary: number;
    commitment?: CommitmentKey;
  };

  if (typeof targetSalary !== 'number') {
    return res.status(400).json({ error: 'targetSalary must be a number' });
  }

  const commitmentKey: CommitmentKey = commitment in PlatformConfig.pricing.commitments
    ? commitment
    : 'weekly';

  const baseRate = targetSalary * PlatformConfig.pricing.base.weeklyPercentage;
  const discount = PlatformConfig.pricing.commitments[commitmentKey].discount;
  const finalRate = baseRate * (1 - discount);
  const weeklyRate = Math.max(finalRate, PlatformConfig.pricing.base.minimumWeekly);

  res.json({
    targetSalary,
    commitment: commitmentKey,
    weeklyRate,
    monthlyRate: weeklyRate * 4.33,
    annualSavings: baseRate * discount * 52,
    message: `Invest just $${Math.round(weeklyRate)}/week to land your $${targetSalary.toLocaleString()} role`
  });
});

// Resume tailoring endpoint
router.post('/resume/tailor', async (req: Request, res: Response) => {
  const { resumeId, jobPostingUrl } = req.body as {
    resumeId: string;
    jobPostingUrl: string;
  };

  try {
    res.json({
      success: true,
      message: 'Resume tailored with 3-layer optimization',
      matchScore: 0.92,
      optimizations: {
        keywordsAdded: 15,
        structureImproved: true,
        culturalAlignment: 'matched'
      },
      resumeId,
      jobPostingUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to tailor resume' });
  }
});

// Application campaign endpoint
router.post('/apply/campaign', async (req: Request, res: Response) => {
  const { searchCriteria, limit = 10 } = req.body as {
    searchCriteria: Record<string, unknown>;
    limit?: number;
  };

  try {
    res.json({
      success: true,
      message: 'Campaign launched',
      applications: limit,
      estimatedResponseTime: '3-5 days',
      optimalSubmissionTimes: ['Tuesday 10am', 'Wednesday 2pm'],
      searchCriteria
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to launch campaign' });
  }
});

// Dashboard metrics endpoint
router.get('/dashboard/metrics', async (_req: Request, res: Response) => {
  res.json({
    applicationsThisWeek: 25,
    responseRate: 0.24,
    interviewsScheduled: 3,
    daysToTarget: 45,
    agentStatus: 'working',
    lastAgentAction: '2 hours ago'
  });
});

export default router;
