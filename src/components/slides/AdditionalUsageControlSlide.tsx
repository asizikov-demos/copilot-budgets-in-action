import { Card } from '../ui';

export function AdditionalUsageControlSlide() {
  return (
    <>
      <p>
        In the previous example, additional usage reached 7000 AICs after the
        included credits were fully consumed.
      </p>
      <Card label="Why this matters" title="Additional usage creates variable cost">
        <p>
          That means the account has moved into unpredictable extra charges on
          top of the subscription cost. Additional usage needs to be controlled.
        </p>
      </Card>
    </>
  );
}
