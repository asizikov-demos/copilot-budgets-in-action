export function MonitorUsageSlide() {
  return (
    <>
      <p>
        Usage trends are most useful before a limit is reached. Surface the
        current slide state, thresholds, and next action in one place.
      </p>
      <div className="budget-meter warning" aria-label="Example monitored budget usage">
        <span style={{ width: '72%' }} />
      </div>
      <p className="hint">Example: 72% usage suggests the team should review.</p>
    </>
  );
}
