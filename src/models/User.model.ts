export interface User {
  id: string;
  email: string;
  passwordHash: string;
  profile: UserProfile;
  careerGoals: CareerGoals;
  subscription: Subscription;
  activity: ActivityMetrics;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  currentRole?: string;
  currentSalary?: number;
  yearsExperience: number;
  location: {
    city: string;
    state: string;
    country: string;
  };
  linkedinUrl?: string;
  skills: Skill[];
}

export interface CareerGoals {
  targetSalary: number;
  targetRoles: string[];
  targetCompanies: string[];
  timeline: {
    idealStart: Date;
    mustStart: Date;
  };
}

export interface Subscription {
  plan: 'weekly' | 'monthly' | 'quarterly';
  status: 'active' | 'paused' | 'cancelled';
  weeklyRate: number;
  nextBillingDate: Date;
  addons: {
    interviewIntelligence: boolean;
  };
}

export interface ActivityMetrics {
  applicationsSubmitted: number;
  responsesReceived: number;
  interviewsScheduled: number;
  offersReceived: number;
  responseRate: number;
  lastActive: Date;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}
