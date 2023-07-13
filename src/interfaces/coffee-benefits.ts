import { ReactNode } from 'react';

export const BENEFIT_ITEM_COLORS = {
  yellow: "yellow-400",
  yellowDark: "yellow-700",
  gray: "gray-700",
  purple: "purple-400",
} as const;

export interface BenefitItem {
  id: string;
  icon: ReactNode;
  color: keyof typeof BENEFIT_ITEM_COLORS;
  text: string;
}