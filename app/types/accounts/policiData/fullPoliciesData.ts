export type PolicyStatusText = "Active" | "Pending";

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
  status: PolicyStatusText;
  rateChange: number;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renevalPremium: number;
  lossRatio: number;
};

export type FullPoliciesData = FullPolicyItem[];
