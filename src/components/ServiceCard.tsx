import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, price, className }: ServiceCardProps) => {
  return (
    <Card className={cn("h-full transition-all hover:shadow-lg", className)}>
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        {price && (
          <div className="mt-2 inline-block px-3 py-1 bg-mystic-light-purple/20 text-mystic-purple rounded-full text-sm font-medium">
            {price}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
