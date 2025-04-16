
import Hero from "@/components/Hero";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Ms. Deepali Agrawal"
        subtitle="Get to know the tarot reader behind Tarot Reader Deepali"
        backgroundImage="/about-background.jpg"
      />

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">My Journey with Tarot</h2>
              <p className="mb-4">
                Hello, I'm Deepali Agrawal, a passionate tarot reader with 2 years of experience in this mystical art. My journey with tarot began when I was seeking answers during a challenging phase of my life. The profound insights I received from my first reading sparked a lifelong fascination with the cards.
              </p>
              <p className="mb-4">
                Over the past two years, I have dedicated myself to mastering the intricate symbolism and meanings behind each tarot card. I've studied various decks and techniques, combining traditional wisdom with my intuitive abilities to provide accurate and meaningful readings.
              </p>
              <p className="mb-4">
                What sets me apart is my holistic approach to tarot reading. I don't just interpret the cards; I provide practical remedies and powerful switch words that help you take actionable steps toward your goals. My readings are designed to empower you with knowledge and tools for positive transformation.
              </p>
              <p>
                I believe that tarot is not about predicting a fixed future, but about understanding the energies around you and making informed choices. My mission is to guide you toward clarity, healing, and personal growth through the ancient wisdom of tarot cards.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-mystic-purple/20 to-mystic-gold/20 rounded-lg overflow-hidden mystic-shadow">
                  <img
                    src="/D3.jpg"
                    alt="Ms. Deepali Agrawal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-mystic-light-purple/10 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-mystic-gold/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-mystic-dark-blue/80 p-6 rounded-lg mystic-shadow">
                <h3 className="text-xl font-bold mb-4 text-mystic-purple">Personalized Readings</h3>
                <p>
                  Each reading is tailored to your unique situation. I take the time to understand your concerns and questions deeply before interpreting the cards. This personal connection allows me to provide more accurate and relevant insights.
                </p>
              </div>
              <div className="bg-white dark:bg-mystic-dark-blue/80 p-6 rounded-lg mystic-shadow">
                <h3 className="text-xl font-bold mb-4 text-mystic-purple">Practical Remedies</h3>
                <p>
                  Going beyond the reading, I offer practical remedies that address the root causes of your challenges. These remedies are simple yet effective, drawing from ancient wisdom and energy work to create positive changes.
                </p>
              </div>
              <div className="bg-white dark:bg-mystic-dark-blue/80 p-6 rounded-lg mystic-shadow">
                <h3 className="text-xl font-bold mb-4 text-mystic-purple">Switch Words</h3>
                <p>
                  I provide powerful switch words – specific words or phrases that can "switch" your energy and consciousness to manifest desired outcomes. These words work on your subconscious mind to transform limiting beliefs and attract positive experiences.
                </p>
              </div>
              <div className="bg-white dark:bg-mystic-dark-blue/80 p-6 rounded-lg mystic-shadow">
                <h3 className="text-xl font-bold mb-4 text-mystic-purple">Compassionate Guidance</h3>
                <p>
                  I approach each reading with empathy and compassion, creating a safe space for you to explore your questions. My goal is to empower you with insights and tools that support your highest good and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-mystic-gold/20 to-mystic-purple/20 rounded-lg overflow-hidden mystic-shadow">
                <img
                  src="/D1.jpg"
                  alt="Ms. Deepali Agrawal in traditional attire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-mystic-gold/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-mystic-purple/10 rounded-full -z-10"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">My Commitment to You</h2>
              <p className="mb-8">
                I am committed to providing ethical, accurate, and empowering readings that honor your free will and support your personal journey. I maintain strict confidentiality and approach each session with respect, integrity, and a genuine desire to help.
              </p>
              <p className="italic text-lg text-mystic-purple">
                "The cards reveal possibilities, but you have the power to shape your destiny."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
