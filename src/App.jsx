import { useState } from "react";

const STEPS = [
  {
    type: "greeting",
    title: "Feliz San Valentin",
    content:
      "Hoy quiero dedicarte estas palabras desde lo mas profundo de mi corazon.",
  },
  {
    type: "reasons",
    title: "Razones por las que te quiero",
    items: [
      "Porque tu sonrisa ilumina mis dias",
      "Porque contigo todo es mejor",
      "Porque me haces ser mejor persona",
      "Porque cada momento a tu lado es especial",
      "Porque tu risa es mi cancion favorita",
      "Porque eres mi persona favorita en el mundo",
    ],
  },
  {
    type: "moments",
    title: "Nuestros momentos juntos",
    content: "Año y medio desde el dia mas feliz de nuestras vidas",
  },
  {
    type: "photo",
    image: "/images/IMG_0620.JPG",
  },
  {
    type: "photo",
    image: "/images/IMG_20190518_115829.jpg",
  },
  {
    type: "photo",
    image: "/images/IMG_20210627_143213.jpg",
  },
  {
    type: "photo",
    image: "/images/IMG_20210723_114116.jpg",
  },
  {
    type: "photo",
    image: "/images/LRM_EXPORT_1391378729473_20191026_231548709.jpeg",
  },
  {
    type: "photo",
    image: "/images/_ROB2972.jpg_compressed.JPEG",
  },
  {
    type: "question",
    title: "La gran pregunta...",
    content: "Quieres ser mi valentin?",
  },
];

const generateParticles = () => {
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

const App = () => {
  const [current_step, set_current_step] = useState(0);
  const [is_accepted, set_is_accepted] = useState(false);
  const [particles] = useState(generateParticles);
  const [no_btn_style, set_no_btn_style] = useState({});
  const [no_btn_scale, set_no_btn_scale] = useState(1);

  const handle_no_interaction = () => {
    const random_x = Math.random() * 80 - 40; // -40% to 40%
    const random_y = Math.random() * 80 - 40; // -40% to 40%

    set_no_btn_style({
      transform: `translate(${random_x}vw, ${random_y}vh)`,
      position: "absolute",
    });

    set_no_btn_scale((prev) => Math.max(0, prev - 0.2));
  };

  const handle_next = () => {
    if (current_step < STEPS.length - 1) {
      set_current_step((prev) => prev + 1);
    }
  };

  const handle_accept = () => {
    set_is_accepted(true);
  };

  const render_next_button = (className = "") => (
    <button
      onClick={handle_next}
      className={`bg-red-500 hover:bg-red-600 text-white rounded-full p-4 transition-all hover:scale-110 cursor-pointer shadow-lg ${className}`}
      aria-label="Next step"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );

  const render_content = () => {
    if (is_accepted) {
      return (
        <div className="text-center animate-bounce">
          <h1 className="text-5xl font-serif font-bold text-red-600 mb-4">
            ¡Gracias por decir que sí! 💖
          </h1>
          <p className="text-2xl text-gray-600 font-light">Te amo mucho.</p>
        </div>
      );
    }

    const step_data = STEPS[current_step];

    return (
      <div className="max-w-2xl w-full flex flex-col items-center justify-center p-8 z-10 relative">
        <div className="mb-8">
          <svg
            viewBox="0 0 24 24"
            fill="#ef4444"
            className="w-24 h-24 drop-shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2a1a1a] mb-6 text-center tracking-wide">
          {step_data.title}
        </h1>

        <div className="mb-12 text-center max-w-lg">
          {step_data.type === "reasons" ? (
            <div className="space-y-4">
              {step_data.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 text-gray-600 text-lg"
                >
                  <span className="text-pink-300 text-sm">❤</span>
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          ) : step_data.type === "photo" ? (
            <div className="fixed inset-0 w-full h-full z-20 flex flex-col items-center justify-end pb-12">
              <img
                src={step_data.image}
                alt="Moment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 z-30">
                {render_next_button("hover:bg-red-600")}
              </div>
            </div>
          ) : (
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {step_data.content}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          {step_data.type === "question" ? (
            <div className="flex gap-6 mt-4 relative">
              <button
                onClick={handle_accept}
                className="bg-red-500 hover:bg-red-600 text-white text-xl font-medium py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer z-10"
              >
                ¡Sí, quiero!
              </button>
              {no_btn_scale > 0 && (
                <button
                  onMouseEnter={handle_no_interaction}
                  onClick={handle_no_interaction}
                  style={{
                    ...no_btn_style,
                    transform: `${no_btn_style.transform || ""} scale(${no_btn_scale})`,
                    transition: "all 0.3s ease",
                  }}
                  className="bg-gray-400 hover:bg-gray-500 text-white text-xl font-medium py-3 px-10 rounded-full cursor-pointer whitespace-nowrap"
                >
                  No 😢
                </button>
              )}
            </div>
          ) : step_data.type !== "photo" ? (
            render_next_button("animate-bounce")
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fcf9f9] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {render_content()}

      {/* Floating particles background */}
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
    </div>
  );
};

export default App;
