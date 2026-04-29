import { BudgetMeter } from '../ui';

export function MonitorUsageSlide() {
  return (
    <>
      <p>
        Usage trends are most useful before a limit is reached. Surface the
        current slide state, thresholds, and next action in one place.
      </p>
      <BudgetMeter ariaLabel="Example monitored budget usage" percent={72} variant="warning" />
      <p className="hint">Example: 72% usage suggests the team should review.</p>
    </>
  );
}
