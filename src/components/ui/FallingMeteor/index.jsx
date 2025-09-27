import React, { useState, useEffect, useCallback } from "react";

const getRandomPosition = () => ({
  top: `${10 + Math.random() * 70}%`,  // 10% to 80%
  left: `${Math.random() * 90}%`,       // 0% to 90%
});

export default function FallingMeteor({ interval = 5000, showDuration = 3000 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(getRandomPosition());

  const showMeteor = useCallback(() => {
    setPosition(getRandomPosition());
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, showDuration);
  }, [showDuration]);

  useEffect(() => {
    // Show the meteor immediately on first render
    showMeteor();

    // Set up interval for subsequent shows
    const timer = setInterval(showMeteor, interval);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [interval, showMeteor]);

  if (!isVisible) return null;

  const overlayStyle = {
    position: "fixed",
    top: position.top,
    left: position.left,
    width: "10vw",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
    transition: 'top 0.1s ease-out, left 0.1s ease-out'
  };

  return (
    <div style={overlayStyle}>
      <video 
        src="/FallingMeteor.webm"
        autoPlay 
        muted 
        loop={false}
        playsInline
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      />
    </div>
  );
}