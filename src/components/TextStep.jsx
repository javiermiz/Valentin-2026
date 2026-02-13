const TextStep = ({ data }) => {
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
        {data.type === "reasons" ? (
          <div className="space-y-4">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-gray-600 text-lg"
              >
                <span className="text-pink-300 text-sm">❤</span>
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            {data.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextStep;
