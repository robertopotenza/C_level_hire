export const PlatformConfig = {
  platform: {
    name: "C-Level Hire AI Agent",
    version: "2.0.0",
    tagline: "Executive-Level Job Search Tools, Democratized",
    mission: "Making $15,000 career services accessible at 0.1% of target salary"
  },

  pricing: {
    base: {
      weeklyPercentage: 0.001,
      currency: "USD",
      minimumWeekly: 25,
      maximumWeekly: 500
    },
    commitments: {
      weekly: {
        discount: 0,
        description: "Pay as you go"
      },
      monthly: {
        discount: 0.15,
        percentage: 0.00085,
        description: "Save 15% with monthly commitment"
      },
      quarterly: {
        discount: 0.25,
        percentage: 0.00075,
        description: "Best value - Save 25%"
      }
    },
    guarantees: {
      interviewGuarantee: {
        weeks: 8,
        discountOnFailure: 0.25,
        duration: 4
      },
      pauseAllowance: {
        weeksPerQuarter: 2,
        dataRetention: true
      }
    }
  },

  features: {
    resumeTailor: {
      enabled: true,
      version: "3.0",
      layers: {
        atsOptimization: true,
        implicitDecoder: true,
        strategicRestructuring: true
      }
    },
    selfApply: {
      enabled: true,
      intelligentTiming: true,
      qualityScoring: true,
      campaignAnalytics: true
    },
    interviewIntelligence: {
      enabled: true,
      requiresAddon: true,
      addonPricePercentage: 0.0005
    },
    networkActivation: {
      enabled: true,
      linkedinIntegration: true,
      maxDegreeConnection: 3
    },
    aiAgent: {
      enabled: true,
      checkInterval: 3600000,
      urgentCheckInterval: 900000
    }
  }
};
