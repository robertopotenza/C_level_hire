import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Link } from "wouter";

export default function Experience() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border/40">
        <div className="container">
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-primary mb-6">Professional Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A 20-year track record of transforming manufacturing operations, optimizing supply chains, and leading high-performance teams across global industries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-12 gap-12">
          {/* Sidebar / Navigation */}
          <div className="md:col-span-4 space-y-8">
            <div className="sticky top-24">
              <div className="bg-background border border-border/40 p-6 space-y-6">
                <h3 className="font-sans text-xl font-bold text-primary">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Lean Six Sigma", "Global Supply Chain", "P&L Management", "Multi-Site Operations", "Operational Excellence", "Logistics Optimization", "Strategic Planning", "Change Management"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary text-primary hover:bg-accent hover:text-accent-foreground font-normal rounded-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-sans text-xl font-bold text-primary">Education</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-primary">MBA, Finance</div>
                        <div className="text-sm text-muted-foreground">Fundação Getúlio Vargas (FGV)</div>
                        <div className="text-xs text-muted-foreground">2005 - 2008</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-primary">B.S., Electrical Engineering</div>
                        <div className="text-sm text-muted-foreground">University of Campinas (UNICAMP)</div>
                        <div className="text-xs text-muted-foreground">1999 - 2003</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-sans text-xl font-bold text-primary">Certifications</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Award size={14} className="text-accent" /> Lean Six Sigma Green Belt</li>
                    <li className="flex items-center gap-2"><Award size={14} className="text-accent" /> ISO 14000 / 22000</li>
                    <li className="flex items-center gap-2"><Award size={14} className="text-accent" /> Strategic Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 space-y-12">
            
            {/* Role 1 */}
            <div className="relative pl-8 border-l border-border/40 space-y-6">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent" />
              <div>
                <h2 className="text-2xl font-sans font-bold text-primary">Vice President & General Manager</h2>
                <div className="text-lg text-muted-foreground mb-1">Opal Fuels Inc. / Chromalox | Salt Lake City, UT</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Feb 2023 – Present</div>
              </div>
              
              <div className="prose prose-gray max-w-none text-muted-foreground">
                <p>
                  Selected by a private equity-backed group to lead high-impact manufacturing mandates, driving 25% growth and portfolio diversification under tight performance cycles.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li><strong className="text-primary">Strategic Expansion:</strong> Directed a $58M CapEx expansion, achieving a 34% output increase and 11% overhead reduction via Lean Six Sigma and process modernization.</li>
                  <li><strong className="text-primary">Digital Transformation:</strong> Implemented Oracle ERP and Power BI dashboards, enhancing data analytics and KPI visibility.</li>
                  <li><strong className="text-primary">Financial Impact:</strong> Achieved a +6-point EBITDA improvement in the first year through operational excellence and disciplined cost control.</li>
                  <li><strong className="text-primary">Leadership:</strong> Reduced turnover to below 9% through targeted leadership development and culture building.</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <img 
                  src="/images/team-celebration.png" 
                  alt="Team Leadership" 
                  className="w-full h-64 object-cover rounded-sm border border-border/40 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="flex justify-between items-center mt-3">
                  <p className="text-xs text-muted-foreground italic">Building a culture of unity and performance ("We Are All One")</p>
                  <Link href="/case-study/chromalox">
                    <Button variant="link" className="text-primary p-0 h-auto font-medium text-xs hover:text-accent">
                      View Expansion Case Study &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative pl-8 border-l border-border/40 space-y-6">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-border" />
              <div>
                <h2 className="text-2xl font-sans font-bold text-primary">General Plant Manager</h2>
                <div className="text-lg text-muted-foreground mb-1">Tier 1 Automotive Supplier | Columbus, IN</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Dec 2017 – Feb 2023</div>
              </div>
              
              <div className="prose prose-gray max-w-none text-muted-foreground">
                <p>
                  Directed a $380M P&L and 600+ employees in high-volume automotive manufacturing, achieving recognized excellence in a demanding Tier 1 environment.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li><strong className="text-primary">Operational Excellence:</strong> Delivered 74% OEE and zero-defect performance across multi-site operations.</li>
                  <li><strong className="text-primary">Customer Success:</strong> Achieved 99% on-time delivery and recognized as a Best Supplier by Stellantis.</li>
                  <li><strong className="text-primary">Growth Management:</strong> Consolidated two U.S. production sites and launched major OEM programs like Dodge Truck, increasing customer satisfaction by 30%.</li>
                </ul>
              </div>

              <div className="mt-6">
                <img 
                  src="/images/kpi-dashboard.png" 
                  alt="KPI Management" 
                  className="w-full h-64 object-cover rounded-sm border border-border/40 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="text-xs text-muted-foreground mt-2 italic">Data-driven management with clear visual KPIs</p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative pl-8 border-l border-border/40 space-y-6">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-border" />
              <div>
                <h2 className="text-2xl font-sans font-bold text-primary">Vice President of Operations</h2>
                <div className="text-lg text-muted-foreground mb-1">Abengoa Bioenergy | Brazil & USA</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Jun 2008 – Oct 2017</div>
              </div>
              
              <div className="prose prose-gray max-w-none text-muted-foreground">
                <p>
                  Led operations for four manufacturing facilities with 950 employees and $1B revenue responsibility.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li><strong className="text-primary">Automation:</strong> Spearheaded a $150M automation initiative, boosting reliability by 39%.</li>
                  <li><strong className="text-primary">Cost Optimization:</strong> Achieved 17% reduction in COGS and 19% savings in personnel costs through Lean Six Sigma.</li>
                  <li><strong className="text-primary">Strategic Growth:</strong> Grew commercial footprint by acquiring two national and four international clients.</li>
                </ul>
              </div>
            </div>

            {/* Earlier Roles */}
            <div className="relative pl-8 border-l border-border/40 space-y-6">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-border" />
              <div>
                <h2 className="text-xl font-sans font-bold text-primary">Early Career</h2>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">2000 – 2008</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-primary">Engineering Manager | Ahlstrom Paper</div>
                  <p className="text-sm text-muted-foreground">Spearheaded $37M greenfield plant project; decreased downtime from 11% to 1%.</p>
                </div>
                <div>
                  <div className="font-medium text-primary">Lean Manufacturing Engineer | Eaton Corporation</div>
                  <p className="text-sm text-muted-foreground">Implemented Lean methodologies boosting profitability by 25%.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
