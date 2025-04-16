import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-mystic-dark-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/TRD Logo.jpg" 
                alt="Tarot Reader Deepali Logo" 
                className="h-12 w-12"
              />
              <h3 className="text-2xl font-serif">Tarot Reader Deepali</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Transforming lives through the ancient wisdom of tarot cards.
              Personalized readings, remedies, and switch words to overcome life's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mystic-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mystic-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mystic-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-mystic-gold transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mystic-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-mystic-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mystic-gold transition-colors">
                  Book a Reading
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16 border-2 border-mystic-gold">
                <AvatarImage src="/D2.jpg" alt="Ms. Deepali Agrawal" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-mystic-gold">Ms. Deepali Agrawal</p>
                <p className="text-sm text-gray-300">Tarot Card Reader</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <span>+91 74150 51747</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>tarotreader.0777@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Tarot Reader Deepali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
