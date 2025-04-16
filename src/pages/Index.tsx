
import { Sparkles, Scroll, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Unlock Your Destiny with Tarot Reader Deepali"
        subtitle="Experience personalized tarot readings with Ms. Deepali Agrawal. Discover insights, remedies, and switch words to transform your life."
        ctaText="Book a Reading"
        backgroundImage="/tarot-background.jpg"
      />

      {/* Intro Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <Avatar className="h-32 w-32 border-4 border-mystic-gold/50 shadow-lg">
              <AvatarImage src="/D2.jpg" alt="Ms. Deepali Agrawal" />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Welcome to Tarot Reader Deepali</h2>
              <p className="text-lg mb-6">
                With 2 years of experience in reading tarot cards, I provide accurate and insightful guidance to help you navigate life's challenges and discover your true potential.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link to="/about">
                  <Button variant="outline" className="border-mystic-purple text-mystic-purple hover:bg-mystic-purple hover:text-white">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Personalized tarot readings, powerful remedies, and effective switch words to help you overcome obstacles and find clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Sparkles}
              title="Tarot Readings"
              description="Gain insights into your past, present, and future with a personalized tarot reading."
              className="border-t-4 border-t-mystic-purple"
            />
            <ServiceCard
              icon={Scroll}
              title="Remedies"
              description="Receive custom remedies tailored to address specific challenges in your life."
              className="border-t-4 border-t-mystic-gold"
            />
            <ServiceCard
              icon={Calendar}
              title="Switch Words"
              description="Harness the power of switch words to transform your mindset and manifest your desires."
              className="border-t-4 border-t-mystic-light-purple"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What My Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Don't just take my word for it. Here's what others have experienced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              text="Ms. Deepali's reading was incredibly accurate. The remedies she suggested helped me overcome a major obstacle in my career."
              rating={5}
              date="March 2025"
            />
            <TestimonialCard
              name="Rahul Mehta"
              text="I was skeptical at first, but the insights from my reading were spot on. The switch words have really helped change my perspective."
              rating={5}
              date="February 2025"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/testimonials">
              <Button variant="outline">Read More Testimonials</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-mystic-dark-purple text-white">
        <div className="container px-4 mx-auto">
          <Card className="border-0 bg-transparent">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Path?</h2>
                  <p className="mb-6 text-gray-300">
                    Book a personalized tarot reading session with Ms. Deepali Agrawal and receive guidance tailored to your unique situation.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-mystic-gold text-mystic-dark-purple hover:bg-white">
                      Book Your Reading Now
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="relative mx-auto max-w-xs">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden mystic-shadow border-4 border-mystic-gold/30">
                      <img
                        src="/D1.jpg"
                        alt="Ms. Deepali Agrawal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mystic-gold/10 rounded-full -z-10"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
