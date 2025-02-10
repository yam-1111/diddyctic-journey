
import React from "react";

interface HeartPendantProps {
  message: string;
  isOpen: boolean;
}

export const HeartPendant: React.FC<HeartPendantProps> = ({ message, isOpen }) => {
  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Heart */}
      <div
        className={`absolute inset-0 transition-all duration-500 transform
          ${isOpen ? "scale-0" : "scale-100"}
          ${!isOpen && "hover:scale-110"}`}
      >
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full fill-accent drop-shadow-lg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Message */}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center animate-message-fade">
          <div className="relative">
            {/* Heart-shaped message background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl" />
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full scale-[2.5] fill-white/90 drop-shadow-lg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            
            {/* Message text and image */}
            <div className="relative px-8 py-6 flex flex-col items-center gap-4">
              <div className="text-2xl font-bold text-center text-accent">
                {message}
              </div>
              {message.includes("walang jowa") && (
                <img
                  src="/assets/e5b7f517-9442-4cdc-8f71-5f412bc71b53.png"
                  alt="Crying cat meme"
                  className="w-32 h-32 object-cover rounded-lg animate-fade-in"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
