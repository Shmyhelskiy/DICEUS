type CurrencyValue = {
  value: number;
  display: string;
};

type LossRatioLevel = 'good' | 'average' | 'poor';

type AppetiteLevel = 'HIGH' | 'MEDIUM' | 'CAUTIOUS';

type StatusKey = 'active' | 'under_review';

type StatusIndicatorColor = 'green' | 'blue';

type WinnabilityText = 'Very Strong' | 'Strong' | 'Medium';

export type AccountData = {
  id: string;
  accountName: string;
  accountType: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: CurrencyValue;
  ratedPremium: CurrencyValue;
  lossRatio: {
    percentage: number;
    level: LossRatioLevel;
  };
  appetite: AppetiteLevel;
  status: {
    key: StatusKey;
    display: string;
    indicator: StatusIndicatorColor;
  };
  triage: number;
  winnability: {
    level: number;
    text: WinnabilityText;
  };
};

export type AccountsApiResponse = AccountData[];