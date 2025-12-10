import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Building2, Factory, Leaf, Zap, Settings, Droplets } from "lucide-react";
import { Link } from "wouter";

export default function Projects() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-background border-b border-border/40">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-6">
              Project Portfolio
            </div>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Building the Infrastructure <br />
              <span className="text-muted-foreground">of Growth.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From greenfield plants to $300M+ energy facilities, I have managed the full lifecycle of complex industrial projects across three continents.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <Tabs defaultValue="energy" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="bg-background border border-border/40 p-1 h-auto">
                <TabsTrigger value="energy" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Energy & Sustainability</TabsTrigger>
                <TabsTrigger value="manufacturing" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Manufacturing Expansion</TabsTrigger>
                <TabsTrigger value="infrastructure" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Infrastructure & Utilities</TabsTrigger>
              </TabsList>
            </div>

            {/* Energy Projects */}
            <TabsContent value="energy" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Abengoa Project 1 */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Renewable Energy</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Abengoa Bioenergy</span>
                    </div>
                    <CardTitle className="font-sans text-2xl font-bold text-primary">São João Cogeneration Plant</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Leaf size={14} /> Biomass Cogeneration | $312M CapEx
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Managed end-to-end lifecycle of a 70 MW biomass plant (expandable to 140 MW) fueled by sugarcane bagasse.
                    </p>
                    <div className="bg-secondary/50 p-4 rounded-sm space-y-2 text-sm">
                      <div className="flex justify-between border-b border-border/40 pb-2">
                        <span className="font-medium">Capacity</span>
                        <span className="text-muted-foreground">70 MW</span>
                      </div>
                      <div className="flex justify-between border-b border-border/40 pb-2">
                        <span className="font-medium">Ethanol Output</span>
                        <span className="text-muted-foreground">12.5M gal/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sugar Output</span>
                        <span className="text-muted-foreground">245k tons/year</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Abengoa Project 2 */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Renewable Energy</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Abengoa Bioenergy</span>
                    </div>
                    <CardTitle className="font-sans text-2xl font-bold text-primary">Pirassununga Cogeneration Plant</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Leaf size={14} /> Biomass Cogeneration | 70 MW
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Commissioned a massive integrated biomass facility processing 3M tons of sugarcane annually.
                    </p>
                    <div className="bg-secondary/50 p-4 rounded-sm space-y-2 text-sm">
                      <div className="flex justify-between border-b border-border/40 pb-2">
                        <span className="font-medium">Ethanol Output</span>
                        <span className="text-muted-foreground">18M gal/year</span>
                      </div>
                      <div className="flex justify-between border-b border-border/40 pb-2">
                        <span className="font-medium">Sugar Output</span>
                        <span className="text-muted-foreground">285k tons/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Status</span>
                        <span className="text-muted-foreground">Commissioned 2010</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Opal Fuels */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Waste-to-Energy</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Opal Fuels</span>
                    </div>
                    <CardTitle className="font-sans text-2xl font-bold text-primary">Anaerobic Digester & Gas Upgrader</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Zap size={14} /> EPC Scope | Acquisition Leadership
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Led the acquisition of the largest food waste-to-energy facility in the U.S. and oversaw full EPC scope for new construction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Manufacturing Projects */}
            <TabsContent value="manufacturing" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Chromalox */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 md:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 space-y-6">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Plant Expansion</Badge>
                        <span className="text-sm text-muted-foreground font-mono">Chromalox / Spirax Sarco</span>
                      </div>
                      <div>
                        <CardTitle className="font-sans text-3xl font-bold text-primary mb-2">$58M Facility Expansion</CardTitle>
                        <p className="text-muted-foreground">
                          Added 100,000 sq. ft. to existing facility with advanced manufacturing tech and geothermal systems.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary/50 p-3 rounded-sm">
                          <div className="text-2xl font-sans font-bold text-primary">34%</div>
                          <div className="text-xs text-muted-foreground uppercase">Output Increase</div>
                        </div>
                        <div className="bg-secondary/50 p-3 rounded-sm">
                          <div className="text-2xl font-sans font-bold text-primary">150+</div>
                          <div className="text-xs text-muted-foreground uppercase">Jobs Created</div>
                        </div>
                      </div>
                      <Link href="/case-study/chromalox">
                        <Button className="w-full">View Full Case Study <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                    </div>
                    <div className="bg-secondary/30 h-full min-h-[300px] relative">
                      <img src="/images/chromalox-speech.jpg" alt="Roberto Potenza speaking at Chromalox Expansion" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                    </div>
                  </div>
                </Card>

                {/* Ahlstrom */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Greenfield</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Ahlstrom Paper</span>
                    </div>
                    <CardTitle className="font-sans text-2xl font-bold text-primary">$37M Specialty Paper Plant</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Factory size={14} /> Full Factory Build
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Led launch of nonwoven specialty paper plant including utilities, electrical substation, HVAC, water treatment, and process automation.
                    </p>
                  </CardContent>
                </Card>

                {/* Tier 1 Automotive Supplier */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Consolidation</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Tier 1 Automotive Supplier</span>
                    </div>
                    <CardTitle className="font-sans text-2xl font-bold text-primary">Plant Consolidation & Launch</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Settings size={14} /> Operational Excellence
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Consolidated two plants into one award-winning site and launched welding line for Stellantis Dodge Truck program.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Infrastructure Projects */}
            <TabsContent value="infrastructure" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Coca-Cola */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Automation</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Coca-Cola</span>
                    </div>
                    <CardTitle className="font-serif text-2xl text-primary">Bottling Line Automation</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Droplets size={14} /> Process Engineering
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Refurbished and automated bottling lines. Installed two generators redirecting exhaust to produce CO2 for beverage carbonation.
                    </p>
                  </CardContent>
                </Card>

                {/* Eaton */}
                <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Infrastructure</Badge>
                      <span className="text-sm text-muted-foreground font-mono">Eaton Truck Components</span>
                    </div>
                    <CardTitle className="font-serif text-2xl text-primary">Utility & Line Installation</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                      <Settings size={14} /> Infrastructure Setup
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Led installation of utilities (water, electricity, compressed air) for machining, pressing, and assembly lines.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
