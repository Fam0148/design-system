import React from "react";
import { Preview, CodeBlock } from "../Preview";
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

export default function Feedback() {
  const sections = [
    {
      id: "01",
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
            <Alert tone="success" title="Enrollment complete">
              You are contributing 6% starting next pay cycle.
            </Alert>
            <Alert tone="warning" title="Beneficiary missing">
              Add a beneficiary to finish setting up your account.
            </Alert>
            <Alert tone="danger" title="Update failed">
              We couldn't save your contribution change. Try again.
            </Alert>
            <Alert tone="info" title="Scheduled maintenance">
              The portal will be unavailable Sunday 2–4am ET.
            </Alert>
          </div>
        </div>
      ),
    },
    {
      id: "02",
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
    {
      id: "05",
      title: "Accessibility & Code",
      description: "Assertive/polite live regions, screen reader announcements, and React integration examples.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <ul style={{ color: "var(--site-text-dim)", lineHeight: 1.8, fontSize: 14, margin: 0, paddingLeft: 20 }}>
            <li>
              Danger alerts use <code>role="alert"</code> (assertive live region); others use <code>role="status"</code> (polite).
            </li>
            <li>Color is never the only signal — each tone pairs with distinct copy and icons.</li>
            <li>
              Spinner exposes <code>role="status"</code> with an <code>aria-label</code>; its animation duration extends under <code>prefers-reduced-motion</code>.
            </li>
          </ul>

          <CodeBlock>{`<Alert tone="danger" title="Update failed">We couldn't save your change. Try again.</Alert>
<Toast tone="success" title="Changes saved">Your contribution rate was updated.</Toast>
<Spinner label="Saving" />`}</CodeBlock>
        </div>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 1024, margin: "0 auto", padding: "20px" }}>
      {/* Centered Hero Header — matching Logo and Typography sections */}
      <div style={{ textAlign: "center", marginBottom: 60, marginTop: 40 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--core-color-brand-600)",
            marginBottom: 12,
          }}
        >
          Components
        </div>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.06em",
            margin: "0 0 16px 0",
            color: "var(--core-color-text-primary)",
            lineHeight: 1.1,
          }}
        >
          Feedback
        </h1>
        <p
          style={{
            maxWidth: 580,
            margin: "0 auto",
            color: "var(--core-color-text-tertiary)",
            fontSize: 18,
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Alerts, transient toasts, empty states, and activity spinners for user reassurance and operational statuses.
        </p>
      </div>

      {/* Numbered Sections List — matching Logo and Typography sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        {sections.map((s) => (
          <div key={s.id} style={{ display: "flex", flexDirection: "column", gap: 32, position: "relative" }}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: 32,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--core-color-text-tertiary)",
                    marginBottom: 12,
                  }}
                >
                  {s.id}
                </div>
                <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>
                  {s.title}
                </h2>
              </div>
              <div
                style={{
                  maxWidth: 420,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "flex-end",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--core-color-text-secondary)",
                    textAlign: "right",
                    fontWeight: 400,
                  }}
                >
                  {s.description}
                </p>
              </div>
            </div>
            <div>{s.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
