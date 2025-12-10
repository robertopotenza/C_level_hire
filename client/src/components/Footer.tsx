import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/40 py-12 mt-auto">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-semibold text-primary">Roberto Potenza</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Operations Executive specializing in Lean Manufacturing, Supply Chain Optimization, and Strategic Growth.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-medium text-primary uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/experience" className="hover:text-primary transition-colors">Experience</a></li>
            <li><a href="/vision" className="hover:text-primary transition-colors">Strategic Vision</a></li>
            <li><a href="/production" className="hover:text-primary transition-colors">Production Excellence</a></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-medium text-primary uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:eng.potenza@gmail.com" className="hover:text-primary transition-colors">eng.potenza@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:8125653811" className="hover:text-primary transition-colors">(812) 565-3811</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="https://www.linkedin.com/in/roberto-potenza/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn Profile</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Roberto Potenza. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
