import React from "react";
import { ComponentSectionNumber } from "./ComponentSectionNumber";

export function DocsSectionList({ children }: { children: React.ReactNode }) {
  return <div className="docs-section-list">{children}</div>;
}

export function DocsSection({
  anchorId,
  title,
  children,
  titleStyle,
}: {
  anchorId: string;
  title: React.ReactNode;
  children: React.ReactNode;
  titleStyle?: React.CSSProperties;
}) {
  return (
    <section id={anchorId} className="docs-section">
      <header className="docs-section__header">
        <ComponentSectionNumber anchorId={anchorId} />
        <h2 className="docs-section__title" style={titleStyle}>
          {title}
        </h2>
      </header>
      <div className="docs-section__content">{children}</div>
    </section>
  );
}
