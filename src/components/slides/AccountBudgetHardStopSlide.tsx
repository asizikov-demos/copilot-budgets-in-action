export function AccountBudgetHardStopSlide() {
  return (
    <>
      <p>
        An account-level budget can put a hard stop on additional usage, helping
        to control additional charges on top of the included credits.
      </p>
      <div className="interactive-card">
        <span className="card-label">GitHub Docs</span>
        <strong>Manage budgets for an organization or enterprise</strong>
        <p>
          Learn how to set up budgets in GitHub:{' '}
          <a
            href="https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-budgets#managing-budgets-for-your-organization-or-enterprise"
            target="_blank"
            rel="noreferrer"
          >
            Managing budgets for your organization or enterprise
          </a>
        </p>
      </div>
    </>
  );
}
