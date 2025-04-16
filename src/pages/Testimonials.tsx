
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Ms. Deepali's reading was incredibly accurate. The remedies she suggested helped me overcome a major obstacle in my career. I was skeptical at first, but the results spoke for themselves.",
      rating: 5,
      date: "March 2025"
    },
    {
      name: "Rahul Mehta",
      text: "I was going through a challenging time in my relationship when I consulted Ms. Deepali. Her insights were eye-opening, and the switch words she provided really helped shift my perspective. Highly recommended!",
      rating: 5,
      date: "February 2025"
    },
    {
      name: "Ananya Patel",
      text: "The tarot reading with Ms. Deepali was a transformative experience. She has a gift for connecting with the cards and delivering messages with empathy and clarity. The remedies were simple yet effective.",
      rating: 5,
      date: "January 2025"
    },
    {
      name: "Vikram Singh",
      text: "I've had several readings with Ms. Deepali over the past year, and each one has provided valuable guidance. Her switch words have become part of my daily practice, and I've seen positive changes in my life.",
      rating: 5,
      date: "December 2024"
    },
    {
      name: "Meera Kapoor",
      text: "Ms. Deepali has a remarkable ability to get to the heart of an issue. Her reading helped me understand patterns in my life that were holding me back. The remedies she suggested were practical and easy to implement.",
      rating: 4,
      date: "November 2024"
    },
    {
      name: "Arjun Reddy",
      text: "I was facing a difficult decision regarding my career when I decided to get a reading. Ms. Deepali's insights helped me gain clarity and confidence in my choice. Three months later, I can say it was the right decision.",
      rating: 5,
      date: "October 2024"
    },
    {
      name: "Neha Sharma",
      text: "What I appreciate most about Ms. Deepali's readings is that she doesn't just tell you what the cards say—she provides practical solutions. The combination of tarot insights and switch words has been powerful for me.",
      rating: 5,
      date: "September 2024"
    },
    {
      name: "Karan Gupta",
      text: "I was dealing with some health issues when I had my reading. The energetic remedies Ms. Deepali suggested complemented my medical treatment well. I felt more balanced and positive during my recovery.",
      rating: 5,
      date: "August 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Client Testimonials"
        subtitle="Read what others have experienced with Tarot Wisdom readings"
        backgroundImage="/testimonials-background.jpg"
      />

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stories of Transformation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              These testimonials reflect the experiences of clients who have benefited from tarot readings, remedies, and switch words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
                date={testimonial.date}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
            <p className="mb-8">
              If you've had a reading with me and would like to share your experience, I'd be honored to hear your feedback.
            </p>
            <div className="p-6 bg-white dark:bg-mystic-dark-blue/80 rounded-lg mystic-shadow">
              <blockquote className="italic text-lg mb-4">
                "Every testimonial is a story of transformation and growth. I'm grateful for the opportunity to be part of your journey."
              </blockquote>
              <p className="font-serif text-right">— Ms. Deepali Agrawal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
