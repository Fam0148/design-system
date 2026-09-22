import React, { useState } from "react";

export type MatrixMode = "light" | "dark";

export interface MatrixSizeOption {
  id: string;
  label: string;
}

export interface MatrixStateOption {
  key: string;
  label: string;
}

export interface MatrixColumn {
  id: string;
  label: string;
}

export interface ComponentStateMatrixProps {
  /** Columns across the top — usually the component's variants. */
  columns: MatrixColumn[];
  /** Rows — usually interaction states (Default, Hover, Active, Focused, Disabled). */
  states: MatrixStateOption[];
  /** Optional size toggle in the toolbar. Omit for components with no size prop. */
  sizes?: MatrixSizeOption[];
  defaultSize?: string;
  /** Renders the actual component for one cell. */
  renderCell: (ctx: { columnId: string; stateKey: string; size?: string; mode: MatrixMode }) => React.ReactNode;
  columnMinWidth?: number;
  /** "columns" (default): each variant is a column, states stack vertically
   *  inside it — matches the Buttons matrix, right for controls with real
   *  visual weight (a labeled button). "rows": each variant is a single
   *  horizontal row with all states laid out side by side — better for
   *  small, icon-only controls where a tall vertical stack of tiny squares
   *  wastes space and makes states harder to compare at a glance. */
  orientation?: "columns" | "rows";
}

/**
 * Shared chrome (size toggle, light/dark canvas toggle, variant x state grid)
 * for every "Buttons page"-style state matrix across the component library.
 * Mirrors ButtonMatrix.tsx's toolbar/canvas so every component page reads as
 * one consistent system — only `renderCell` differs per component.
 */
export function ComponentStateMatrix({
  columns,
  states,
  sizes,
  defaultSize,
  renderCell,
  columnMinWidth = 180,
  orientation = "columns",
}: ComponentStateMatrixProps) {
  const [size, setSize] = useState<string | undefined>(defaultSize ?? sizes?.[0]?.id);
  const [mode, setMode] = useState<MatrixMode>("light");

  return (
    <div style={{ marginTop: 12, marginBottom: 32 }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          background: "var(--site-bg-elevated)",
          border: "1px solid var(--site-border)",
          borderRadius: 14,
          padding: "14px 20px",
          marginBottom: 18,
          boxShadow: "var(--core-elevation-2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          {sizes && sizes.length > 0 && (
            <>
              <span
                style={{
                  fontSize: "var(--typography-font-size-xs)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--theme-neutral-text-subtle)",
                }}
              >
                Size:
              </span>
              <div
                style={{
                  display: "inline-flex",
                  background: "var(--site-bg)",
                  borderRadius: 8,
                  padding: 3,
                  border: "1px solid var(--site-border)",
                }}
              >
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSize(s.id)}
                    style={{
                      border: "none",
                      background: size === s.id ? "var(--theme-brand-background-primary-strong)" : "transparent",
                      color: size === s.id ? "var(--brand-text-primary-oncolor)" : "var(--site-text)",
                      borderRadius: "var(--core-radius-sm)",
                      padding: "4px 12px",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 120ms ease",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Light / dark canvas toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: "var(--typography-font-size-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: mode === "light" ? "var(--site-text)" : "var(--theme-neutral-text-subtle)",
              transition: "color 0.3s ease",
            }}
          >
            Light
          </span>
          <div
            role="switch"
            aria-checked={mode === "dark"}
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
              background: mode === "dark" ? "var(--theme-brand-background-primary-strong)" : "var(--theme-neutral-border-strong)",
              borderRadius: 12,
              position: "relative",
              cursor: "pointer",
              transition: "background 0.3s ease",
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
                left: mode === "dark" ? 22 : 2,
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
              color: mode === "dark" ? "var(--site-text)" : "var(--theme-neutral-text-subtle)",
              transition: "color 0.3s ease",
            }}
          >
            Dark
          </span>
        </div>
      </div>

      {/* Canvas — data-mode drives every --theme-* token to its dark/light value */}
      <div
        data-theme="core"
        data-mode={mode}
        style={{
          background: "var(--site-bg-elevated)",
          color: "var(--site-text)",
          borderRadius: 16,
          padding: "36px 32px",
          boxShadow: "var(--core-elevation-3)",
          border: "1px solid var(--site-border)",
          overflowX: "auto",
          transition: "background 150ms ease",
        }}
      >
        {orientation === "rows" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {columns.map((col) => (
              <div key={col.id}>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", color: "inherit", marginBottom: 16 }}>
                  {col.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
                  {states.map((st) => (
                    <div key={st.key} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
                      <span
                        style={{
                          color: "var(--site-text-dim)",
                          fontSize: "var(--typography-font-size-xs)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {st.label}
                      </span>
                      <div>{renderCell({ columnId: col.id, stateKey: st.key, size, mode })}</div>
                    </div>
                  ))}
                </div>
                {col.id !== columns[columns.length - 1].id && (
                  <div style={{ borderBottom: "1px solid var(--site-border)", marginTop: 32 }} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns.length}, minmax(${columnMinWidth}px, 1fr))`,
              columnGap: 36,
              rowGap: 0,
            }}
          >
            {columns.map((col) => (
              <div key={col.id} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ borderBottom: "1px solid var(--site-border)", paddingBottom: 14, marginBottom: 24 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", color: "inherit" }}>{col.label}</div>
                </div>

                {states.map((st) => (
                  <div key={st.key} style={{ marginBottom: 26 }}>
                    <div style={{ marginBottom: 8 }}>
                      <span
                        style={{
                          color: "var(--site-text-dim)",
                          fontSize: "var(--typography-font-size-xs)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {st.label}
                      </span>
                    </div>
                    <div>{renderCell({ columnId: col.id, stateKey: st.key, size, mode })}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const DEFAULT_MATRIX_STATES: MatrixStateOption[] = [
  { key: "default", label: "Default" },
  { key: "hover", label: "Hover" },
  { key: "active", label: "Active" },
  { key: "focused", label: "Focused" },
  { key: "disabled", label: "Disabled" },
];
