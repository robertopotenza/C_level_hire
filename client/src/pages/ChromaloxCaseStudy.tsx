import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Leaf, Zap, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function ChromaloxCaseStudy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 skew-x-12 translate-x-1/4 z-0" />
        <div className="container relative z-10">
          <div className="mb-8">
            <Link href="/experience">
              <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Experience
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm">
                Case Study
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                Scaling Sustainability: <br />
                <span className="text-muted-foreground">$58M Expansion & Transformation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we expanded capacity by 34% while reducing overhead and achieving LEED Gold certification—proving that operational excellence and sustainability go hand in hand.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/chromalox-aerial.jpg" 
                alt="Chromalox Expansion Aerial View" 
                className="w-full rounded-sm shadow-sm border border-border/40"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-6 border border-border/40 shadow-sm max-w-xs hidden md:block">
                <blockquote className="text-sm italic text-muted-foreground">
                  "We're not doing that for the title, we're doing that because that's the right thing to do."
                </blockquote>
                <div className="text-xs font-bold text-primary mt-2 uppercase tracking-wider">— Roberto Potenza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-serif font-light text-accent">$58M</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Capital Investment</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-light text-accent">+34%</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Output Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-light text-accent">-11%</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Overhead Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-light text-accent">LEED</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Gold Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Narrative: Problem - Solution - Result */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          
          {/* The Challenge */}
          <div className="mb-20 relative pl-8 border-l-2 border-border/40">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-primary" />
            <h2 className="font-serif text-3xl text-primary mb-6">The Challenge</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Chromalox, a leader in thermal electric heating technology, faced a critical juncture. Demand for sustainable heating solutions was surging, but our Ogden facility—the cornerstone of operations for 47 years—was reaching capacity limits.
              </p>
              <p>
                We needed to expand significantly (adding 100,000 sq ft) without disrupting ongoing operations, while simultaneously modernizing our processes to improve efficiency and aligning with our parent company's (Spirax-Sarco) ambitious sustainability goals.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-20 relative pl-8 border-l-2 border-border/40">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-accent" />
            <h2 className="font-serif text-3xl text-primary mb-6">The Strategic Solution</h2>
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                I led a comprehensive $58M expansion strategy that went beyond just adding square footage. We treated this as a complete operational transformation, integrating Lean Six Sigma principles with advanced sustainability technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-secondary/20 border-border/40">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary shadow-sm">
                    <Leaf size={20} />
                  </div>
                  <h3 className="font-serif text-lg text-primary">Sustainable Infrastructure</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2"><span className="text-accent">•</span> Ground source geothermal heat pump system</li>
                    <li className="flex items-start gap-2"><span className="text-accent">•</span> Advanced water conservation & filtration</li>
                    <li className="flex items-start gap-2"><span className="text-accent">•</span> Restoration of 5 acres in Ogden Nature Center</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-secondary/20 border-border/40">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary shadow-sm">
                    <TrendingUp size={20} />
                  </div>
                  <h3 className="font-serif text-lg text-primary">Process Modernization</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2"><span className="text-accent">•</span> State-of-the-art environmentally friendly paint booths</li>
                    <li className="flex items-start gap-2"><span className="text-accent">•</span> Implementation of Oracle ERP & Power BI</li>
                    <li className="flex items-start gap-2"><span className="text-accent">•</span> Lean flow redesign for new layout</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The Result */}
          <div className="relative pl-8 border-l-2 border-border/40">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-primary" />
            <h2 className="font-serif text-3xl text-primary mb-6">The Result</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                The project is on track for completion by end of 2024, delivering a <strong>34% increase in output capacity</strong> while reducing overhead by 11%.
              </p>
              <p>
                Beyond the metrics, we achieved <strong>LEED Gold certification</strong>, validating our commitment to environmental stewardship. The expansion will create 155 new jobs over the next decade, cementing our role as a community pillar in Weber County.
              </p>
              <p>
                Most importantly, we proved that industrial growth doesn't have to come at the expense of the planet—a philosophy that perfectly aligns with Balanced Body's values of craftsmanship and long-term stewardship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Insight */}
      <section className="py-20 bg-secondary/30 border-t border-border/40">
        <div className="container max-w-4xl text-center">
          <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
            <Target size={32} />
          </div>
          <h2 className="font-serif text-2xl text-primary mb-4">Why This Matters for Balanced Body</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "This project demonstrates my ability to manage complex, high-stakes capital projects that balance financial performance with core company values. I bring this same 'Builder Mindset' to Balanced Body—ready to scale your operations while protecting the legacy of quality and sustainability that Ken Endelman has built over 50 years."
          </p>
        </div>
      </section>
    </Layout>
  );
}
