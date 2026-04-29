import { AccountAicPoolSlide } from './AccountAicPoolSlide';
import { AccountBudgetHardStopSlide } from './AccountBudgetHardStopSlide';
import { AccountBudgetInteractionSlide } from './AccountBudgetInteractionSlide';
import { AdditionalUsageControlSlide } from './AdditionalUsageControlSlide';
import { AiCreditsSlide } from './AiCreditsSlide';
import { IncludedAiCreditsSlide } from './IncludedAiCreditsSlide';
import { IncludedCreditsExhaustedSlide } from './IncludedCreditsExhaustedSlide';
import { MonitorUsageSlide } from './MonitorUsageSlide';
import { PoolConsumptionSlide } from './PoolConsumptionSlide';
import { PoolLessonsSlide } from './PoolLessonsSlide';
import { SetLimitsSlide } from './SetLimitsSlide';
import { TakeActionSlide } from './TakeActionSlide';
import { TokenConsumptionSlide } from './TokenConsumptionSlide';
import type { TutorialSlide } from './types';

export const slides: TutorialSlide[] = [
  {
    slug: 'ai-credits',
    name: 'AI Credits',
    number: 1,
    eyebrow: 'Start here',
    title: 'AI Credits make model usage measurable',
    content: <AiCreditsSlide />,
  },
  {
    slug: 'token-consumption',
    name: 'Token consumption',
    number: 2,
    eyebrow: 'Interactive example',
    title: 'Watch tokens turn into AICs',
    content: <TokenConsumptionSlide />,
  },
  {
    slug: 'included-ai-credits',
    name: 'Included AI Credits',
    number: 3,
    eyebrow: 'Next concept',
    title: 'Included AICs come from Copilot subscriptions',
    content: <IncludedAiCreditsSlide />,
  },
  {
    slug: 'account-aic-pool',
    name: 'Account AIC pool',
    number: 4,
    eyebrow: 'Included credits',
    title: 'Each license contributes to one account pool',
    content: <AccountAicPoolSlide />,
  },
  {
    slug: 'pool-consumption',
    name: 'Pool consumption',
    number: 5,
    eyebrow: 'Shared pool',
    title: 'Watch the shared pool get consumed',
    content: <PoolConsumptionSlide />,
  },
  {
    slug: 'pool-lessons',
    name: 'Pool lessons',
    number: 6,
    eyebrow: 'Shared pool recap',
    title: 'Shared pools are flexible, not equal per user',
    content: <PoolLessonsSlide />,
  },
  {
    slug: 'included-credits-exhausted',
    name: 'Credits exhausted',
    number: 7,
    eyebrow: 'Additional usage',
    title: 'When included credits are fully consumed',
    content: <IncludedCreditsExhaustedSlide />,
  },
  {
    slug: 'additional-usage-control',
    name: 'Control usage',
    number: 8,
    eyebrow: 'Cost control',
    title: 'Additional usage needs control',
    content: <AdditionalUsageControlSlide />,
  },
  {
    slug: 'account-budget-hard-stop',
    name: 'Budget hard stop',
    number: 9,
    eyebrow: 'Account budget',
    title: 'Account-level budgets can stop additional usage',
    content: <AccountBudgetHardStopSlide />,
  },
  {
    slug: 'account-budget-interaction',
    name: 'Budget in action',
    number: 10,
    eyebrow: 'Hard stop example',
    title: 'Account budgets only stop additional usage',
    content: <AccountBudgetInteractionSlide />,
  },
  {
    slug: 'set-limits',
    name: 'Set limits',
    number: 11,
    eyebrow: 'Step 1',
    title: 'Choose a budget before usage starts',
    content: <SetLimitsSlide />,
  },
  {
    slug: 'monitor-usage',
    name: 'Monitor usage',
    number: 12,
    eyebrow: 'Step 2',
    title: 'Watch usage while there is still time to adjust',
    content: <MonitorUsageSlide />,
  },
  {
    slug: 'take-action',
    name: 'Take action',
    number: 13,
    eyebrow: 'Step 3',
    title: 'Decide what happens when a budget needs attention',
    content: <TakeActionSlide />,
  },
];
