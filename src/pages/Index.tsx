
import { useState } from "react";
import { HeartPendant } from "@/components/HeartPendant";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleChoice = (type: "taken" | "single") => {
    setMessage(
      type === "taken" ? "Maghihiwalay din kayo XD" : "HAHAHAHA walang jowa"
    );
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="mb-12">
          <HeartPendant message={message} isOpen={isOpen} />
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => handleChoice("taken")}
            className="px-8 py-3 rounded-full text-white font-medium 
              bg-white/10 backdrop-blur-sm border border-white/20
              hover:bg-white/20 transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isOpen}
          >
            May Jowa
          </button>
          
          <button
            onClick={() => handleChoice("single")}
            className="px-8 py-3 rounded-full text-white font-medium 
              bg-white/10 backdrop-blur-sm border border-white/20
              hover:bg-white/20 transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isOpen}
          >
            Single
          </button>
        </div>

        {/* Reset button */}
        {isOpen && (
          <button
            onClick={() => {
              setIsOpen(false);
              setMessage("");
            }}
            className="mt-8 px-6 py-2 text-sm text-white/80 hover:text-white
              underline underline-offset-4 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
