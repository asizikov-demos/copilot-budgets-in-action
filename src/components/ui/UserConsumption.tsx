type UserConsumptionProps = {
  label: string;
  value: number;
};

export function UserConsumption({ label, value }: UserConsumptionProps) {
  return (
    <div className="user-consumption">
      <div className="user-card">
        <strong key={value}>{value} AICs</strong>
      </div>
      <span>{label}</span>
    </div>
  );
}
