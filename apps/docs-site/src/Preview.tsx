import React, { useState } from "react";

export function Preview({
  children,
  dark = false,
  showModeToggle = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  /** Renders a Light/Dark switch above the canvas and drives data-mode locally,
   *  instead of the caller having to manage/pass a `dark` boolean itself. */
  showModeToggle?: boolean;
}) {
  const [mode, setMode] = useState<"light" | "dark">(dark ? "dark" : "light");
  const resolvedMode = showModeToggle ? mode : dark ? "dark" : "light";

  return (
    <div>
      {showModeToggle && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontSize: "var(--typography-font-size-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: resolvedMode === "light" ? "var(--site-text)" : "var(--theme-neutral-text-subtle)",
            }}
          >
            Light
          </span>
          <div
            role="switch"
            aria-checked={resolvedMode === "dark"}
            aria-label="Toggle preview canvas theme"
            tabIndex={0}
            onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMode((prev) => (prev === "light" ? "dark" : "light"));
              }
            }}
            style={{
              width: 44,
              height: 24,
              background: resolvedMode === "dark" ? "var(--theme-brand-background-primary-strong)" : "var(--theme-neutral-border-strong)",
              borderRadius: 12,
              position: "relative",
              cursor: "pointer",
              transition: "background 0.3s ease",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                background: "var(--theme-colors-neutral-0)",
                borderRadius: "50%",
                position: "absolute",
                top: 2,
                left: resolvedMode === "dark" ? 22 : 2,
                transition: "left 0.3s ease",
                boxShadow: "var(--core-elevation-1)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "var(--typography-font-size-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: resolvedMode === "dark" ? "var(--site-text)" : "var(--theme-neutral-text-subtle)",
            }}
          >
            Dark
          </span>
        </div>
      )}
      <div
        data-theme="core"
        data-mode={resolvedMode}
        className="preview-surface"
        style={{
          background: "var(--core-color-bg-page)",
          color: "var(--core-color-text-primary)",
          fontFamily: "var(--typography-font-family-sans)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return <pre className="code-block">{children}</pre>;
}
