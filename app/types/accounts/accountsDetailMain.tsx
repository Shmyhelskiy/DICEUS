type WinnabilityRatingText = "Very Strong" | "Strong" | "Medium" | "Weak" | "Very Weak";

type Month = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec" | "Now";

type TrendPoint = {
  month: Month;
  value: number;
};

type PositionBar = {
  id: string;
  value: number;
  title: string;
};

type WinnabilityFactor = {
  id: string;
  rank: number;
  label: string;
  impactPercentage: number;
  barValue: number;
};

export type historicalTrendType = {
  title: string;
  data: TrendPoint[];
};

type WinnabilityData = {
  overallScore: {
    title: string;
    percentage: number;
    rating: {
      level: number;
      text: WinnabilityRatingText;
    };
  };
  historicalTrend: {
    title: string;
    data: TrendPoint[];
  };
  position: {
    title: string;
    bars: PositionBar[];
  };
  increasingFactors: {
    title: string;
    data: WinnabilityFactor[];
  };
  decreasingFactors: {
    title: string;
    data: WinnabilityFactor[];
  };
};

type AiRecommendation = {
  id: string;
  title: string;
  description: string;
};

export type WinnabilityPageData = {
  winnability: WinnabilityData;
  aiPoweredRecommendations: AiRecommendation[];
};
