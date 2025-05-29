import BlurText from "./BlurText";

const IntroMessage = () => {
  return (
    <>
      <BlurText
        text="At Dr. Farsana’s Dental Clinic, your comfort and care come first. We provide personalized, high-quality dental treatment using the latest technology — all in a warm, respectful environment. Let us change the way you feel about visiting the dentist."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />
    </>
  );
};

export default IntroMessage;
