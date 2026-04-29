import { useState } from 'react';

export function TokenConsumptionSlide() {
  const [currentStep, setCurrentStep] = useState(0);
  const gpt55Pricing = {
    input: 5,
    cachedInput: 0.5,
    output: 30,
  };
  const gpt54MiniPricing = {
    input: 0.75,
    cachedInput: 0.075,
    output: 4.5,
  };
  const initialContextTokens = 1000;
  const firstOutputTokens = 1500;
  const harnessTokens = 1000;
  const cachedTokens = 1000;
  const returnedContextTokens = initialContextTokens + firstOutputTokens + harnessTokens;
  const uncachedStateTokens = returnedContextTokens - cachedTokens;
  const secondOutputTokens = 5000;
  const finalContextTokens = returnedContextTokens + secondOutputTokens;
  const miniContextTokens = 1000;
  const miniOutputTokens = 2000;
  const firstInteractionUsd =
    (cachedTokens * gpt55Pricing.cachedInput + firstOutputTokens * gpt55Pricing.output) / 1_000_000;
  const stateSendUsd =
    (cachedTokens * gpt55Pricing.cachedInput + uncachedStateTokens * gpt55Pricing.input) /
    1_000_000;
  const secondOutputUsd = (secondOutputTokens * gpt55Pricing.output) / 1_000_000;
  const miniInputUsd = (miniContextTokens * gpt54MiniPricing.input) / 1_000_000;
  const miniOutputUsd = (miniOutputTokens * gpt54MiniPricing.output) / 1_000_000;
  const formatAics = (usd: number) =>
    (Math.round((usd / 0.01 + Number.EPSILON) * 100) / 100).toFixed(2);
  const firstInteractionTotalUsd = firstInteractionUsd;
  const stateSendTotalUsd = firstInteractionTotalUsd + stateSendUsd;
  const secondOutputTotalUsd = stateSendTotalUsd + secondOutputUsd;
  const miniInputTotalUsd = secondOutputTotalUsd + miniInputUsd;
  const miniOutputTotalUsd = miniInputTotalUsd + miniOutputUsd;
  const firstInteractionAics = formatAics(firstInteractionTotalUsd);
  const stateSendAics = formatAics(stateSendTotalUsd);
  const secondOutputAics = formatAics(secondOutputTotalUsd);
  const miniInputAics = formatAics(miniInputTotalUsd);
  const miniOutputAics = formatAics(miniOutputTotalUsd);
  const gpt55Usd = secondOutputTotalUsd;
  const gpt54MiniUsd = miniInputUsd + miniOutputUsd;
  const isSummaryStep = currentStep >= 12;
  const hasMiniContextTokens = currentStep >= 9 && !isSummaryStep;
  const hasContextTokens = !isSummaryStep && ((currentStep >= 1 && currentStep < 8) || hasMiniContextTokens);
  const hasCachedPrompt = currentStep >= 2 && !isSummaryStep;
  const hasOutputTokens = (currentStep >= 3 && currentStep < 4) || currentStep === 6;
  const hasReturnedResult = currentStep >= 4;
  const hasHarnessSentState = currentStep >= 5 && currentStep < 7 && !isSummaryStep;
  const hasSecondReturn = currentStep >= 7 && !isSummaryStep;
  const hasMiniInput = currentStep >= 10 && !isSummaryStep;
  const hasMiniOutput = currentStep >= 11 && !isSummaryStep;
  const contextTokens = hasMiniContextTokens
    ? miniContextTokens
    : hasSecondReturn
      ? finalContextTokens
      : hasReturnedResult
        ? returnedContextTokens
        : initialContextTokens;
  const currentAics =
    currentStep >= 11
      ? miniOutputAics
      : currentStep >= 10
        ? miniInputAics
        : currentStep >= 6
          ? secondOutputAics
          : hasHarnessSentState
            ? stateSendAics
            : hasReturnedResult
              ? firstInteractionAics
              : '000';
  const outputTokens = currentStep >= 6 ? secondOutputTokens : firstOutputTokens;
  const promptMessage =
    currentStep === 0
      ? 'A user is about to send the first prompt to the GPT-5.5 model.'
      : currentStep === 1
        ? `They put ${initialContextTokens} tokens into the context.`
        : currentStep === 2
          ? 'This prompt might get fully cached.'
          : currentStep === 3
            ? `Model generates ${firstOutputTokens} tokens of output.`
            : currentStep === 4
              ? `The result is returned into context, and the harness generated another ${harnessTokens} tokens of data. Context now contains ${returnedContextTokens} tokens. Total cost: $${firstInteractionUsd.toFixed(4)} = ${firstInteractionAics} AICs.`
              : currentStep === 5
                ? `Harness sends the state back to the model: ${cachedTokens} tokens are cached, ${uncachedStateTokens} uncached tokens are sent to the model. Running total: $${(firstInteractionUsd + stateSendUsd).toFixed(4)} = ${stateSendAics} AICs.`
                : currentStep === 6
                  ? `Model generates ${secondOutputTokens} tokens of output. Running total: $${(firstInteractionUsd + stateSendUsd + secondOutputUsd).toFixed(4)} = ${secondOutputAics} AICs.`
                  : currentStep === 7
                    ? `The output is returned into context, so the output buffer clears and Agent Context grows by another ${secondOutputTokens} tokens. The task is done, and the user is about to switch to GPT-5.4 mini to start a simple task.`
                    : currentStep === 8
                      ? 'Agent Context is cleared before the new simple task starts.'
                      : currentStep === 9
                        ? `The user puts ${miniContextTokens} tokens into context for the simple task.`
                        : currentStep === 10
                          ? `The harness sends ${miniContextTokens} uncached input tokens to GPT-5.4 mini. Running total: $${miniInputTotalUsd.toFixed(4)} = ${miniInputAics} AICs.`
                          : currentStep === 11
                            ? `GPT-5.4 mini generates ${miniOutputTokens} tokens of output. The user stops because they are done. Final total: $${miniOutputTotalUsd.toFixed(4)} = ${miniOutputAics} AICs.`
                            : `The user consumed $${gpt55Usd.toFixed(4)} worth of GPT-5.5 tokens and $${gpt54MiniUsd.toFixed(4)} worth of GPT-5.4 mini tokens, normalized into ${miniOutputAics} AICs ($${miniOutputTotalUsd.toFixed(4)} worth).`;

  return (
    <>
      <div className="interactive-card">
        <span className="card-label">Model pricing per 1M tokens</span>
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
            <tr>
              <td>GPT-5.4 mini</td>
              <td>$0.75</td>
              <td>$0.075</td>
              <td>$4.50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="aic-counter" aria-label={`Current AI Credits: ${currentAics}`}>
        <span>AICs =</span>
        <strong key={currentAics} className={hasReturnedResult ? 'counted' : undefined}>
          {currentAics}
        </strong>
      </div>
      <div className="token-visualization" aria-label="Token consumption by model">
        <div className="token-row">
          <span className="token-label">GPT-5.5</span>
          <div className="token-bar">
            <span className={`token-segment cached${hasCachedPrompt ? ' filled' : ''}`}>
              {hasCachedPrompt ? (
                <span className="segment-fill">{cachedTokens} tokens</span>
              ) : (
                'cached input'
              )}
            </span>
            <span className={`token-segment input${hasHarnessSentState ? ' filled' : ''}`}>
              {hasHarnessSentState ? (
                <span className="segment-fill">{uncachedStateTokens} tokens</span>
              ) : (
                'input'
              )}
            </span>
            <span className={`token-segment output${hasOutputTokens ? ' filled' : ''}`}>
              {hasOutputTokens ? <span className="segment-fill">{outputTokens} tokens</span> : 'output'}
            </span>
          </div>
        </div>
        <div className="token-row">
          <span className="token-label">GPT-5.4 mini</span>
          <div className="token-bar">
            <span className="token-segment cached">cached input</span>
            <span className={`token-segment input${hasMiniInput ? ' filled' : ''}`}>
              {hasMiniInput ? <span className="segment-fill">{miniContextTokens} tokens</span> : 'input'}
            </span>
            <span className={`token-segment output${hasMiniOutput ? ' filled' : ''}`}>
              {hasMiniOutput ? <span className="segment-fill">{miniOutputTokens} tokens</span> : 'output'}
            </span>
          </div>
        </div>
        <div className="token-row">
          <span className="token-label">Agent Context</span>
          <div
            className={`token-bar context-bar${hasContextTokens ? ' filled' : ''}`}
            aria-label={
              hasContextTokens
                ? `Agent Context contains ${contextTokens} tokens`
                : 'Agent Context is empty'
            }
          >
            {hasContextTokens ? (
              <span className={`context-fill${hasReturnedResult && !hasMiniContextTokens ? ' expanded' : ''}${hasSecondReturn && !hasMiniContextTokens ? ' expanded-more' : ''}`}>
                {contextTokens} tokens
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <p className="prompt-message">{promptMessage}</p>
      {currentStep < 12 ? (
        <button
          className="step-button"
          type="button"
          onClick={() => setCurrentStep((step) => Math.min(step + 1, 12))}
        >
          Next step
        </button>
      ) : null}
    </>
  );
}
