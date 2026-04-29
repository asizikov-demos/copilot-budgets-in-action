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
      <div className="interactive-card">
        <span className="card-label">Example pricing per 1M tokens</span>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Input</th>
              <th>Cached input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GPT-5.5</td>
              <td>$5.00</td>
              <td>$0.50</td>
              <td>$30.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="interactive-card">
        <span className="card-label">Interaction cost</span>
        <strong>15,000 input tokens, 10,000 cached, 7,500 output</strong>
        <p className="formula">
          (5,000 x $5.00 + 10,000 x $0.50 + 7,500 x $30.00) / 1M =
          $0.255 = 25.5 AICs
        </p>
      </div>
    </>
  );
}
