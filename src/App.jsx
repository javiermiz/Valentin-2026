import { useState, useEffect } from "react";
import { STEPS } from "./data/steps";
import ParticleBackground from "./components/ParticleBackground";
import TextStep from "./components/TextStep";
import PhotoStep from "./components/PhotoStep";
import QuestionStep from "./components/QuestionStep";
import NextButton from "./components/NextButton";
import DinnerTicket from "./components/DinnerTicket";

const App = () => {
  const [current_step, set_current_step] = useState(0);
  const [is_accepted, set_is_accepted] = useState(false);

  useEffect(() => {
    // Preload all images
    STEPS.forEach((step) => {
      if (step.type === "photo" && step.image) {
        const img = new Image();
        img.src = step.image;
      }
    });
  }, []);

  const handle_next = () => {
    if (current_step < STEPS.length - 1) {
      set_current_step((prev) => prev + 1);
    }
  };

  const handle_accept = () => {
    set_is_accepted(true);
  };

  const step_data = STEPS[current_step];

  const render_content = () => {
    if (is_accepted) {
      return <DinnerTicket />;
    }

    switch (step_data.type) {
      case "photo":
        return <PhotoStep data={step_data} />;
      case "question":
        return <QuestionStep data={step_data} onAccept={handle_accept} />;
      default:
        // Covers "greeting", "reasons", "moments"
        return <TextStep data={step_data} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f9] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {render_content()}

      {!is_accepted && step_data.type !== "question" && (
        <div className="fixed bottom-8 z-50">
          <NextButton onClick={handle_next} className="animate-bounce" />
        </div>
      )}

      <ParticleBackground />
    </div>
  );
};

export default App;
