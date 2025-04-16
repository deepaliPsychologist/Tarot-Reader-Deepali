
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 star-bg">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-serif font-bold mb-4 text-mystic-purple">404</h1>
        <div className="h-1 w-20 bg-mystic-gold mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          The cosmic energies have led you to an unknown path. This page doesn't exist in our realm.
        </p>
        <Link to="/">
          <Button variant="default" size="lg" className="bg-mystic-purple hover:bg-mystic-dark-purple">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
