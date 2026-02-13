import { UI_TEXTS } from "../data/steps";

const NextButton = ({ onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-red-500 hover:bg-red-600 text-white rounded-full p-4 transition-all hover:scale-110 cursor-pointer shadow-lg ${className}`}
    aria-label={UI_TEXTS.navigation.next_btn_aria}
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

export default NextButton;
