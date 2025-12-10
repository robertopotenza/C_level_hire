import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Johnny Sepulveda",
      role: "Director, Global Services and Project Management",
      company: "Chromalox",
      image: "/images/testimonials/johnny.png",
      text: "I worked together with Roberto at Chromalox for over 6 months, focusing on improvement priorities to increase throughput out of operations. Roberto has special skills that help him to capture the reality and develop action plans directed to achieve the business objective. He demonstrated High level of ethics, energy and organization implementing dashboard with key metrics to manage the business."
    },
    {
      name: "Stephanie Lara",
      role: "Environmental & Regulatory Compliance",
      company: "Chromalox",
      image: "/images/testimonials/stephanie.png",
      text: "I worked with Roberto on and off for a little under two years. Roberto challenged the way of seeing things and fostered a team environment where previously the culture was \"individual\" focused. During my time working with him, he was the only leader to make a meaningful impact at our Ogden site for the better. Roberto challenges the people around him to be better and although sometimes it was not pretty, the journey was definitely worth it. I would recommend Roberto as a leader to any business that is open to seeing results. I hope to see him around and work with him in the industry some time - he is definitely one of those leaders that leaves a lasting impression."
    },
    {
      name: "Jana Lenartova, CPSM",
      role: "Director of Supply Management and Integrated Business Planning",
      company: "Chromalox",
      image: "/images/testimonials/jana.png",
      text: "I had the pleasure of working with Roberto at Chromalox for 12 months, where we collaborated on a common goal: to improve manufacturing performance and double the output in our Ogden facility to accommodate fast-growing demand. His energy immediately challenged the team, disrupted established ways of working, and activated the change we needed. He delivered on a challenging task, navigating the team through complex improvements and culminating in a record-breaking quarter of sales. Roberto is a perfect fit for any result-driven organization that needs the job done."
    },
    {
      name: "Fernando Glz. Torres PMP®",
      role: "Chief Development Officer",
      company: "Catalyxx Inc",
      image: "/images/testimonials/fernando.png",
      text: "Roberto is a resourceful and versatile head of technical teams. In my years working with Roberto, I saw him solving complex situations, engaging large teams of hundreds of people reporting to him and developing business to a high level of excellence. I'm pleasured to endorse him for the challenges to come."
    },
    {
      name: "Fabio Hubacech",
      role: "Director of Customer Service",
      company: "Leading Customer-centric transformation",
      image: "/images/testimonials/fabio.png",
      text: "I had the chance to work with Roberto in several projects, we cooperate putting together our competencies and skills. Roberto is always focused on final target with high respect of people he manages. Is the first to put himself in front line, never sparing himself from hardest work. Roberto is also my friend and we spend nice extra-work time. Hope to have the possibility to work again with Roberto in future."
    },
    {
      name: "Caio Roque de Toledo",
      role: "Environmental Manager",
      company: "Ligga S.A.",
      image: "/images/testimonials/caio.png",
      text: "I learned a lot observing Roberto's attitudes. An objective, bold professional who makes difficult decisions with security and quick reasoning. Roberto values communication between different areas in an industrial plant, motivating constant information exchange. With this, pending issues became known more quickly and their solutions were always planned as a team. The organization and cleanliness of the 'factory floor', as well as the zeal for the maintenance of the facilities, are part of his conduct."
    },
    {
      name: "Fabiano Duarte",
      role: "Regional Sales Manager South America",
      company: "IPG Photonics",
      image: "/images/testimonials/fabiano.png",
      text: "A highly qualified professional, regardless of the training itself, I refer more to the experience and real knowledge of the industrial activity beyond character. Attentive to the market, its nuances and rapid modifications. I had the opportunity to learn a lot from him about dynamism in administration and the constant and healthy pursuit of achieving goals for operational growth."
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-4">
            Endorsements
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">
            Feedback from colleagues, partners, and team members across 20+ years of operations leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-background border-border/40 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-border/50 bg-secondary">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-xs font-medium text-muted-foreground">${item.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-serif text-primary font-medium text-sm">{item.name}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide leading-tight max-w-[180px]">{item.role}</div>
                    </div>
                  </div>
                  <Quote className="text-accent h-6 w-6 opacity-40 flex-shrink-0" />
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed text-sm flex-grow">
                  "{item.text}"
                </p>
                
                <div className="pt-4 border-t border-border/40 mt-auto">
                  <div className="text-xs text-accent font-medium">{item.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
