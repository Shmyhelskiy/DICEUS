export type PolicyStatus = {
  text: string;
  colorClass: string;
};



export type LossRatio = {
  display: string;
  badgeColorClass: string;
  textColorClass: string;
};

export type FullPolicyItem = {
  id: string;
  iconName: string;
  iconColor: string;
  name: string;
  effDate: string;
  expDate: string;
  status: PolicyStatus;
  rateChange: number;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renevalPremium: number;
  lossRatio: number;
};

export type FullPoliciesData = FullPolicyItem[];
