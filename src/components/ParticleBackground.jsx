import { useState } from "react";

const generate_particles = () => {
  return Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    size: 20 + Math.random() * 20,
    color:
      Math.random() > 0.5
        ? "text-pink-200"
        : Math.random() > 0.5
          ? "text-red-200"
          : "text-rose-300",
  }));
};

const ParticleBackground = () => {
  const [particles] = useState(generate_particles);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.color} animate-float-up opacity-0`}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
            bottom: "-50px",
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default ParticleBackground;
