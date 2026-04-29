import { Card, DataTable } from '../ui';

export function AiCreditsSlide() {
  return (
    <>
      <p>
        An AI Credit, or AIC, is the accounting unit for model usage. One AIC
        equals $0.01.
      </p>
      <p>
        Different LLMs price input, cached input, and output tokens differently.
        Those token costs are converted into USD and normalized into AICs, so
        usage across models can be compared with one unit.
      </p>
      <Card label="Example pricing per 1M tokens">
        <DataTable
          columns={['Model', 'Input', 'Cached input', 'Output']}
          rows={[['GPT-5.5', '$5.00', '$0.50', '$30.00']]}
        />
      </Card>
      <Card label="Interaction cost" title="15,000 input tokens, 10,000 cached, 7,500 output">
        <p className="formula">
          (5,000 x $5.00 + 10,000 x $0.50 + 7,500 x $30.00) / 1M =
          $0.255 = 25.5 AICs
        </p>
      </Card>
    </>
  );
}
