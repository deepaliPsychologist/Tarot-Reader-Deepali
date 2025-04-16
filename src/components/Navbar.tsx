import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    {
      path: "/",
      label: "Home"
    }, 
    {
      path: "/about",
      label: "About"
    }, 
    {
      path: "/services",
      label: "Services"
    }, 
    {
      path: "/testimonials",
      label: "Testimonials"
    }, 
    {
      path: "/contact",
      label: "Contact"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img 
              src="/TRD Logo.jpg" 
              alt="Tarot Reader Deepali Logo" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-serif font-bold text-mystic-purple">
              Tarot Reader <span className="text-mystic-gold">Deepali</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`font-medium transition-colors hover:text-mystic-purple ${
                  isActive(link.path) ? "text-mystic-purple" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="hidden md:flex">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[61px] bg-background z-40 p-4 space-y-4">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block py-2 text-lg font-medium transition-colors hover:text-mystic-purple ${
                  isActive(link.path) ? "text-mystic-purple" : "text-foreground"
                }`} 
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="ghost" className="flex items-center gap-2" onClick={toggleTheme}>
              {theme === "light" ? (
                <>
                  <Moon size={20} />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={20} />
                  <span>Light Mode</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
