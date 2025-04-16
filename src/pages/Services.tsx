
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Sparkles, Scroll, Calendar, Heart, SparkleIcon } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="My Services"
        subtitle="Discover how tarot readings, remedies, and switch words can transform your life"
        backgroundImage="/services-background.jpg"
      />

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tarot Reading Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose from a variety of tarot reading options tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Clock}
              title="Quick Insight Reading"
              description="A focused reading addressing a specific question or area of concern. Perfect for when you need guidance on a particular issue."
              price="₹1,000"
              className="border-t-4 border-t-mystic-purple"
            />
            <ServiceCard
              icon={Sparkles}
              title="Deep Dive Reading"
              description="A comprehensive reading that explores multiple aspects of your life, including career, relationships, personal growth, and spiritual path."
              price="₹2,500"
              className="border-t-4 border-t-mystic-gold"
            />
            <ServiceCard
              icon={Heart}
              title="Relationship Reading"
              description="A specialized reading focused on your romantic relationships, helping you understand patterns, challenges, and opportunities for growth."
              price="₹1,800"
              className="border-t-4 border-t-mystic-light-purple"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Remedies & Switch Words</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Beyond readings, I offer powerful solutions to help you overcome challenges and manifest your desires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-mystic-purple">Customized Remedies</h3>
                <p className="mb-6">
                  Based on your tarot reading, I create personalized remedies that address the root causes of your challenges. These may include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-mystic-purple mt-1 flex-shrink-0" />
                    <span>Crystal prescriptions for energy balancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-mystic-purple mt-1 flex-shrink-0" />
                    <span>Meditation and visualization practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-mystic-purple mt-1 flex-shrink-0" />
                    <span>Rituals for releasing negative patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-mystic-purple mt-1 flex-shrink-0" />
                    <span>Energy clearing techniques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-mystic-gold">Switch Words</h3>
                <p className="mb-6">
                  Switch words are powerful words that can "switch" your consciousness to manifest desired outcomes. I provide:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <SparkleIcon size={20} className="text-mystic-gold mt-1 flex-shrink-0" />
                    <span>Personalized switch words for specific goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparkleIcon size={20} className="text-mystic-gold mt-1 flex-shrink-0" />
                    <span>Switch word combinations for enhanced effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparkleIcon size={20} className="text-mystic-gold mt-1 flex-shrink-0" />
                    <span>Guidance on how to use switch words daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparkleIcon size={20} className="text-mystic-gold mt-1 flex-shrink-0" />
                    <span>Switch word mantras for specific life areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The simple process to get your personalized tarot reading and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-mystic-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mystic-purple">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Session</h3>
              <p>
                Choose your preferred reading option and book a session that fits your schedule.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-mystic-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mystic-gold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Receive Your Reading</h3>
              <p>
                During our session, I'll perform your tarot reading and provide detailed insights.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-mystic-light-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mystic-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Solutions</h3>
              <p>
                Receive personalized remedies and switch words to help you navigate your path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-mystic-purple/10 to-mystic-gold/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 mt-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2">How accurate are tarot readings?</h3>
                <p>
                  Tarot readings reflect the energies and possibilities surrounding you at the time of the reading. Their accuracy depends on many factors, including how open you are to the process and how well the reader connects with your energy. I focus on providing insights that empower you to make informed choices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How do remedies and switch words work?</h3>
                <p>
                  Remedies work by shifting energies and creating positive changes in your environment and consciousness. Switch words operate on your subconscious mind, helping to reprogram limiting beliefs and attract desired outcomes. Both are tools that support your intentions and actions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How many sessions do I need?</h3>
                <p>
                  This varies based on your situation. Some clients find clarity in a single session, while others benefit from regular readings to navigate ongoing changes. I recommend starting with one session and then determining if follow-up sessions would be beneficial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Do you offer online readings?</h3>
                <p>
                  Yes, I provide online readings via video call for clients who cannot meet in person. The experience and accuracy are the same as in-person readings, as energy transcends physical distance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
