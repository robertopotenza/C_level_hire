import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="font-sans text-4xl font-bold text-primary mb-4">Let's Connect</h1>
                <p className="text-lg text-muted-foreground">
                  I welcome the opportunity to discuss how my operational experience aligns with Emerson's strategic goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Email</div>
                    <a href="mailto:eng.potenza@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">eng.potenza@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Phone</div>
                    <a href="tel:8125653811" className="text-muted-foreground hover:text-accent transition-colors">(812) 565-3811</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-primary shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-primary">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/roberto-potenza/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">linkedin.com/in/roberto-potenza</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Location</div>
                    <div className="text-muted-foreground">Salt Lake City, UT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image / Context */}
            <div className="relative h-full min-h-[400px] bg-secondary/30 rounded-sm overflow-hidden border border-border/40">
              <img 
                src="/images/emerson-contact-bg.png" 
                alt="Smart Energy and Connectivity" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                <blockquote className="font-sans text-xl font-bold text-primary italic">
                  "Quality is not an act, it is a habit."
                </blockquote>
                <div className="text-sm text-muted-foreground mt-2">— Aristotle</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
