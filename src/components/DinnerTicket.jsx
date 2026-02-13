const DinnerTicket = () => {
  return (
    <div className="z-10 transform hover:scale-105 transition-transform duration-300 px-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-dashed border-red-400 max-w-md w-full relative overflow-hidden mx-auto">
        {/* Decorative circles for ticket effect */}
        <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#fcf9f9] rounded-full transform -translate-y-1/2"></div>
        <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#fcf9f9] rounded-full transform -translate-y-1/2"></div>

        <div className="text-center space-y-4 border-2 border-red-100 p-6 rounded">
          <div className="text-red-500 text-4xl mb-2">🎟️</div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 uppercase tracking-wider leading-tight">
            Vale por una
            <span className="block text-red-600 text-3xl md:text-4xl mt-2">
              Cena Romántica
            </span>
          </h2>

          <div className="my-6 border-t border-b border-red-100 py-4">
            <p className="text-gray-400 uppercase text-xs tracking-[0.2em] mb-2">
              Válido para
            </p>
            <p className="text-2xl font-serif text-gray-800 italic">
              Mi Esposa Amada
            </p>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 font-light mt-4 px-2">
            <span className="flex items-center gap-1">
              📅 <span>15 Feb 2026</span>
            </span>
            <span className="flex items-center gap-1">
              📍 <span>Lugar Sorpresa</span>
            </span>
          </div>

          <div className="mt-6 pt-4 text-red-400 font-medium text-sm border-t border-dashed border-red-100">
            ¡Sabía que dirías que sí! ❤️
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinnerTicket;
