// components/Loading.tsx
import React, { useState, useEffect } from 'react';

export const LoadingComponent = () => {
  const [currentEmoji, setCurrentEmoji] = useState(0);
  
  const dessertEmojis = ['🍰', '🧁', '🍪', '🥐', '🍩', '🎂', '🥧', '🍮'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(prev => (prev + 1) % dessertEmojis.length);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-cream/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-6 animate-bounce">
          {dessertEmojis[currentEmoji]}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">CroqDya</h2>
          <p className="text-gray-600 animate-pulse">Préparation de vos délices...</p>
        </div>
      </div>
    </div>
  );
};