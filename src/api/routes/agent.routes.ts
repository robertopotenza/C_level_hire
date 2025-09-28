import { Request, Response, Router } from 'express';

const router = Router();

// Get agent status
router.get('/status', async (_req: Request, res: Response) => {
  res.json({
    status: 'active',
    mode: 'balanced',
    currentFocus: 'applications',
    decisionsToday: 12,
    applicationsToday: 5,
    lastDecision: '30 minutes ago',
    nextCheck: 'in 30 minutes'
  });
});

// Update agent settings
router.post('/settings', async (req: Request, res: Response) => {
  const { mode } = req.body as { mode: string };

  res.json({
    success: true,
    message: `Agent switched to ${mode} mode`,
    mode
  });
});

// Get agent decisions history
router.get('/decisions', async (_req: Request, res: Response) => {
  res.json({
    decisions: [
      {
        type: 'RESUME_UPDATE',
        reasoning: 'Low response rate detected, optimizing resume',
        timestamp: new Date(Date.now() - 3600000),
        result: 'success'
      },
      {
        type: 'APPLICATION_CAMPAIGN',
        reasoning: 'Found 5 high-match opportunities',
        timestamp: new Date(Date.now() - 7200000),
        result: 'success'
      }
    ]
  });
});

export default router;
