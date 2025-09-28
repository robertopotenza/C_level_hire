import { PlatformConfig } from '../../config/platform.config';

interface AgentUser {
  id: string;
  targetSalary: number;
}

export class AgentOrchestrator {
  private agents: Map<string, CareerAgent> = new Map();

  async startAllAgents(): Promise<void> {
    console.log('Starting AI Agent Orchestrator...');

    const activeUsers = await this.getActiveUsers();

    for (const user of activeUsers) {
      await this.startAgentForUser(user);
    }

    console.log(`✅ Started ${activeUsers.length} agents`);
  }

  async startAgentForUser(user: AgentUser): Promise<void> {
    const agent = new CareerAgent(user);
    this.agents.set(user.id, agent);

    agent.startWorkLoop();

    console.log(`Agent started for user ${user.id} (Target: $${user.targetSalary})`);
  }

  private async getActiveUsers(): Promise<AgentUser[]> {
    return [];
  }
}

class CareerAgent {
  constructor(private readonly user: AgentUser) {}

  startWorkLoop(): void {
    setInterval(async () => {
      await this.checkAndAct();
    }, PlatformConfig.features.aiAgent.checkInterval);
  }

  private async checkAndAct(): Promise<void> {
    console.log(`Agent working for user ${this.user.id}`);
  }
}
