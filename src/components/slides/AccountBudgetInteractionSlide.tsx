import { useState } from 'react';
import { Meter, PromptMessage, StepButton, UserConsumption } from '../ui';

export function AccountBudgetInteractionSlide() {
  const [currentStep, setCurrentStep] = useState(0);
  const includedCredits = 3000;
  const additionalUsageBudget = 1000;
  const userConsumptionPerStep = 1750;
  const attemptedConsumption = userConsumptionPerStep * currentStep;
  const actualConsumption = Math.min(
    attemptedConsumption,
    includedCredits + additionalUsageBudget,
  );
  const includedConsumed = Math.min(actualConsumption, includedCredits);
  const additionalUsage = Math.max(actualConsumption - includedCredits, 0);
  const includedRemaining = includedCredits - includedConsumed;
  const additionalRemaining = additionalUsageBudget - additionalUsage;
  const additionalAvailableBeforeHardStop =
    additionalUsageBudget -
    Math.max(
      Math.min(userConsumptionPerStep * 2, includedCredits + additionalUsageBudget) -
        includedCredits,
      0,
    );
  const includedFillPercent = (includedRemaining / includedCredits) * 100;
  const additionalFillPercent = (additionalUsage / additionalUsageBudget) * 100;
  const explanation =
    currentStep === 0
      ? 'Account-level budgets only apply to additional usage. They do not impact included credits. User A has 3000 AICs in the included credits pool, and the account-level budget is set to $10 (1000 AICs).'
      : currentStep === 1
        ? `User A consumes ${userConsumptionPerStep} AICs from included credits. ${includedRemaining} included credits remain, and additional usage is still 0 AICs.`
        : currentStep === 2
        ? `User A consumes the remaining included credits and ${additionalUsage} AICs of additional usage. The account-level budget still has ${additionalRemaining} AICs left.`
          : `User A can only consume the remaining ${additionalAvailableBeforeHardStop} AICs of additional usage before the $10 account-level budget creates a hard stop. They cannot continue.`;

  return (
    <>
      <div className="pool-visualization" aria-label="Account budget hard stop simulation">
        <div className="segmented-pool-labels" aria-hidden="true">
          <span>Included credits</span>
          <span>Additional usage budget</span>
        </div>
        <div className="segmented-pool">
          <div className="segmented-pool-section">
            <Meter
              ariaLabel={`${includedRemaining} included credits left`}
              fillPercent={includedFillPercent}
              text={`${includedRemaining} AICs left`}
            />
          </div>
          <div className="segmented-pool-section">
            <Meter
              ariaLabel={`${additionalUsage} AICs of additional usage budget used`}
              fillPercent={additionalFillPercent}
              text={`${additionalUsage} / 1000 AICs`}
              variant="usage"
            />
          </div>
        </div>
        <div className="user-grid single-user" aria-label="User consuming credits">
          <UserConsumption label="User A" value={actualConsumption} />
        </div>
      </div>
      <PromptMessage>{explanation}</PromptMessage>
      <StepButton
        currentStep={currentStep}
        maxStep={3}
        onNext={() => setCurrentStep((step) => Math.min(step + 1, 3))}
      />
    </>
  );
}
