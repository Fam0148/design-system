import React, { useState } from "react";
import { Button, ButtonVariant } from "../../../packages/core/src/components/Button";

export type MatrixSize = "sm" | "md" | "lg";
export type VariantCategory = "all" | "brand" | "semantics" | "neutral";

interface StateStyle {
  bg: string;
  text: string;
  border?: string;
  extraStyles?: React.CSSProperties;
}

interface VariantConfig {
  id: ButtonVariant;
  name: string;
  category: "brand" | "semantics" | "neutral";
  stateTokens: Record<"default" | "hover" | "active" | "focused" | "disabled", StateStyle>;
}

/* Every value below is a mode-aware semantic token, so light/dark is resolved
   by CSS. Earlier this map held raw primitives plus hex fallbacks and the
   component patched dark mode in JS — which is why Tertiary's text stayed
   primary-500 (2.3:1) on the dark canvas. */
const FOCUS_RING: React.CSSProperties = {
  outline: "var(--core-focusRing-width) solid var(--theme-primitive-color-primary-400)",
  outlineOffset: "var(--core-focusRing-offset)",
};

const VARIANTS: VariantConfig[] = [
  {
    id: "primary",
    name: "Primary CTA",
    category: "brand",
    stateTokens: {
      default: {
        bg: "var(--brand-background-primary-strong)",
        text: "var(--brand-text-primary-oncolor)",
        border: "var(--brand-border-primary-default)",
      },
      hover: {
        bg: "var(--brand-background-primary-hover)",
        text: "var(--brand-text-primary-oncolor)",
        border: "var(--brand-border-primary-hover)",
      },
      active: {
        bg: "var(--brand-background-primary-active)",
        text: "var(--brand-text-primary-oncolor)",
        border: "var(--brand-background-primary-active)",
        extraStyles: { transform: "translateY(1px)" },
      },
      focused: {
        bg: "var(--brand-background-primary-strong)",
        text: "var(--brand-text-primary-oncolor)",
        border: "var(--brand-border-primary-default)",
        extraStyles: FOCUS_RING,
      },
      disabled: {
        bg: "var(--brand-background-primary-disabled)",
        text: "var(--brand-text-primary-disabled)",
        border: "var(--brand-border-primary-disabled)",
      },
    },
  },
  {
    id: "secondary",
    name: "Secondary CTA",
    category: "brand",
    stateTokens: {
      default: {
        bg: "transparent",
        text: "var(--brand-text-primary-default)",
        border: "var(--brand-border-primary-default)",
      },
      hover: {
        bg: "var(--brand-background-primary-hover)",
        text: "var(--brand-text-primary-oncolor)",
        border: "var(--brand-border-primary-hover)",
      },
      active: {
        bg: "var(--brand-background-primary-active)",
        text: "var(--brand-text-primary-oncolor)",
        border: "var(--brand-background-primary-active)",
        extraStyles: { transform: "translateY(1px)" },
      },
      focused: {
        bg: "transparent",
        text: "var(--brand-text-primary-default)",
        border: "var(--brand-border-primary-default)",
        extraStyles: FOCUS_RING,
      },
      // Outline/ghost styles have no fill to mute, so a same-hue disabled step
      // reads as identical to default — neutral is the only legible signal.
      disabled: {
        bg: "transparent",
        text: "var(--theme-semantics-disabled-text)",
        border: "var(--theme-semantics-disabled-border)",
      },
    },
  },
  {
    id: "tertiary",
    name: "Tertiary CTA",
    category: "brand",
    stateTokens: {
      default: { bg: "transparent", text: "var(--brand-text-primary-default)" },
      hover: { bg: "transparent", text: "var(--brand-text-primary-hover)" },
      active: {
        bg: "transparent",
        text: "var(--brand-text-primary-active)",
        extraStyles: { transform: "translateY(1px)" },
      },
      focused: {
        bg: "transparent",
        text: "var(--brand-text-primary-default)",
        extraStyles: FOCUS_RING,
      },
      disabled: { bg: "transparent", text: "var(--theme-semantics-disabled-text)" },
    },
  },
];

export function ButtonMatrix() {
  const [size, setSize] = useState<MatrixSize>("md");
  const [canvasBg, setCanvasBg] = useState<"light" | "dark">("light");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sizeLabels: Record<MatrixSize, string> = {
    sm: "Small",
    md: "Medium",
    lg: "Large",
  };
  const buttonText = sizeLabels[size];

  const handleCopy = (variantId: string, state: string) => {
    const stateProp = state === "disabled" ? " disabled" : "";
    const sizeProp = size === "md" ? "" : ` size="${size}"`;
    const code = `<Button variant="${variantId}"${sizeProp}${stateProp}>${buttonText}</Button>`;
    navigator.clipboard.writeText(code);
    setCopiedCode(`${variantId} (${state}) copied!`);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  const sizeStyles = {
    sm: {
      padding: "0.375rem 0.625rem",
      fontSize: "var(--core-typography-text12SemiBold-size, 12px)",
      lineHeight: "var(--core-typography-text12SemiBold-lineHeight, 1.5)",
      radius: "0.375rem",
    },
    md: {
      padding: "0.5rem 0.75rem",
      fontSize: "var(--core-typography-text14SemiBold-size, 14px)",
      lineHeight: "var(--core-typography-text14SemiBold-lineHeight, 1.5)",
      radius: "0.375rem",
    },
    lg: {
      padding: "0.625rem 1rem",
      fontSize: "var(--core-typography-text16SemiBold-size, 16px)",
      lineHeight: "var(--core-typography-text16SemiBold-lineHeight, 1.5)",
      radius: "0.375rem",
    },
  }[size];

  const statesList: Array<{ key: "default" | "hover" | "active" | "focused" | "disabled"; label: string }> = [
    { key: "default", label: "Default" },
    { key: "hover", label: "Hover" },
    { key: "active", label: "Active" },
    { key: "focused", label: "Focused" },
    { key: "disabled", label: "Disabled" },
  ];

  const getButtonStyles = (
    variant: VariantConfig,
    stateKey: "default" | "hover" | "active" | "focused" | "disabled"
  ): React.CSSProperties => {
    const tok = variant.stateTokens[stateKey];
    const isTertiaryLinkState = variant.id === "tertiary" && (stateKey === "hover" || stateKey === "active");

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: size === "sm" ? 110 : size === "md" ? 130 : 150,
      padding: sizeStyles.padding,
      fontSize: sizeStyles.fontSize,
      lineHeight: sizeStyles.lineHeight,
      fontWeight: 600,
      borderRadius: sizeStyles.radius,
      fontFamily: "var(--typography-font-family-sans)",
      cursor: stateKey === "disabled" ? "not-allowed" : "pointer",
      border: `1px solid ${tok.border ?? "transparent"}`,
      background: tok.bg,
      color: tok.text,
      boxSizing: "border-box",
      transition: "all 140ms ease",
      userSelect: "none",
      textDecoration: isTertiaryLinkState ? "underline" : "none",
      textUnderlineOffset: isTertiaryLinkState ? "4px" : undefined,
      textDecorationThickness: isTertiaryLinkState ? "2px" : undefined,
      textDecorationColor: isTertiaryLinkState ? "currentColor" : undefined,
      whiteSpace: "nowrap",
      ...tok.extraStyles,
    };
  };

  return (
    <div style={{ marginTop: 12, marginBottom: 32 }}>
      {/* Interactive Control Toolbar */}
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
          {/* Size Controls */}
          <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--theme-neutral-text-subtle)" }}>
            Size:
          </span>
          <div style={{ display: "inline-flex", background: "var(--site-bg)", borderRadius: 8, padding: 3, border: "1px solid var(--site-border)" }}>
            {(["sm", "md", "lg"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                style={{
                  border: "none",
                  background: size === s ? "var(--theme-brand-background-primary-strong)" : "transparent",
                  color: size === s ? "var(--brand-text-primary-oncolor)" : "var(--site-text)",
                  borderRadius: "var(--core-radius-sm)",
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 120ms ease",
                }}
              >
                {sizeLabels[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Canvas Theme Toggle Switch (Right Side) */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: canvasBg === "light" ? "var(--site-text)" : "var(--theme-neutral-text-subtle)", transition: "color 0.3s ease" }}>
            Light
          </span>
          <div
            onClick={() => setCanvasBg((prev) => (prev === "light" ? "dark" : "light"))}
            style={{
              width: 44,
              height: 24,
              background: canvasBg === "dark" ? "var(--theme-brand-background-primary-strong)" : "var(--theme-neutral-border-strong)",
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
                left: canvasBg === "dark" ? 22 : 2,
                transition: "left 0.3s ease",
                boxShadow: "var(--core-elevation-1)",
              }}
            />
          </div>
          <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: canvasBg === "dark" ? "var(--site-text)" : "var(--theme-neutral-text-subtle)", transition: "color 0.3s ease" }}>
            Dark
          </span>
        </div>
      </div>

      {/* Copy Feedback Toast */}
      {copiedCode && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "var(--theme-semantics-success-strong-background)",
            color: "var(--theme-neutral-text-on-color)",
            padding: "10px 20px",
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600,
            boxShadow: "var(--core-elevation-4)",
            zIndex: 9999,
          }}
        >
          ✓ {copiedCode}
        </div>
      )}

      {/* Main Complete Variant & State Matrix Canvas */}
      <div
        data-theme="core"
        data-mode={canvasBg}
        style={{
          background: "var(--core-color-bg-page)",
          color: "var(--core-color-text-primary)",
          borderRadius: 16,
          padding: "36px 32px",
          boxShadow: "var(--core-elevation-3)",
          border: "1px solid var(--site-border)",
          overflowX: "auto",
          transition: "background 150ms ease",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${VARIANTS.length}, minmax(190px, 1fr))`,
            columnGap: 36,
            rowGap: 0,
          }}
        >
          {VARIANTS.map((variant) => (
            <div key={variant.id} style={{ display: "flex", flexDirection: "column" }}>
              {/* Column Header */}
              <div
                style={{
                  borderBottom: "1px solid var(--site-border)",
                  paddingBottom: 14,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {variant.name}
                </div>
              </div>

              {/* Rows for each state */}
              {statesList.map((st) => {
                const tokenInfo = variant.stateTokens[st.key];
                return (
                  <div key={st.key} style={{ marginBottom: 26 }}>
                    {/* State Label */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
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

                    {/* Exact Rendered Button for this State */}
                    <div style={{ marginBottom: 6 }}>
                      {st.key === "disabled" ? (
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => handleCopy(variant.id, st.key)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") handleCopy(variant.id, st.key);
                          }}
                          title={`Click to copy JSX for ${variant.name} (${st.label})`}
                          style={{ display: "inline-block", cursor: "pointer" }}
                        >
                          <Button
                            variant={variant.id}
                            size={size}
                            disabled
                            style={{ minWidth: size === "sm" ? 110 : size === "md" ? 130 : 150, pointerEvents: "none" }}
                          >
                            {buttonText}
                          </Button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          style={getButtonStyles(variant, st.key)}
                          onClick={() => handleCopy(variant.id, st.key)}
                          title={`Click to copy JSX for ${variant.name} (${st.label})`}
                        >
                          {buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
