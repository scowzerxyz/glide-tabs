import type { CSSProperties, ReactNode } from 'react';

export type TabVariant = 'pill' | 'underline';

export interface TabGroupProps {
  value: string;
  onChange: (value: string) => void;
  variant?: TabVariant;
  maxWidth?: number | string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export interface TabProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export interface TabContextValue {
  activeValue: string;
  variant: TabVariant;
  onSelect: (value: string) => void;
  registerTab: (value: string, el: HTMLButtonElement | null) => void;
}
