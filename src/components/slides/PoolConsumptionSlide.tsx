import { useState } from 'react';
import { Meter, PromptMessage, StepButton, UserConsumption } from '../ui';

export function PoolConsumptionSlide() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalPool = 9000;
  const users = [
    { name: 'User A', consumptionPerStep: 1500 },
    { name: 'User B', consumptionPerStep: 500 },
    { name: 'User C', consumptionPerStep: 750 },
  ];
  const totalConsumed = users.reduce(
    (sum, user) => sum + user.consumptionPerStep * currentStep,
    0,
  );
  const remainingPool = totalPool - totalConsumed;
  const remainingPoolPercent = (remainingPool / totalPool) * 100;
  const explanation =
    currentStep === 0
      ? 'Three users with Copilot Business subscriptions result in 3000 x 3 AICs in the pool.'
      : `Step ${currentStep}: User A consumes ${users[0].consumptionPerStep} AICs, User B consumes ${users[1].consumptionPerStep} AICs, and User C consumes ${users[2].consumptionPerStep} AICs. The shared pool has ${remainingPool} AICs left.`;

  return (
    <>
      <div className="pool-visualization" aria-label="Shared AI Credits pool">
        <div className="pool-row">
          <span className="token-label">Shared Pool</span>
          <Meter
            ariaLabel={`Shared Pool contains ${remainingPool} AICs`}
            fillPercent={remainingPoolPercent}
            text={`${remainingPool} AICs`}
          />
        </div>
        <div className="user-grid" aria-label="Users contributing to the pool">
          {users.map((user) => {
            const consumed = user.consumptionPerStep * currentStep;

            return <UserConsumption key={user.name} label={user.name} value={consumed} />;
          })}
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
