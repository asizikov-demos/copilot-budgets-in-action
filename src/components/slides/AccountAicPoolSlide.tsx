export function AccountAicPoolSlide() {
  return (
    <>
      <p>
        Every user with a Copilot license adds AICs to the global account-level
        pool. That pool is shared across the account.
      </p>
      <div className="interactive-card">
        <span className="card-label">Monthly contribution by license type</span>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>License type</th>
              <th>AICs added to pool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Business</td>
              <td>3000 AICs</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>7000 AICs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="hint">
        Business and Enterprise are Copilot license types; the pool is shared,
        not reserved per user.
      </p>
    </>
  );
}
