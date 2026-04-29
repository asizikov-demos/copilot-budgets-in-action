type AicCounterProps = {
  counted?: boolean;
  value: string;
};

export function AicCounter({ counted = false, value }: AicCounterProps) {
  return (
    <div className="aic-counter" aria-label={`Current AI Credits: ${value}`}>
      <span>AICs =</span>
      <strong key={value} className={counted ? 'counted' : undefined}>
        {value}
      </strong>
    </div>
  );
}
