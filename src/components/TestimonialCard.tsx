import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const TestimonialCard = ({ name, text, rating, date }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-white/80 dark:bg-mystic-dark-blue/80 backdrop-blur-sm gradient-border overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating ? "text-mystic-gold fill-mystic-gold" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="mb-4 italic text-gray-700 dark:text-gray-300">{text}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
