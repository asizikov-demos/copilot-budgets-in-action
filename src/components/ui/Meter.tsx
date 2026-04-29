type MeterProps = {
  ariaLabel: string;
  fillPercent: number;
  text: string;
  variant?: 'remaining' | 'usage';
};

export function Meter({ ariaLabel, fillPercent, text, variant = 'remaining' }: MeterProps) {
  return (
    <div className="pool-bar" aria-label={ariaLabel}>
      <span
        className={`pool-fill${variant === 'usage' ? ' usage-fill' : ''}`}
        style={{ width: `${fillPercent}%` }}
      />
      <span className="pool-value">{text}</span>
    </div>
  );
}
