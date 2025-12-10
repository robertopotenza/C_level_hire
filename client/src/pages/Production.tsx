import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Circle, Clock, TrendingUp, AlertCircle, Check, XCircle } from "lucide-react";
import { useState, useEffect } from "react";
import roadmapData from "@/data/roadmap.json";

interface RoadmapItem {
  expectation: string;
  evaluation: string;
  fully_applied: string;
  partially_applied: string;
  not_applied: string;
}

interface RoadmapElement {
  id: string;
  title: string;
  category: string;
  items: RoadmapItem[];
}

export default function Production() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(roadmapData.map((item: RoadmapElement) => item.category).filter(Boolean)));
    setCategories(uniqueCategories);
    if (uniqueCategories.length > 0) {
      setActiveCategory(uniqueCategories[0]);
    }
  }, []);

  const filteredElements = activeCategory 
    ? roadmapData.filter((item: RoadmapElement) => item.category === activeCategory)
    : [];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm">
              Methodology
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-primary leading-tight">
              Production <br />
              <span className="text-muted-foreground">Excellence.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A structured roadmap to transform manufacturing from reactive to predictive. This is "What Good Looks Like."
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/emerson-production-excellence.jpg" 
              alt="Smart Factory and Industry 4.0 Connectivity" 
              className="w-full rounded-sm shadow-sm"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-6 border border-border/40 shadow-sm max-w-xs hidden md:block">
              <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Key Outcome</div>
              <p className="text-muted-foreground">"A scalable factory that honors Ken's craftsmanship philosophy."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Roadmap */}
      <section className="py-20 bg-secondary/30 border-y border-border/40" id="roadmap">
        <div className="container">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="font-sans text-3xl font-bold text-primary mb-4">Interactive Assessment Framework</h2>
            <p className="text-muted-foreground">
              Explore the detailed criteria for operational excellence. Select a category below to view specific requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-3 space-y-2">
              <h3 className="font-sans text-lg font-bold text-primary mb-4 px-2">Categories</h3>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-sm transition-all duration-200 border ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-background text-muted-foreground border-border/40 hover:bg-secondary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9">
              <Card className="border-border/40 bg-background min-h-[600px]">
                <CardHeader className="border-b border-border/40 bg-secondary/10">
                  <CardTitle className="font-sans text-xl font-bold text-primary">
                    {activeCategory || "Select a Category"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[600px] p-6">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {filteredElements.map((element: RoadmapElement) => (
                        <AccordionItem key={element.id} value={element.id} className="border border-border/40 rounded-sm px-4 bg-card">
                          <AccordionTrigger className="hover:no-underline py-4">
                            <div className="flex items-center gap-4 text-left">
                              <Badge variant="outline" className="bg-secondary/50 text-primary border-primary/20 shrink-0">
                                {element.id}
                              </Badge>
                              <span className="font-medium text-primary text-lg">{element.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4 pb-6 space-y-6">
                            {element.items.map((item, index) => (
                              <div key={index} className="grid gap-6 border-t border-border/20 pt-6 first:border-0 first:pt-0">
                                
                                {/* Expectation & Evaluation */}
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <div className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                      <TrendingUp size={14} /> Expectation
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/20 p-3 rounded-sm border border-border/20">
                                      {item.expectation || "No specific expectation defined."}
                                    </p>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                      <Clock size={14} /> How to Evaluate
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/20 p-3 rounded-sm border border-border/20">
                                      {item.evaluation}
                                    </p>
                                  </div>
                                </div>

                                {/* Scoring Criteria */}
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="space-y-2">
                                    <div className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-2">
                                      <Check size={14} /> Fully Applied
                                    </div>
                                    <div className="text-xs text-muted-foreground bg-green-50/50 p-3 rounded-sm border border-green-100 h-full">
                                      {item.fully_applied}
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-2">
                                      <AlertCircle size={14} /> Partially Applied
                                    </div>
                                    <div className="text-xs text-muted-foreground bg-amber-50/50 p-3 rounded-sm border border-amber-100 h-full">
                                      {item.partially_applied || "N/A"}
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
                                      <XCircle size={14} /> Not Applied
                                    </div>
                                    <div className="text-xs text-muted-foreground bg-red-50/50 p-3 rounded-sm border border-red-100 h-full">
                                      {item.not_applied || "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lean Principles */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-sans text-3xl font-bold text-primary mb-12 text-center">Lean Principles in Action</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">Value Stream Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Visualizing the end-to-end flow to identify and eliminate non-value-added steps.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">Standardized Work</h3>
              <p className="text-sm text-muted-foreground">
                Creating the baseline for improvement and ensuring consistency across shifts.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">Visual Management</h3>
              <p className="text-sm text-muted-foreground">
                Making the status of the system understood at a glance by everyone.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <Circle size={20} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">Gemba Walks</h3>
              <p className="text-sm text-muted-foreground">
                Go see, ask why, show respect. Leadership happens where the value is created.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
