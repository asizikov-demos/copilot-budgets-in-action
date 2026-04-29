export function SetLimitsSlide() {
  return (
    <>
      <p>
        Start with a simple limit that reflects the team size, expected
        adoption, and the value of the work Copilot supports.
      </p>
      <div className="budget-meter" aria-label="Example monthly budget usage">
        <span style={{ width: '35%' }} />
      </div>
      <p className="hint">Example: 35% of the monthly budget is reserved.</p>
    </>
  );
}
