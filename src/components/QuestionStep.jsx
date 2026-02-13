import { useState } from "react";

const QuestionStep = ({ data, onAccept }) => {
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
        {data.title}
      </h1>

      <div className="mb-12 text-center max-w-lg">
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          {data.content}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-6 mt-4 relative">
          <button
            onClick={onAccept}
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
      </div>
    </div>
  );
};

export default QuestionStep;
