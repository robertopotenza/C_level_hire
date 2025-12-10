import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Box, Globe, LineChart, Settings, Truck, Users, AlertTriangle, Activity, ShieldAlert } from "lucide-react";

export default function Vision() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-6">
              Strategic Roadmap
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Global Alignment & <br />
              <span className="text-muted-foreground">Operational Stability.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A dual-path strategy to stabilize Monterrey's critical operations while de-risking the global network through the unified Appleton Group Lean System (AGLS).
            </p>
          </div>
        </div>
      </section>

      {/* The Context & Imperative */}
      <section className="py-20 border-y border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="font-sans text-3xl font-bold text-primary">The Strategic Imperative</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Appleton’s manufacturing network lacks a unified operating backbone and is disproportionately reliant on Monterrey, which drives nearly 80% of global revenue. This concentration creates significant operational, financial, and reputational risk.
                </p>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-sm">
                  <h3 className="text-destructive font-bold mb-2 flex items-center gap-2">
                    <AlertTriangle size={20} /> Critical Business Exposure
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Produces 80% of revenue with no backup capacity</li>
                    <li>• Instability directly affects customer service & credibility</li>
                    <li>• High conversion costs driven by downtime & premium freight</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-sm border border-border/40">
              <h3 className="font-sans text-xl font-bold text-primary mb-6">Dual-Path Strategy</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Stabilize Monterrey</h4>
                    <p className="text-muted-foreground text-sm">Re-establish basic operating discipline (safety, standard work, PM), restore machining capability, and reset leadership routines.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">De-risk Global Network</h4>
                    <p className="text-muted-foreground text-sm">Stand up AGLS as the global operating system, build cross-plant comparability, and align planning with manufacturing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGLS System */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-3xl font-bold text-primary mb-4">AGLS Minimum Operating System</h2>
            <p className="text-muted-foreground">The 10 Non-Negotiables for restoring stability and predictability.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <ShieldAlert size={20} />
                </div>
                <CardTitle className="font-sans text-lg font-bold">Safety Discipline</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Daily safety inspections, standardized checks, and immediate escalation of red-tag abnormalities. Safety is a system, not just a priority.
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Settings size={20} />
                </div>
                <CardTitle className="font-sans text-lg font-bold">Standard Work</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Documented and followed every cycle. Leader Standard Work defines daily routines for all leaders, creating the foundation for stability.
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Users size={20} />
                </div>
                <CardTitle className="font-sans text-lg font-bold">Tiered Management</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Fixed times, non-negotiable attendance. Escalations solved within 24-72 hours. Connects operator issues to plant leadership.
              </CardContent>
            </Card>

            {/* Pillar 4 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Activity size={20} />
                </div>
                <CardTitle className="font-sans text-lg font-bold">Flow Control</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Machining as pacemaker. Single demand signal across planning & operations. JIT Window used to detect bottlenecks.
              </CardContent>
            </Card>

            {/* Pillar 5 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Box size={20} />
                </div>
                <CardTitle className="font-sans text-lg font-bold">Built-In Quality</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Defects stopped at origin. Layered Process Audits (LPAs), Poka-Yoke, and operator self-inspection standards.
              </CardContent>
            </Card>

            {/* Pillar 6 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <LineChart size={20} />
                </div>
                <CardTitle className="font-sans text-lg font-bold">KPI Tree (SQDCC)</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Safety, Quality, Delivery, Cost, Culture. The backbone for fact-based management and financial performance.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-sans text-3xl font-bold text-primary mb-12 text-center">Global De-risking Roadmap</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-4 border-primary pt-6">
              <h3 className="font-bold text-xl mb-4">Near-Term: Stabilize</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Restore machining stability (PM, capability)</li>
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Rebuild documentation & standards</li>
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Reset leadership routines (Tier 1-3)</li>
              </ul>
            </div>
            
            <div className="border-t-4 border-accent pt-6">
              <h3 className="font-bold text-xl mb-4">Mid-Term: Build Resilience</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Achieve alternate-site readiness</li>
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Establish dual-source capability</li>
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Structured emergency inventory strategy</li>
              </ul>
            </div>
            
            <div className="border-t-4 border-primary/50 pt-6">
              <h3 className="font-bold text-xl mb-4">Long-Term: Transform</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Deploy AGLS globally</li>
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Digitize planning & scheduling</li>
                <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Build resilient, scalable global network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
