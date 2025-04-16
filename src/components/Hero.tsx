import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink = "/contact", backgroundImage }: HeroProps) => {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden star-bg"
      style={
        backgroundImage
          ? {
              background: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-mystic-purple/20 animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-mystic-gold/10 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-mystic-light-purple/15 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {subtitle}
          </p>
          {ctaText && (
            <Link to={ctaLink}>
              <Button size="lg" className="bg-gradient-to-r from-mystic-purple to-mystic-dark-purple hover:from-mystic-dark-purple hover:to-mystic-purple gap-2">
                {ctaText}
                <ArrowRight size={16} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
