import React, { useState } from "react";
import { Switch } from "../../../packages/core/src/components/Misc";

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
          <Switch
            checked={resolvedMode === "dark"}
            onChange={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
            aria-label="Toggle preview canvas theme"
          />
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
