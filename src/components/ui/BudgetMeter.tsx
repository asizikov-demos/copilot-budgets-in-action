type BudgetMeterProps = {
  ariaLabel: string;
  percent: number;
  variant?: 'default' | 'warning';
};

export function BudgetMeter({ ariaLabel, percent, variant = 'default' }: BudgetMeterProps) {
  return (
    <div
      className={`budget-meter${variant === 'warning' ? ' warning' : ''}`}
      aria-label={ariaLabel}
    >
      <span style={{ width: `${percent}%` }} />
    </div>
  );
}
