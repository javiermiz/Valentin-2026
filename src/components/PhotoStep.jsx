import { UI_TEXTS } from "../data/steps";

const PhotoStep = ({ data }) => {
  return (
    <div className="fixed inset-0 w-full h-full z-20 flex flex-col items-center justify-end pb-12">
      <img
        src={data.image}
        alt={UI_TEXTS.photo.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default PhotoStep;
