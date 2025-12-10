import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Strategic Vision", path: "/vision" },
    { name: "Production Excellence", path: "/production" },
    { name: "What Good Looks Like", path: "/what-good-looks-like" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="font-sans text-2xl font-bold tracking-tight text-primary">
              Roberto Potenza
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border/40 bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary py-2",
                    location === item.path
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
