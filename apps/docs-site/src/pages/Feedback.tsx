import React from "react";
import { Preview } from "../Preview";
import { ComponentSectionNumber } from "../ComponentSectionNumber";
import { Alert } from "../../../../packages/core/src/components/Misc";
import { Toast, Spinner } from "../../../../packages/core/src/components/Overlays";
import { Empty } from "../../../../packages/core/src/components/Primitives";
import { Button } from "../../../../packages/core/src/components/Button";
import { ToastProvider, useToast } from "../../../../packages/core/src/components/ToastManager";

function ToastManagerDemo() {
  const { push } = useToast();
  return (
    <Preview>
      <Button onClick={() => push({ tone: "success", title: "Changes saved", description: "Auto-dismisses in 4s." })}>
        Trigger success toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => push({ tone: "danger", title: "Couldn't connect", description: "Retry in a moment." })}
      >
        Trigger error toast
      </Button>
    </Preview>
  );
}

export default function Feedback({ embedded = false }: { embedded?: boolean }) {
  const [dismissed, setDismissed] = React.useState<Set<string>>(new Set());
  const dismiss = (key: string) => setDismissed((prev) => new Set([...prev, key]));
  const resetAlerts = () => setDismissed(new Set());
  const sections = [
    {
      id: "01",
      anchorId: "alert",
      title: "Alert",
      description:
        "Persistent, page-level status banners bound directly to semantics tokens (Success, Warning, Danger, Info).",
      content: (
        <div className="site-panel site-panel--flush">
          <div
            className="preview-surface"
            data-theme="core"
            data-mode="light"
            style={{
              background: "var(--core-color-bg-page)",
              flexDirection: "column",
              alignItems: "stretch",
              gap: 12,
            }}
          >
            {!dismissed.has("success") && (
              <Alert tone="success" title="Enrollment complete" onDismiss={() => dismiss("success")}>
                You are contributing 6% starting next pay cycle.
              </Alert>
            )}
            {!dismissed.has("warning") && (
              <Alert tone="warning" title="Beneficiary missing" onDismiss={() => dismiss("warning")}>
                Add a beneficiary to finish setting up your account.
              </Alert>
            )}
            {!dismissed.has("danger") && (
              <Alert tone="danger" title="Update failed" onDismiss={() => dismiss("danger")}>
                We couldn't save your contribution change. Try again.
              </Alert>
            )}
            {!dismissed.has("info") && (
              <Alert tone="info" title="Scheduled maintenance" onDismiss={() => dismiss("info")}>
                The portal will be unavailable Sunday 2–4am ET.
              </Alert>
            )}
            {dismissed.size === 4 && (
              <div style={{ textAlign: "center", padding: "12px 0" }}>
                <button
                  type="button"
                  className="cds-btn cds-btn--secondary cds-btn--sm"
                  onClick={resetAlerts}
                >
                  ↺ Reset alerts
                </button>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      id: "02",
      anchorId: "toast",
      title: "Toast & Notifications",
      description: "Transient notifications that confirm action results and stack bottom-right with auto-dismissal.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="site-panel site-panel--flush">
            <div
              className="preview-surface"
              data-theme="core"
              data-mode="light"
              style={{ background: "var(--core-color-bg-page)" }}
            >
              <Toast tone="success" title="Changes saved">
                Your contribution rate was updated.
              </Toast>
              <Toast tone="danger" title="Couldn't connect">
                Check your internet connection and retry.
              </Toast>
            </div>
          </div>

          <div className="site-panel site-panel--flush">
            <ToastProvider>
              <ToastManagerDemo />
            </ToastProvider>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      anchorId: "empty",
      title: "Empty State",
      description: "Fallback illustrations, guidance descriptions, and primary recovery actions for zero-data views.",
      content: (
        <div className="site-panel site-panel--flush">
          <div
            className="preview-surface"
            data-theme="core"
            data-mode="light"
            style={{ background: "var(--core-color-bg-page)" }}
          >
            <Empty
              title="No transactions yet"
              description="Once you make your first contribution, it will show up here."
              action={
                <Button variant="secondary" size="sm">
                  Learn how contributions work
                </Button>
              }
            />
          </div>
        </div>
      ),
    },
    {
      id: "04",
      anchorId: "spinner",
      title: "Loading Spinner",
      description: "Indeterminate progress spinner with accessible ARIA status announcements and reduced-motion support.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <Spinner />
            <span style={{ fontSize: 14, color: "var(--core-color-text-secondary)" }}>Saving your changes…</span>
          </Preview>
        </div>
      ),
    },
  ];

  const sectionList = (
    <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
      {sections.map((s) => (
        <div key={s.anchorId} id={s.anchorId} className="docs-section" style={{ display: "flex", flexDirection: "column", gap: 32, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-12.5%",
                width: "125%",
                height: 1,
                backgroundColor: "var(--site-border)",
              }}
            />
            <div style={{ paddingTop: 32 }}>
              <ComponentSectionNumber anchorId={s.anchorId} />
              <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>
                {s.title}
              </h2>
            </div>
            <div>{s.content}</div>
          </div>
      ))}
    </div>
  );

  if (embedded) return sectionList;

  return (
    <div style={{ maxWidth: 1024, margin: "0 auto", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: 60, marginTop: 40 }}>
        <h1 style={{ fontSize: 72, fontWeight: 800, letterSpacing: "-0.06em", margin: "0 0 16px 0", color: "var(--core-color-text-primary)", lineHeight: 1.1 }}>Feedback</h1>
        <p style={{ maxWidth: 580, margin: "0 auto", color: "var(--core-color-text-tertiary)", fontSize: 18, lineHeight: 1.6, fontWeight: 400 }}>
          Alerts, transient toasts, empty states, and activity spinners for user reassurance and operational statuses.
        </p>
      </div>
      {sectionList}
    </div>
  );
}
