import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Users, Clock, ShieldCheck, Zap, TrendingUp, ArrowRight, BarChart3, Layers, Calendar, Target, Flag } from "lucide-react";

export default function WhatGoodLooksLike() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-6">
              Operational Excellence
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              What Good <br />
              <span className="text-muted-foreground">Looks Like.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A structured handbook for achieving world-class manufacturing standards. 
              This framework defines the gold standard for People, Process, and Performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <Tabs defaultValue="people" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-12 h-auto p-1 bg-secondary/50">
              <TabsTrigger value="people" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">People & Stability</TabsTrigger>
              <TabsTrigger value="siop" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">SIOP</TabsTrigger>
              <TabsTrigger value="jit" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Just-In-Time</TabsTrigger>
              <TabsTrigger value="quality" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Built-In Quality</TabsTrigger>
              <TabsTrigger value="efficiency" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Efficiency</TabsTrigger>
              <TabsTrigger value="improvement" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Improvement</TabsTrigger>
            </TabsList>

            {/* 1. People Development & Stable Conditions */}
            <TabsContent value="people" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <Users size={32} />
                  </div>
                  <h2 className="font-sans text-3xl font-bold text-primary">People Development & Stable Conditions</h2>
                  <p className="text-muted-foreground">
                    The foundation of any production system is its people. We ensure stability through rigorous training, 
                    standardized workstations, and a clean, organized environment.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">Mastery of Workstations</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Ensuring every operator has the skills and knowledge to perform their tasks safely and correctly.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Polyvalence qualification for all workstations</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Check current process flow and list all operations</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> DOJO room adapted for HSE, Quality, and technical training</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">5S & Workplace Organization</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>A place for everything and everything in its place. 5S is not just cleaning; it's about discipline and efficiency.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Sort, Set in order, Shine, Standardize, Sustain</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Visual management standards applied</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Regular audits to maintain standards</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">Training Plan</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Structured development paths for all employees to ensure growth and capability.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Identification of training needs (Oct-Nov)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Gap analysis and definition of training plans</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> On-boarding process for new hires</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* New SIOP Section - Full Content */}
            <TabsContent value="siop" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <BarChart3 size={32} />
                  </div>
                  <h2 className="font-sans text-3xl font-bold text-primary">SIOP (Sales, Inventory & Operations Planning)</h2>
                  <p className="text-muted-foreground">
                    The heartbeat of the business. A monthly, cross-functional process that synchronizes sales, operations, inventory strategy, and finance.
                  </p>
                  <div className="p-4 bg-secondary/20 rounded-sm border border-border/50">
                    <p className="text-sm italic text-muted-foreground">
                      "SIOP sets the orchestra score; MPS and daily scheduling tell each musician what to play each day."
                    </p>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">1. What SIOP Actually Is</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p><strong>SIOP = Sales, Inventory & Operations Planning</strong></p>
                        <p>It’s a monthly, cross-functional business process that synchronizes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Sales & demand</li>
                          <li>Operations & capacity</li>
                          <li><strong>Inventory strategy</strong></li>
                          <li>Finance & P&L</li>
                        </ul>
                        <p>SIOP extends classic S&OP by making <strong>inventory a first-class citizen</strong> (explicit targets, policies, and trade-offs between service, cost, and cash).</p>
                        <p>Think of SIOP as the <strong>heartbeat of the business</strong>: every month it decides <em>what we will sell, what we will build, what inventory we will hold, and what that means for money and capacity.</em></p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">2. Planning Layers & Time Horizons</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>You’ll want to show how SIOP sits in the planning stack:</p>
                        
                        <div className="space-y-3 mt-4">
                          <div className="border-l-2 border-primary/30 pl-4">
                            <h4 className="font-medium text-primary">a) Strategic (12–36 months)</h4>
                            <ul className="list-disc pl-5 text-sm mt-1">
                              <li>Portfolio decisions, big capacity moves (buildings, major machines, automation)</li>
                              <li>Long-term volume scenarios, geography, channels</li>
                            </ul>
                          </div>
                          
                          <div className="border-l-2 border-primary/60 pl-4">
                            <h4 className="font-medium text-primary">b) Tactical SIOP (3–18 months, monthly buckets)</h4>
                            <ul className="list-disc pl-5 text-sm mt-1">
                              <li>Family-level demand and supply</li>
                              <li>Inventory policy & targets by family</li>
                              <li>Medium-term labor and capacity strategy (shifts, crews, overtime bands, outsourcing)</li>
                            </ul>
                          </div>
                          
                          <div className="border-l-2 border-primary pl-4">
                            <h4 className="font-medium text-primary">c) Operational (0–12 weeks)</h4>
                            <ul className="list-disc pl-5 text-sm mt-1">
                              <li><strong>MPS (Master Production Schedule)</strong> at SKU/option level</li>
                              <li>Detailed material planning (MRP), line schedules, work orders and staffing per cell</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">3. The Monthly SIOP Cycle – “Standard Work”</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-6">
                        <p>Classic S&OP has 5–6 steps; you’ll adapt it to SIOP by adding inventory explicitly.</p>
                        
                        <div className="space-y-4">
                          <div className="bg-secondary/10 p-3 rounded-sm">
                            <h4 className="font-medium text-primary">Step 0 – Data & Assumptions Load (week 1)</h4>
                            <p className="text-sm mt-1"><strong>Inputs:</strong> Booked orders, shipments, backlog, updated demand forecast, current inventory, capacity models, financials.</p>
                            <p className="text-sm mt-1"><strong>Outputs:</strong> Clean data set, exception list (data gaps, outliers).</p>
                          </div>

                          <div className="bg-secondary/10 p-3 rounded-sm">
                            <h4 className="font-medium text-primary">Step 1 – Product & Portfolio Review</h4>
                            <p className="text-sm mt-1"><strong>Purpose:</strong> Align on what you’re selling by family before you argue about volumes.</p>
                            <p className="text-sm mt-1"><strong>Questions:</strong> Which models/lines are growing, flat, declining? Any new products or discontinuations? Do we need to rationalize SKUs?</p>
                          </div>

                          <div className="bg-secondary/10 p-3 rounded-sm">
                            <h4 className="font-medium text-primary">Step 2 – Demand Review</h4>
                            <p className="text-sm mt-1"><strong>Purpose:</strong> Build a consensus demand plan by family, 3–18 months out.</p>
                            <p className="text-sm mt-1"><strong>Inputs:</strong> Statistical forecast, sales intelligence, e-commerce trends.</p>
                            <p className="text-sm mt-1"><strong>Questions:</strong> Where is demand outgrowing capacity? Which families carry the most risk?</p>
                          </div>

                          <div className="bg-secondary/10 p-3 rounded-sm">
                            <h4 className="font-medium text-primary">Step 3 – Supply & Capacity Review</h4>
                            <p className="text-sm mt-1"><strong>Purpose:</strong> Check can we physically make and ship what demand is asking for?</p>
                            <p className="text-sm mt-1"><strong>Activities:</strong> Rough-cut capacity planning, identify bottlenecks (shifts, line balancing, outsourcing).</p>
                            <p className="text-sm mt-1"><strong>Outputs:</strong> Feasible supply plan, list of constraints + mitigation options.</p>
                          </div>

                          <div className="bg-secondary/10 p-3 rounded-sm border-l-4 border-accent">
                            <h4 className="font-medium text-primary">Step 4 – Inventory Strategy & Target Setting (the “I” in SIOP)</h4>
                            <p className="text-sm mt-1"><strong>Key Concept:</strong> Inventory is a strategic buffer, not just “stuff on shelves”.</p>
                            <p className="text-sm mt-1"><strong>Activities:</strong> Set target days of supply by family, safety stock rules. Validate inventory health (turns, excess & obsolete).</p>
                            <p className="text-sm mt-1"><strong>Outputs:</strong> Inventory policy by family, explicit stock targets.</p>
                          </div>

                          <div className="bg-secondary/10 p-3 rounded-sm">
                            <h4 className="font-medium text-primary">Step 5 – Financial Review</h4>
                            <p className="text-sm mt-1"><strong>Purpose:</strong> Make sure the SIOP plan matches the P&L and cash expectations.</p>
                            <p className="text-sm mt-1"><strong>Activities:</strong> Translate plan into revenue, margin, capex/opex. Gap analysis vs budget.</p>
                          </div>

                          <div className="bg-secondary/10 p-3 rounded-sm">
                            <h4 className="font-medium text-primary">Step 6 – Executive SIOP Meeting</h4>
                            <p className="text-sm mt-1"><strong>Participants:</strong> CEO, COO, Sales, Supply Chain, Finance.</p>
                            <p className="text-sm mt-1"><strong>Purpose:</strong> Approve one integrated plan. Make decisions where demand, capacity, inventory, and profit conflict.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-medium">4. How SIOP Connects to Execution</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Vertical alignment is critical:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>SIOP (families, monthly):</strong> Sets volume and mix envelope by family. Sets inventory and service targets.</li>
                          <li><strong>MPS (key SKUs, weekly):</strong> Translates SIOP into SKU-level build plan. Drives capacity and material requirements in ERP.</li>
                          <li><strong>MRP & Detailed Scheduling (daily):</strong> Explodes MPS into purchase orders, work orders, line sequences. Feeds Kanban, dispatch lists.</li>
                        </ul>
                        <div className="p-3 bg-primary/5 border border-primary/10 rounded-sm mt-2">
                          <p className="font-medium text-primary">"SIOP is where we decide what we commit to. MPS is where we decide when we build it. The daily schedule is where we decide in what sequence and with which people and machines."</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-lg font-medium">5. Roles, Governance & Cadence</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <h4 className="font-medium text-primary">RACI-style summary:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li><strong>Process Owner:</strong> COO / VP Ops</li>
                          <li><strong>Executive Sponsor:</strong> CEO/President</li>
                          <li><strong>Demand Owner:</strong> Sales / Commercial leader</li>
                          <li><strong>Supply Owner:</strong> Operations leader</li>
                          <li><strong>Inventory Owner:</strong> Supply chain / planning</li>
                          <li><strong>Financial Owner:</strong> Finance</li>
                        </ul>
                        
                        <h4 className="font-medium text-primary mt-4">Cadence:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li><strong>Week 1:</strong> Data & product review</li>
                          <li><strong>Week 2:</strong> Demand review</li>
                          <li><strong>Week 3:</strong> Supply & inventory review</li>
                          <li><strong>Week 4:</strong> Financial review + Exec SIOP</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-lg font-medium">6. KPI Set for a “Mature” SIOP Solution</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-primary border-b border-border pb-1 mb-2">Demand</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Forecast accuracy (by family, horizon)</li>
                              <li>• Forecast bias (over/under)</li>
                              <li>• Hit rate on promotions / big deals</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary border-b border-border pb-1 mb-2">Supply & Capacity</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Capacity utilization by constrained resource</li>
                              <li>• Plan vs actual production by family</li>
                              <li>• Schedule adherence / plan attainment</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary border-b border-border pb-1 mb-2">Inventory</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Days of supply / turns by family</li>
                              <li>• % SKUs within min/max policy</li>
                              <li>• Excess & obsolete (absolute and %)</li>
                              <li>• Stock-out frequency / backorders</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary border-b border-border pb-1 mb-2">Financial</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Revenue vs plan</li>
                              <li>• Gross margin vs plan</li>
                              <li>• Working capital impact</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-lg font-medium">7. Implementation Roadmap</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-primary">Phase 1 – Foundation (0–3 months)</h4>
                            <p className="text-sm">Define scope and objectives. Pick 3–5 product families as pilot. Clean up master data. Stand up a lightweight monthly SIOP meeting.</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary">Phase 2 – Stabilize & Expand (3–9 months)</h4>
                            <p className="text-sm">Extend SIOP coverage. Tighten integration with MPS/MRP/Finance. Introduce inventory policies. Standardize the calendar and RACI.</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary">Phase 3 – Mature & Optimize (9–18+ months)</h4>
                            <p className="text-sm">Move to integrated planning layer. Add scenario planning and advanced inventory optimization. Link SIOP metrics to incentives.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 2. Just-In-Time */}
            <TabsContent value="jit" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <Clock size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Just-In-Time (JIT)</h2>
                  <p className="text-muted-foreground">
                    Producing only what is needed, when it is needed, and in the amount needed. 
                    We control production through Takt Time and Pull Systems.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">Pull Line at Takt Time</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Production pace is synchronized with customer demand (Takt Time).</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Takt time is the metronome of the production system</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Resources aligned with speed - not more, not less</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Avoid changing takt time to recover delays</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">Pull System / Kanban</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Downstream processes signal upstream processes what to produce.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Kanban loops give appropriate signals</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Shop stock associated with information flow</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Regular Kanban label audits</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">SIOP & JIT Window</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Sales, Inventory, and Operations Planning (SIOP) aligns demand with supply.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> JIT Window analysis for sequenced orders</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Comparison of customer flow vs. internal capability</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Detailed calculation of available JIT Window</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 3. Built-In Quality */}
            <TabsContent value="quality" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Built-In Quality</h2>
                  <p className="text-muted-foreground">
                    Quality is not inspected in; it is built in. We use Poka-Yoke and rigorous standards 
                    to prevent defects from ever passing to the next station.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">Poka-Yoke (Error Proofing)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Mechanisms that prevent mistakes from becoming defects.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Best Poka-Yoke is a design Poka-Yoke (full proof)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Simple, cheap, reliable, and no added work</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Systematically tested every shift</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">Quality Basics</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Fundamental practices that ensure consistent quality output.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> OK First Part validation</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Rework under control</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Management of Non-Conformance</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Final Inspection protocols</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 4. Efficiency */}
            <TabsContent value="efficiency" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <Zap size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Efficiency</h2>
                  <p className="text-muted-foreground">
                    Maximizing value by eliminating waste. We focus on OEE and quick changeovers (SMED) 
                    to ensure our assets are productive.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">SMED (Changeover Reduction)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Single Minute Exchange of Die - reducing setup times to enable smaller batches.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Convert internal setup to external setup</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Standardize functions, not just parts</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Enable "Every Part Every Interval" (EPEI)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">OEE Structure</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Overall Equipment Effectiveness - the gold standard for measuring manufacturing productivity.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Availability x Performance x Quality</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Clear identification of losses</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Data-driven improvement actions</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 5. Drive Improvement */}
            <TabsContent value="improvement" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Drive Improvement</h2>
                  <p className="text-muted-foreground">
                    Continuous improvement is not an event; it's a culture. We use structured plans 
                    and clear KPIs to drive performance forward every day.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">Plant Improvement Plan (PIP)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>A strategic roadmap for the plant's development over time.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Linked to business objectives</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Clear ownership and timelines</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Regular review and adjustment</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">KPI & Maturity Models</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Measuring what matters and understanding where we stand.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> SQCDP KPI Framework (Safety, Quality, Cost, Delivery, People)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> KPI Cascading from plant to shop floor</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Maturity levels: GOOD / BETTER / BEST</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-secondary/30">
        <div className="container max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-primary mb-6">Ready to Implement?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            This framework is not just theory—it's a proven operating system that I have deployed 
            across multiple global sites to drive double-digit improvements in efficiency and quality.
          </p>
          <a href="/production" className="inline-flex items-center justify-center h-12 px-8 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base font-medium">
            View Production Roadmap <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
