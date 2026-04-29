type StepButtonProps = {
  currentStep: number;
  maxStep: number;
  onNext: () => void;
};

export function StepButton({ currentStep, maxStep, onNext }: StepButtonProps) {
  if (currentStep >= maxStep) {
    return null;
  }

  return (
    <button className="step-button" type="button" onClick={onNext}>
      Next step
    </button>
  );
}
