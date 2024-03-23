import { CSSProperties, ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
