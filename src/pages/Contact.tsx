import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Hero from "@/components/Hero";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I will get back to you soon."
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };
  return <div className="min-h-screen">
      <Hero title="Book Your Reading" subtitle="Connect with me to schedule your personalized tarot reading session" backgroundImage="/contact-background.jpg" />

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">
                  Fill out the form below to book a reading or inquire about my services. I'll get back to you within 24 hours to confirm your appointment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <Select value={formData.service} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quick-insight">Quick Insight Reading (₹1,000)</SelectItem>
                        <SelectItem value="deep-dive">Deep Dive Reading (₹2,500)</SelectItem>
                        <SelectItem value="relationship">Relationship Reading (₹1,800)</SelectItem>
                        <SelectItem value="remedies">Customized Remedies</SelectItem>
                        <SelectItem value="switch-words">Switch Words</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Share what you'd like to focus on in your reading" rows={4} value={formData.message} onChange={handleChange} />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="lg:pl-8">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mystic-purple/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-mystic-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+91 7415051747</p>
                      <p className="text-sm text-gray-500">Available Mon-Sat, 10 AM - 10 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mystic-purple/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-mystic-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">tarotreader.0777@gmail.com</p>
                      <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mystic-purple/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-mystic-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">Indore, Madhya Pradesh, India</p>
                      <p className="text-sm text-gray-500">Available for online readings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mystic-purple/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-mystic-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Availability</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-mystic-purple" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri: 10 AM -10 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-mystic-purple" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Sat: 10 AM-11 PM
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-secondary rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Preparing for Your Reading</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-mystic-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <p className="text-sm">Find a quiet, comfortable space for your reading session.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-mystic-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <p className="text-sm">Write down specific questions you'd like addressed.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-mystic-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <p className="text-sm">Approach the reading with an open mind and heart.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-mystic-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <p className="text-sm">Have a notebook ready to take notes during the session.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;