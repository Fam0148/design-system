import React, { useState } from "react";
import { Preview, CodeBlock } from "../Preview";
import { DocsSection, DocsSectionList, StateLabel } from "../DocsSection";
import { Anatomy, AnatomyLegend } from "../Anatomy";
import { Card, Badge, BadgeTone, BadgeSize } from "../../../../packages/core/src/components/Misc";
import { Table, Avatar, AvatarGroup, Progress } from "../../../../packages/core/src/components/DataDisplay";
import { AVATAR_JORDAN, AVATAR_SAM, AVATAR_SAMPLES } from "../avatarSamples";
import { Icon } from "../../../../packages/core/src/components/Primitives";
const rows = [
  { id: 1, date: "Sep 01, 2026", type: "Contribution", amount: "$412.50", status: "success" as const },
  { id: 2, date: "Aug 15, 2026", type: "Dividend", amount: "$18.20", status: "success" as const },
  { id: 3, date: "Aug 01, 2026", type: "Contribution", amount: "$412.50", status: "warning" as const },
  { id: 4, date: "Jul 15, 2026", type: "Fee", amount: "-$4.00", status: "danger" as const },
];

/**
 * Reuses the exact same flat row + icon-badge pattern as the Sidebar's
 * "panel" variant (cds-sidenav-item / cds-sidenav-icon) rather than a new,
 * one-off set of classes — a quick link and a settings sub-nav row are the
 * same shape (icon badge + label, a tinted pill when selected), so they
 * should share one implementation instead of two independently-styled
 * near-duplicates.
 */
function CardQuickLink({ icon, label, selected, disabled }: { icon: string; label: string; selected?: boolean; disabled?: boolean }) {
  return (
    <button
      type="button"
      className="cds-sidenav-item"
      data-active={selected || undefined}
      disabled={disabled}
      aria-current={selected ? "true" : undefined}
    >
      <span className="cds-sidenav-icon" aria-hidden="true">
        <Icon name={icon} size="md" />
      </span>
      <span className="cds-sidenav-label">{label}</span>
    </button>
  );
}

const sectionLabelStyle: React.CSSProperties = {
  fontSize: "var(--typography-label-size)",
  lineHeight: "var(--typography-label-line-height)",
  fontWeight: "var(--typography-label-weight)",
  letterSpacing: "var(--typography-label-letter-spacing)",
  color: "var(--theme-neutral-text-subtle)",
  marginBottom: "var(--core-space-3, 12px)",
};

const badgeMatrixHeaderStyle: React.CSSProperties = {
  fontSize: "var(--typography-eyebrow-size)",
  lineHeight: "var(--typography-eyebrow-line-height)",
  fontWeight: "var(--typography-eyebrow-weight)",
  letterSpacing: "var(--typography-eyebrow-letter-spacing)",
  color: "var(--theme-neutral-text-subtle)",
  textTransform: "uppercase",
};

function BadgeMatrixDemo() {
  const [size, setSize] = useState<BadgeSize>("md");
  const tones: BadgeTone[] = ["primary", "neutral", "success", "warning", "danger", "info"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-4, 16px)" }}>
      <div style={{ display: "inline-flex", gap: "var(--core-space-1, 4px)", padding: 3, borderRadius: "var(--core-radius-sm)", border: "1px solid var(--theme-neutral-border-primary-default)", background: "var(--theme-colors-neutral-50)" }}>
        {(["md", "sm"] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSize(s)}
            style={{
              border: "none",
              background: size === s ? "var(--theme-brand-background-primary-strong)" : "transparent",
              color: size === s ? "var(--theme-brand-text-primary-oncolor)" : "var(--theme-neutral-text-primary-default)",
              borderRadius: "var(--core-radius-sm)",
              padding: "5px 14px",
              fontFamily: "var(--typography-font-family-sans)",
              fontSize: "var(--typography-body-xs-size)",
              lineHeight: "var(--typography-body-xs-line-height)",
              fontWeight: "var(--typography-font-weight-semibold)",
              cursor: "pointer",
              transition: "background-color 120ms ease, color 120ms ease",
            }}
          >
            {s === "md" ? "Medium" : "Small"}
          </button>
        ))}
      </div>

      <div className="site-panel site-panel--flush site-panel--demo">
        <Preview showModeToggle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--core-space-6, 24px)" }}>
            {tones.map((t) => (
              <div key={t} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--core-space-2, 8px)" }}>
                <span style={badgeMatrixHeaderStyle}>{t}</span>
                <Badge tone={t} size={size} variant="soft">{t}</Badge>
              </div>
            ))}
          </div>
        </Preview>
      </div>
    </div>
  );
}

const sampleAvatars = [...AVATAR_SAMPLES];

function AvatarSizeDemo() {
  return (
    <div className="site-panel site-panel--flush site-panel--demo">
      <Preview showModeToggle>
        <div style={{ overflowX: "auto", width: "100%" }}>
          <table className="cds-table" data-density="comfortable">
            <thead>
              <tr>
                <th scope="col" style={{ width: 140, fontSize: "var(--typography-font-size-xs)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--core-color-text-secondary)" }}>Component</th>
                <th scope="col" style={{ fontSize: "var(--typography-font-size-xs)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--core-color-text-secondary)" }}>Small (sm) — 24px</th>
                <th scope="col" style={{ fontSize: "var(--typography-font-size-xs)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--core-color-text-secondary)" }}>Medium (md) — 36px</th>
                <th scope="col" style={{ fontSize: "var(--typography-font-size-xs)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--core-color-text-secondary)" }}>Large (lg) — 48px</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-text-primary)" }}>Single Avatar</td>
                <td>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Avatar name={AVATAR_JORDAN.name} src={AVATAR_JORDAN.src} size="sm" />
                    <Avatar name={AVATAR_SAM.name} src={AVATAR_SAM.src} size="sm" />
                  </div>
                </td>
                <td>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Avatar name={AVATAR_JORDAN.name} src={AVATAR_JORDAN.src} size="md" />
                    <Avatar name={AVATAR_SAM.name} src={AVATAR_SAM.src} size="md" />
                  </div>
                </td>
                <td>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Avatar name={AVATAR_JORDAN.name} src={AVATAR_JORDAN.src} size="lg" />
                    <Avatar name={AVATAR_SAM.name} src={AVATAR_SAM.src} size="lg" />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-text-primary)" }}>Avatar Group</td>
                <td>
                  <AvatarGroup avatars={sampleAvatars} size="sm" max={3} />
                </td>
                <td>
                  <AvatarGroup avatars={sampleAvatars} size="md" max={3} />
                </td>
                <td>
                  <AvatarGroup avatars={sampleAvatars} size="lg" max={3} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Preview>
    </div>
  );
}

export default function DataDisplay({ embedded = false }: { embedded?: boolean }) {
  const sections = [
    {
      id: "04",
      anchorId: "avatar",
      title: "Avatar & Groups",
      content: (
        <AvatarSizeDemo />
      ),
    },
    {
      id: "02",
      anchorId: "badge",
      title: "Badge",
      content: <BadgeMatrixDemo />,
    },
    {
      id: "03",
      anchorId: "data-table",
      title: "Table & Data Table",
      content: (
        <div id="table">
          <div style={{ ...sectionLabelStyle, marginBottom: "var(--core-space-2, 8px)" }}>
            Basic Data Table
          </div>
          <div className="site-panel site-panel--flush site-panel--demo">
            <Preview showModeToggle>
              <Table
                columns={[
                  { key: "date", header: "Date" },
                  { key: "type", header: "Type" },
                  { key: "amount", header: "Amount" },
                  {
                    key: "status",
                    header: "Status",
                    render: (r) => (
                      <Badge tone={r.status}>
                        {r.status === "success" ? "Posted" : r.status === "warning" ? "Pending" : "Failed"}
                      </Badge>
                    ),
                  },
                ]}
                rows={rows}
              />
            </Preview>
          </div>
        </div>
      ),
    },
    {
      id: "05",
      anchorId: "progress",
      title: "Progress",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="site-panel site-panel--flush site-panel--demo">
            <Preview showModeToggle>
              <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 20 }}>
                <Progress value={68} label="Retirement readiness — 68%" />
                <Progress indeterminate label="Submitting your request…" />
              </div>
            </Preview>

          </div>
        </div>
      ),
    },
    {
      id: "01",
      anchorId: "quick-links",
      title: "Quick links",
      content: (
        <div className="site-panel site-panel--flush site-panel--demo">
          <Preview showModeToggle>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-8, 32px)", width: "100%", padding: "var(--core-space-2, 8px) 0" }}>
              <div>
                <div style={sectionLabelStyle}>Variants</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-2, 8px)", maxWidth: 280 }}>
                  <CardQuickLink icon="fa-solid fa-heart" label="Personal Details" selected />
                  <CardQuickLink icon="fa-solid fa-building-columns" label="Bank Details" />
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--theme-neutral-border-primary-default)", paddingTop: "var(--core-space-6, 24px)" }}>
                <div style={sectionLabelStyle}>Interactive states</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(160px, 1fr))", gap: "var(--core-space-4, 16px)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)" }}>
                    <StateLabel>DEFAULT</StateLabel>
                    <CardQuickLink icon="fa-solid fa-chart-line" label="Links" />
                  </div>
                  <div className="force-hover" style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)" }}>
                    <StateLabel>HOVER</StateLabel>
                    <CardQuickLink icon="fa-solid fa-chart-line" label="Links" />
                  </div>
                  <div className="force-focus" style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)" }}>
                    <StateLabel>FOCUS</StateLabel>
                    <CardQuickLink icon="fa-solid fa-chart-line" label="Links" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)" }}>
                    <StateLabel>SELECTED</StateLabel>
                    <CardQuickLink icon="fa-solid fa-chart-line" label="Links" selected />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)" }}>
                    <StateLabel>DISABLED</StateLabel>
                    <CardQuickLink icon="fa-solid fa-chart-line" label="Links" disabled />
                  </div>
                </div>
              </div>
            </div>
          </Preview>
        </div>
      ),
    },
  ];

  const sectionList = (
    <DocsSectionList flat={embedded}>
      {sections.map((s) => (
        <DocsSection key={s.anchorId} anchorId={s.anchorId} title={s.title}>
          {s.content}
        </DocsSection>
      ))}
    </DocsSectionList>
  );

  const cardStateStyles = (
    <style>{`
      .force-hover .cds-sidenav-item:not(:disabled) {
        background: var(--core-sidebar-item-hoverBg) !important;
        color: var(--theme-neutral-text-primary-default) !important;
      }
      .force-focus .cds-sidenav-item:not(:disabled) {
        outline: var(--core-focusRing-width, 2px) solid var(--theme-primitive-color-primary-400) !important;
        outline-offset: -2px !important;
      }
    `}</style>
  );

  if (embedded) {
    return (
      <>
        {cardStateStyles}
        {sectionList}
      </>
    );
  }

  return (
    <div style={{ maxWidth: 1024, margin: "0 auto", padding: "20px" }}>
      {cardStateStyles}
      <div style={{ textAlign: "center", marginBottom: 60, marginTop: 40 }}>
        <h1 style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.06em", margin: "0 0 16px 0", color: "var(--core-color-text-primary)", lineHeight: 1.1 }}>Data Display</h1>
        <p style={{ maxWidth: 580, margin: "0 auto", color: "var(--core-color-text-tertiary)", fontSize: "var(--core-font-size-lg, 20px)", lineHeight: 1.6, fontWeight: 400 }}>
          Quick links, Badges, Tables, Avatars, and Progress meters designed for metrics and data summaries.
        </p>
      </div>
      {sectionList}
    </div>
  );
}
