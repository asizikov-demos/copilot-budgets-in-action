import { BudgetMeter } from '../ui';

export function SetLimitsSlide() {
  return (
    <>
      <p>
        Start with a simple limit that reflects the team size, expected
        adoption, and the value of the work Copilot supports.
      </p>
      <BudgetMeter ariaLabel="Example monthly budget usage" percent={35} />
      <p className="hint">Example: 35% of the monthly budget is reserved.</p>
    </>
  );
}
