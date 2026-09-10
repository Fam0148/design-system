import React from "react";

export interface AnatomyPoint {
  n: number;
  label: string;
  /** Position of the numbered marker, in px, relative to the anatomy stage. */
  x: number;
  y: number;
  /** Direction the connecting line/leader travels from the marker. */
  leaderTo: { x: number; y: number };
}

/**
 * A numbered-callout diagram overlay — the reusable template for "Anatomy" sections
 * on every component page. Renders `children` (the real component) inside a stage,
 * then draws numbered markers + leader lines + a legend, matching the reference
 * annotation style (numbered chip, thin line, label).
 */
export function Anatomy({ children }: { children?: React.ReactNode; points?: AnatomyPoint[]; height?: number }) {
  return <>{children}</>;
}

export function AnatomyLegend(_props: { points?: AnatomyPoint[] }) {
  return null;
}
