import { useState } from 'react';

export function IncludedCreditsExhaustedSlide() {
  const [currentStep, setCurrentStep] = useState(0);
  const includedCredits = 9000;
  const additionalUsageLimit = 6000;
  const users = [
    { name: 'User A', consumptionPerStep: 2500 },
    { name: 'User B', consumptionPerStep: 1500 },
  ];
  const totalConsumed = users.reduce(
    (sum, user) => sum + user.consumptionPerStep * currentStep,
    0,
  );
  const includedConsumed = Math.min(totalConsumed, includedCredits);
  const additionalUsage = Math.max(totalConsumed - includedCredits, 0);
  const includedRemaining = includedCredits - includedConsumed;
  const includedFillPercent = ((includedCredits - includedConsumed) / includedCredits) * 100;
  const additionalFillPercent = Math.min((additionalUsage / additionalUsageLimit) * 100, 100);
  const explanation =
    currentStep === 0
      ? 'The account starts with included credits available and no additional usage.'
      : additionalUsage === 0
        ? `Step ${currentStep}: User A consumes ${users[0].consumptionPerStep} AICs and User B consumes ${users[1].consumptionPerStep} AICs. ${includedRemaining} included credits remain.`
        : `Step ${currentStep}: included credits are exhausted. User consumption continues into additional usage, now at ${additionalUsage} AICs.`;

  return (
    <>
      <div className="pool-visualization" aria-label="Included credits and additional usage">
        <div className="segmented-pool-labels" aria-hidden="true">
          <span>Included credits</span>
          <span>Additional usage</span>
        </div>
        <div className="segmented-pool">
          <div className="segmented-pool-section">
            <div className="pool-bar" aria-label={`${includedRemaining} included credits left`}>
              <span className="pool-fill" style={{ width: `${includedFillPercent}%` }} />
              <span className="pool-value">{includedRemaining} AICs left</span>
            </div>
          </div>
          <div className="segmented-pool-section">
            <div className="pool-bar" aria-label={`${additionalUsage} AICs of additional usage`}>
              <span className="pool-fill usage-fill" style={{ width: `${additionalFillPercent}%` }} />
              <span className="pool-value">{additionalUsage} AICs</span>
            </div>
          </div>
        </div>
        <div className="user-grid two-users" aria-label="Users consuming included credits">
          {users.map((user) => {
            const consumed = user.consumptionPerStep * currentStep;

            return (
              <div className="user-consumption" key={user.name}>
                <div className="user-card">
                  <strong key={consumed}>{consumed} AICs</strong>
                </div>
                <span>{user.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <p className="prompt-message">{explanation}</p>
      {currentStep < 4 ? (
        <button
          className="step-button"
          type="button"
          onClick={() => setCurrentStep((step) => Math.min(step + 1, 4))}
        >
          Next step
        </button>
      ) : null}
    </>
  );
}
