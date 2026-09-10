import React, { useState } from "react";
import { Preview } from "../Preview";
import { ComponentSectionNumber } from "../ComponentSectionNumber";
import { Tabs, Breadcrumb, Pagination, NavigationMenu, AppSidebar, Stepper, type SidebarItem, type StepState } from "../../../../packages/core/src/components/Navigation";
import { Icon } from "../../../../packages/core/src/components/Primitives";

const stateEyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--typography-font-family-sans)",
  fontSize: "var(--typography-eyebrow-size)",
  lineHeight: "var(--typography-eyebrow-line-height)",
  fontWeight: "var(--typography-eyebrow-weight)",
  letterSpacing: "var(--typography-eyebrow-letter-spacing)",
  color: "var(--theme-neutral-text-subtle)",
};

const sectionSubtitleStyle: React.CSSProperties = {
  fontFamily: "var(--typography-font-family-sans)",
  fontSize: "var(--typography-body-md-size)",
  lineHeight: "var(--typography-body-md-line-height)",
  color: "var(--theme-neutral-text-subtle)",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--typography-font-family-sans)",
  fontSize: "var(--typography-heading-h4-size)",
  lineHeight: "var(--typography-heading-h4-line-height)",
  fontWeight: "var(--typography-heading-h4-weight)",
  color: "var(--theme-neutral-text-primary-default)",
};

type SidebarRailState = "DEFAULT" | "HOVER" | "SELECTED" | "FOCUS" | "DISABLED";

function railSidebarItems(state: SidebarRailState): SidebarItem[] {
  const items: SidebarItem[] = [
    { label: "Dashboard", icon: <Icon name="fa-solid fa-grip" size="lg" /> },
    { label: "Investment Portfolio", icon: <Icon name="fa-solid fa-wallet" size="lg" /> },
    { label: "Transactions", icon: <Icon name="fa-solid fa-right-left" size="lg" /> },
    { label: "My Profile", icon: <Icon name="fa-solid fa-user" size="lg" /> },
    { label: "Document Center", icon: <Icon name="fa-solid fa-file-lines" size="lg" /> },
  ];

  if (state === "SELECTED") {
    items[0] = { ...items[0], current: true };
  }

  if (state === "DISABLED") {
    items[3] = { ...items[3], disabled: true };
  }

  return items;
}

function StepperStatePreview({
  state,
  eyebrow,
  title,
  description,
  status,
  stepNumber = 2,
}: {
  state: StepState;
  eyebrow: string;
  title: string;
  description: string;
  status?: string;
  stepNumber?: number;
}) {
  const marker = state === "completed" ? "✓" : state === "warning" || state === "error" ? "!" : stepNumber;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)", minWidth: 180 }}>
      <span style={stateEyebrowStyle}>{eyebrow}</span>
      <ol className="cds-stepper cds-stepper--vertical" aria-label={`Stepper ${eyebrow}`} style={{ width: "auto", minWidth: 0 }}>
        <li className={`cds-step cds-step--${state} cds-step--vertical`} style={{ paddingBottom: 0 }}>
          <span className="cds-step-marker" aria-hidden="true">{marker}</span>
          <span className="cds-step-label">
            <span className="cds-step-title">{title}</span>
            <span className="cds-step-desc">{description}</span>
            {(state === "in-progress" || state === "warning" || state === "error") && status && (
              <span className="cds-step-status">
                <span className="cds-step-status-dot" aria-hidden="true" />
                {status}
              </span>
            )}
          </span>
        </li>
      </ol>
    </div>
  );
}

function StepperStatesDemo() {
  return (
    <div className="site-panel site-panel--flush">
      <div
        className="preview-surface"
        data-theme="core"
        data-mode="light"
        style={{
          background: "var(--theme-colors-neutral-50)",
          flexDirection: "column",
          alignItems: "stretch",
          padding: "var(--core-space-5, 20px)",
          gap: "var(--core-space-4, 16px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: "var(--core-space-4, 16px)",
            overflowX: "auto",
          }}
        >
          <StepperStatePreview
            eyebrow="DEFAULT"
            state="default"
            title="Fee Details"
            description="Review applicable fees and tax withholding."
            stepNumber={3}
          />
          <StepperStatePreview
            eyebrow="IN PROGRESS"
            state="in-progress"
            title="Withdrawal Allocation"
            description="Choose which sources to withdraw from."
            status="In progress"
            stepNumber={2}
          />
          <StepperStatePreview
            eyebrow="COMPLETED"
            state="completed"
            title="Withdrawal Details"
            description="Specify the withdrawal type and amount."
          />
          <StepperStatePreview
            eyebrow="WARNING"
            state="warning"
            title="Fee Details"
            description="Review applicable fees and tax withholding."
            status="Review required"
            stepNumber={3}
          />
          <StepperStatePreview
            eyebrow="ERROR"
            state="error"
            title="Upload Documents"
            description="Attach any required supporting forms."
            status="Action required"
            stepNumber={4}
          />
        </div>
      </div>
    </div>
  );
}

function SidebarRailStatesDemo() {
  const states = [
    { label: "DEFAULT", className: "sidebar-state-default" },
    { label: "HOVER", className: "sidebar-state-hover" },
    { label: "SELECTED", className: "sidebar-state-selected" },
    { label: "FOCUS", className: "sidebar-state-focus" },
    { label: "DISABLED", className: "sidebar-state-disabled" },
  ] as const;

  return (
    <div className="site-panel site-panel--flush">
      <div
        className="preview-surface"
        data-theme="core"
        data-mode="light"
        style={{
          background: "var(--theme-colors-neutral-50)",
          flexDirection: "column",
          alignItems: "stretch",
          padding: "var(--core-space-5, 20px)",
          gap: "var(--core-space-4, 16px)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--typography-font-family-sans)",
            fontSize: "var(--typography-label-size)",
            lineHeight: "var(--typography-label-line-height)",
            fontWeight: "var(--typography-label-weight)",
            color: "var(--theme-neutral-text-primary-default)",
          }}
        >
          Sidebar · <code style={{ fontWeight: 400, color: "var(--theme-neutral-text-subtle)" }}>variant=&quot;rail&quot;</code>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: "var(--core-space-4, 16px)",
            overflowX: "auto",
          }}
        >
          {states.map(({ label, className }) => (
            <div
              key={label}
              className={className}
              style={{ display: "flex", flexDirection: "column", gap: "var(--core-space-3, 12px)", minWidth: 96 }}
            >
              <span style={stateEyebrowStyle}>{label}</span>
              <AppSidebar
                variant="rail"
                aria-label={`Sidebar ${label}`}
                items={railSidebarItems(label)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavigationPage({ embedded = false }: { embedded?: boolean }) {
  const [page, setPage] = useState(3);
  return (
    <div>
      {!embedded && (
        <>
          <h1 className="site-h1">Tabs, Breadcrumb &amp; Pagination</h1>
          <p className="site-lede">Wayfinding components — where you are, how you got here, how to move through a list.</p>
        </>
      )}

      <div id="navigation-menu" className="docs-section">
        <ComponentSectionNumber anchorId="navigation-menu" />
        <h2 className="site-section-title">Navigation menu (top nav)</h2>
      </div>
      <p className="site-section-sub">The current item is underlined, not just recolored, so it survives color-blindness and grayscale print.</p>
      <div className="site-panel site-panel--flush">
        <div className="preview-surface" data-theme="core" data-mode="light" style={{ background: "var(--core-color-bg-page)" }}>
          <NavigationMenu items={[{ label: "Dashboard", current: true }, { label: "Accounts" }, { label: "Documents" }, { label: "Support" }]} />
        </div>
      </div>

      <div id="sidebar" className="docs-section">
        <ComponentSectionNumber anchorId="sidebar" />
        <h2
          className="site-section-title"
          style={{
            fontFamily: "var(--typography-font-family-sans)",
            fontSize: "var(--typography-heading-h4-size)",
            lineHeight: "var(--typography-heading-h4-line-height)",
            fontWeight: "var(--typography-heading-h4-weight)",
            color: "var(--theme-neutral-text-primary-default)",
          }}
        >
          Sidebar
        </h2>
      </div>
      <p className="site-section-sub" style={sectionSubtitleStyle}>
        Compact icon-over-label rail — full navigation list shown across default, hover, selected, focus, and disabled states.
      </p>
      <SidebarRailStatesDemo />

      <div id="tabs" className="docs-section">
        <ComponentSectionNumber anchorId="tabs" />
        <h2 className="site-section-title">Tabs</h2>
      </div>
      <p className="site-section-sub">Active tab has an underline indicator; the whole strip is an ARIA <code>tablist</code>.</p>
      <div className="site-panel site-panel--flush">
        <div className="preview-surface" data-theme="core" data-mode="light" style={{ background: "var(--core-color-bg-page)", flexDirection: "column", alignItems: "stretch" }}>
          <Tabs
            items={[
              { id: "overview", label: "Overview", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)" }}>Account overview content.</p> },
              { id: "transactions", label: "Transactions", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)" }}>Transaction history content.</p> },
              { id: "documents", label: "Documents", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)" }}>Statements & tax forms content.</p> },
            ]}
          />
        </div>
      </div>

      <p className="site-section-sub">Vertical orientation — for a settings/profile-style side nav (e.g. Personal / Bank / Employment details).</p>
      <div className="site-panel site-panel--flush">
        <div className="preview-surface" data-theme="core" data-mode="light" style={{ background: "var(--core-color-bg-page)" }}>
          <Tabs
            orientation="vertical"
            items={[
              { id: "personal", label: "Personal Details", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)", margin: 0 }}>Personal details content.</p> },
              { id: "bank", label: "Bank Details", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)", margin: 0 }}>Bank details content.</p> },
              { id: "employment", label: "Employment Information", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)", margin: 0 }}>Employment info content.</p> },
              { id: "beneficiary", label: "Beneficiary Details", content: <p style={{ fontSize: 14, color: "var(--core-color-text-secondary)", margin: 0 }}>Beneficiary details content.</p> },
            ]}
          />
        </div>
      </div>

      <div id="breadcrumb" className="docs-section">
        <ComponentSectionNumber anchorId="breadcrumb" />
        <h2 className="site-section-title">Breadcrumb</h2>
      </div>
      <p className="site-section-sub">The current page is plain text, not a link, and carries <code>aria-current="page"</code>.</p>
      <div className="site-panel site-panel--flush">
        <Preview>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Accounts", href: "#" }, { label: "Transactions" }]} />
        </Preview>
      </div>
      <p className="site-section-sub">Separator styles: slash (default), line, dot, none.</p>
      <div className="site-panel site-panel--flush">
        <div className="preview-surface" data-theme="core" data-mode="light" style={{ background: "var(--core-color-bg-page)", flexDirection: "column", alignItems: "stretch", gap: 10 }}>
          {(["slash", "line", "dot", "none"] as const).map((sep) => (
            <Breadcrumb key={sep} separator={sep} items={[{ label: "Home", href: "#" }, { label: "Accounts", href: "#" }, { label: "Transactions" }]} />
          ))}
        </div>
      </div>

      <div id="stepper" className="docs-section">
        <ComponentSectionNumber anchorId="stepper" />
        <h2 className="site-section-title" style={sectionTitleStyle}>Stepper</h2>
      </div>
      <p className="site-section-sub" style={sectionSubtitleStyle}>
        Step states — default, in progress, completed, warning, and error — with 6px rounded square markers.
      </p>
      <StepperStatesDemo />

      <p className="site-section-sub" style={sectionSubtitleStyle}>
        Horizontal flow — drives multi-step forms with connected steps.
      </p>
      <div className="site-panel site-panel--flush">
        <div
          className="preview-surface"
          data-theme="core"
          data-mode="light"
          style={{ background: "var(--theme-colors-neutral-50)", padding: "var(--core-space-5, 20px)" }}
        >
          <Stepper
            currentIndex={1}
            steps={[
              { label: "Personal info" },
              { label: "Investment elections" },
              { label: "Beneficiaries" },
              { label: "Review & submit" },
            ]}
          />
        </div>
      </div>

      <p className="site-section-sub" style={sectionSubtitleStyle}>
        Vertical orientation — for a multi-step request flow&apos;s left-side nav (e.g. a withdrawal request: Details → Allocation → Fees → Documents → Summary).
      </p>
      <div className="site-panel site-panel--flush">
        <div
          className="preview-surface"
          data-theme="core"
          data-mode="light"
          style={{ background: "var(--theme-colors-neutral-50)", padding: "var(--core-space-5, 20px)" }}
        >
          <Stepper
            orientation="vertical"
            currentIndex={1}
            steps={[
              { label: "Withdrawal Details", description: "Specify the withdrawal type and amount." },
              { label: "Withdrawal Allocation", description: "Choose which sources to withdraw from.", status: "In progress" },
              { label: "Fee Details", description: "Review applicable fees and tax withholding." },
              { label: "Upload Documents", description: "Attach any required supporting forms." },
              { label: "Withdrawal Request Summary", description: "Review the request before submitting." },
            ]}
          />
        </div>
      </div>

      <div id="pagination" className="docs-section">
        <ComponentSectionNumber anchorId="pagination" />
        <h2 className="site-section-title">Pagination</h2>
      </div>
      <p className="site-section-sub">Active page number, disabled edges, 40×40px minimum touch targets.</p>
      <div className="site-panel site-panel--flush">
        <Preview>
          <Pagination page={page} pageCount={8} onChange={setPage} />
        </Preview>
      </div>

      <style>{`
        .sidebar-state-hover .cds-app-sidebar--rail .cds-app-sidebar-link:nth-child(3):not([aria-current="page"]) {
          color: var(--theme-neutral-text-primary-default) !important;
          background: transparent !important;
          box-shadow: inset 3px 0 0 0 var(--theme-neutral-border-strong) !important;
        }
        .sidebar-state-focus .cds-app-sidebar--rail .cds-app-sidebar-link:nth-child(3):not([aria-current="page"]) {
          outline: var(--core-focusRing-width, 2px) solid var(--theme-primitive-color-primary-400) !important;
          outline-offset: -2px;
        }
      `}</style>
    </div>
  );
}
