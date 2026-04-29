import { Card, DataTable } from '../ui';

export function AccountAicPoolSlide() {
  return (
    <>
      <p>
        Every user with a Copilot license adds AICs to the global account-level
        pool. That pool is shared across the account.
      </p>
      <Card label="Monthly contribution by license type">
        <DataTable
          columns={['License type', 'AICs added to pool']}
          rows={[
            ['Business', '3000 AICs'],
            ['Enterprise', '7000 AICs'],
          ]}
        />
      </Card>
      <p className="hint">
        Business and Enterprise are Copilot license types; the pool is shared,
        not reserved per user.
      </p>
    </>
  );
}
