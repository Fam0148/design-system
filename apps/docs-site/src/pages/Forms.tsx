import React, { useState } from "react";
import { ComponentSectionNumber } from "../ComponentSectionNumber";
import { Preview } from "../Preview";
import { Anatomy, AnatomyLegend } from "../Anatomy";
import { Field, Input, InputWithIcon } from "../../../../packages/core/src/components/Field";
import { Icon } from "../../../../packages/core/src/components/Primitives";
import { Switch } from "../../../../packages/core/src/components/Misc";
import { Textarea, Select, Checkbox, Radio, RadioGroup } from "../../../../packages/core/src/components/FormControls";
import { Toggle, ToggleGroup, InputGroup, InputOTP } from "../../../../packages/core/src/components/ToggleInputs";
import { Slider } from "../../../../packages/core/src/components/Primitives";
import { Combobox } from "../../../../packages/core/src/components/Combobox";
import { Calendar, DatePicker } from "../../../../packages/core/src/components/Calendar";
import { Dropzone, AttachmentList, AttachmentFile } from "../../../../packages/core/src/components/Attachment";

const employers = [
  { value: "acme", label: "Acme Corporation" },
  { value: "globex", label: "Globex Industries" },
  { value: "initech", label: "Initech" },
  { value: "umbrella", label: "Umbrella Health" },
];

export default function Forms({ embedded = false }: { embedded?: boolean }) {
  const [on, setOn] = useState(true);
  const [plan, setPlan] = useState("roth");
  const [segment, setSegment] = useState<"sources" | "investments">("sources");
  const [otp, setOtp] = useState("");
  const [filledOtp, setFilledOtp] = useState("482916");
  const [errorOtp, setErrorOtp] = useState("830174");
  const [contribPct, setContribPct] = useState(6);
  const [employer, setEmployer] = useState("");
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [files, setFiles] = useState<AttachmentFile[]>([{ id: "1", name: "beneficiary-form.pdf", size: "212 KB" }]);
  const [cardNumber, setCardNumber] = useState("");
  const [routing, setRouting] = useState("");
  const [account, setAccount] = useState("");

  const formatCardNumber = (raw: string) => raw.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const toggleGroupOptions = [
    {
      value: "sources" as const,
      label: "Sources",
      icon: <Icon name="fa-solid fa-database" size="sm" />,
    },
    {
      value: "investments" as const,
      label: "Investments",
      icon: <Icon name="fa-solid fa-chart-pie" size="sm" />,
    },
  ];

  const sections = [
    {
      id: "01",
      anchorId: "input",
      title: "Input",
      description: "Standard text fields showing interactive and validation states.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
                <div className="force-default">
                  <Field label="Default" required>{(p) => <Input {...p} placeholder="Jordan Lee" />}</Field>
                </div>
                <div className="force-hover">
                  <Field label="Hover">{(p) => <Input {...p} placeholder="Jordan Lee" />}</Field>
                </div>
                <div className="force-focus">
                  <Field label="Focus">{(p) => <Input {...p} placeholder="Jordan Lee" />}</Field>
                </div>
                <div className="force-filled">
                  <Field label="Filled">{(p) => <Input {...p} defaultValue="Jordan Lee" />}</Field>
                </div>
                <div className="force-error">
                  <Field label="With error" error="Must be between 1% and 100%">{(p) => <Input {...p} defaultValue="150" />}</Field>
                </div>
                <div className="force-disabled">
                  <Field label="Disabled">{(p) => <Input {...p} disabled placeholder="Locked" />}</Field>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      )
    },
    {
      id: "02",
      anchorId: "textarea",
      title: "Textarea",
      description: "Multi-line text input that grows vertically with content. Minimum height 88px.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
              <div className="force-default">
                <Field label="Default">{(p) => <Textarea {...p} rows={2} placeholder="Type here..." />}</Field>
              </div>
              <div className="force-hover">
                <Field label="Hover">{(p) => <Textarea {...p} rows={2} placeholder="Type here..." />}</Field>
              </div>
              <div className="force-focus">
                <Field label="Focus">{(p) => <Textarea {...p} rows={2} placeholder="Type here..." />}</Field>
              </div>
              <div className="force-filled">
                <Field label="Filled">{(p) => <Textarea {...p} rows={2} defaultValue="Entered text" />}</Field>
              </div>
              <div className="force-disabled">
                <Field label="Disabled">{(p) => <Textarea {...p} disabled rows={2} placeholder="Type here..." />}</Field>
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "03",
      anchorId: "select",
      title: "Select",
      description: "Native select dropdown for choosing from a list of options.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
              <div className="force-default">
                <Field label="Default">{(p) => <Select {...p} options={employers} />}</Field>
              </div>
              <div className="force-hover">
                <Field label="Hover">{(p) => <Select {...p} options={employers} />}</Field>
              </div>
              <div className="force-focus">
                <Field label="Focus">{(p) => <Select {...p} options={employers} />}</Field>
              </div>
              <div className="force-filled">
                <Field label="Filled">{(p) => <Select {...p} value="acme" options={employers} />}</Field>
              </div>
              <div className="force-disabled">
                <Field label="Disabled">{(p) => <Select {...p} disabled options={employers} />}</Field>
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "04",
      anchorId: "checkbox-radio",
      title: "Checkbox & Radio",
      description: "Controls for boolean states and mutually exclusive choices.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
              <div>
                <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 16 }}>Checkbox</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(120px, 1fr))", gap: 32, padding: "8px 0" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DEFAULT</span>
                    <Checkbox label="Option" readOnly />
                  </div>
                  <div className="force-hover" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>HOVER</span>
                    <Checkbox label="Option" readOnly />
                  </div>
                  <div className="force-focus" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>FOCUS</span>
                    <Checkbox label="Option" readOnly />
                  </div>
                  <div className="force-active" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>CLICKED</span>
                    <Checkbox label="Option" defaultChecked readOnly />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DISABLED</span>
                    <Checkbox label="Option" disabled />
                  </div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 16 }}>Radio</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(120px, 1fr))", gap: 32, padding: "8px 0" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DEFAULT</span>
                    <Radio name="radio-default" label="Option" value="opt" checked={false} readOnly onChange={() => {}} />
                  </div>
                  <div className="force-hover" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>HOVER</span>
                    <Radio name="radio-hover" label="Option" value="opt" checked={false} readOnly onChange={() => {}} />
                  </div>
                  <div className="force-focus" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>FOCUS</span>
                    <Radio name="radio-focus" label="Option" value="opt" checked={false} readOnly onChange={() => {}} />
                  </div>
                  <div className="force-active" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>CLICKED</span>
                    <Radio name="radio-active" label="Option" value="opt" checked readOnly onChange={() => {}} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                    <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DISABLED</span>
                    <Radio name="radio-disabled" label="Option" value="opt" checked={false} disabled readOnly onChange={() => {}} />
                  </div>
                </div>
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "05",
      anchorId: "switch",
      title: "Switch",
      description: "Toggle control for immediate on/off actions.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(140px, 1fr))", gap: 32, width: "100%", padding: "16px 8px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DEFAULT</span>
                <Switch label="Option" checked={false} onChange={() => { }} />
              </div>
              <div className="force-hover" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>HOVER</span>
                <Switch label="Option" checked={false} onChange={() => { }} />
              </div>
              <div className="force-focus" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>FOCUS</span>
                <Switch label="Option" checked={false} onChange={() => { }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>ACTIVE (ON)</span>
                <Switch label="Option" checked={true} onChange={() => { }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DISABLED</span>
                <Switch label="Option" disabled checked={false} onChange={() => { }} />
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "06",
      anchorId: "toggle",
      title: "Toggle",
      description: "Stateful buttons that hold a pressed state, individually or in groups.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 16 }}>Single Toggle</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(140px, 1fr))", gap: 32, padding: "8px 0" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                      <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DEFAULT</span>
                      <Toggle pressed={false} onPressedChange={() => { }}>★ Favorite</Toggle>
                    </div>
                    <div className="force-hover" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                      <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>HOVER</span>
                      <Toggle pressed={false} onPressedChange={() => { }}>★ Favorite</Toggle>
                    </div>
                    <div className="force-focus" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                      <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>FOCUS</span>
                      <Toggle pressed={false} onPressedChange={() => { }}>★ Favorite</Toggle>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                      <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DISABLED</span>
                      <Toggle disabled pressed={false} onPressedChange={() => { }}>★ Favorite</Toggle>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid var(--theme-neutral-border-primary-default)", paddingTop: 24 }}>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 16 }}>Toggle Group</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(280px, 1fr))", gap: 32, padding: "8px 0" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                      <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DEFAULT</span>
                      <ToggleGroup value={segment} onChange={setSegment} options={toggleGroupOptions} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", padding: "8px 12px" }}>
                      <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DISABLED</span>
                      <ToggleGroup disabled value="investments" onChange={() => { }} options={toggleGroupOptions} />
                    </div>
                  </div>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      )
    },
    {
      id: "07",
      anchorId: "input-group",
      title: "Input group",
      description: "Text inputs composed with fixed prefix or suffix labels.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                {/* Prefix variant row */}
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Prefix Addon ($)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {(p) => <InputGroup prefix="$"><Input {...p} placeholder="0.00" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {(p) => <InputGroup prefix="$"><Input {...p} placeholder="0.00" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {(p) => <InputGroup prefix="$"><Input {...p} placeholder="0.00" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {(p) => <InputGroup prefix="$"><Input {...p} defaultValue="250.00" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {(p) => <InputGroup prefix="$"><Input {...p} disabled placeholder="0.00" /></InputGroup>}
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Suffix variant row */}
                <div style={{ borderTop: "1px solid var(--theme-neutral-border-primary-default)", paddingTop: 20 }}>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Suffix Addon (%)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {(p) => <InputGroup suffix="%"><Input {...p} placeholder="0" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {(p) => <InputGroup suffix="%"><Input {...p} placeholder="0" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {(p) => <InputGroup suffix="%"><Input {...p} placeholder="0" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {(p) => <InputGroup suffix="%"><Input {...p} defaultValue="6" /></InputGroup>}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {(p) => <InputGroup suffix="%"><Input {...p} disabled placeholder="0" /></InputGroup>}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      )
    },
    {
      id: "08",
      anchorId: "input-otp",
      title: "Input OTP",
      description: "Segmented input for 2FA and verification codes.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, width: "100%" }}>
              <div className="force-default">
                <Field label="Default">
                  {(p) => <InputOTP {...p} value={otp} onChange={setOtp} length={6} />}
                </Field>
              </div>
              <div className="force-filled">
                <Field label="Filled">
                  {(p) => <InputOTP {...p} value={filledOtp} onChange={setFilledOtp} length={6} />}
                </Field>
              </div>
              <div className="force-error">
                <Field label="Error" error="Invalid verification code. Please try again.">
                  {(p) => <InputOTP {...p} value={errorOtp} onChange={setErrorOtp} length={6} />}
                </Field>
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "09",
      anchorId: "slider",
      title: "Slider",
      description: "Range control for numeric values.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(220px, 1fr))", gap: 32, width: "100%", padding: "8px 0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "stretch", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DEFAULT</span>
                <Field label="Contribution rate">{() => (
                  <Slider value={contribPct} min={0} max={25} onChange={setContribPct} formatValue={(v) => `${v}%`} />
                )}</Field>
              </div>
              <div className="force-focus" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "stretch", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>FOCUS</span>
                <Field label="Contribution rate">{() => (
                  <Slider value={6} min={0} max={25} onChange={() => {}} formatValue={(v) => `${v}%`} />
                )}</Field>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "stretch", padding: "8px 12px" }}>
                <span style={{ fontSize: "var(--typography-eyebrow-size)", lineHeight: "var(--typography-eyebrow-line-height)", fontWeight: "var(--typography-eyebrow-weight)", letterSpacing: "var(--typography-eyebrow-letter-spacing)", color: "var(--theme-neutral-text-subtle)" }}>DISABLED</span>
                <Field label="Contribution rate">{() => (
                  <Slider disabled value={6} min={0} max={25} onChange={() => {}} formatValue={(v) => `${v}%`} />
                )}</Field>
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "10",
      anchorId: "combobox",
      title: "Combobox",
      description: "Search input and combobox — type to filter options, then select from the list.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, width: "100%" }}>
              <div className="force-default">
                <Field label="Default">
                  {(p) => <Combobox {...p} options={employers} value="" onChange={() => { }} placeholder="Search employer…" />}
                </Field>
              </div>
              <div className="force-hover">
                <Field label="Hover">
                  {(p) => <Combobox {...p} options={employers} value="" onChange={() => { }} placeholder="Search employer…" />}
                </Field>
              </div>
              <div className="force-focus">
                <Field label="Focus">
                  {(p) => <Combobox {...p} options={employers} value="" onChange={() => { }} placeholder="Search employer…" />}
                </Field>
              </div>
              <div className="force-filled">
                <Field label="Filled">
                  {(p) => <Combobox {...p} options={employers} value="acme" onChange={() => { }} placeholder="Search employer…" />}
                </Field>
              </div>
              <div className="force-disabled">
                <Field label="Disabled">
                  {(p) => <Combobox {...p} disabled options={employers} value="" onChange={() => { }} placeholder="Locked" />}
                </Field>
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "11",
      anchorId: "date-picker",
      title: "Date Selection",
      description: "Inline calendar and popover date picker components.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>DatePicker Popover</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {() => <DatePicker placeholder="Select date" />}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {() => <DatePicker placeholder="Select date" />}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {() => <DatePicker placeholder="Select date" />}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {() => <DatePicker value={new Date(2024, 8, 15)} />}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {() => <DatePicker disabled placeholder="Locked" />}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </Preview>
          </div>

          <div className="site-panel site-panel--flush">
            <div className="preview-surface" data-theme="core" data-mode="light" style={{ background: "var(--core-color-bg-page)", padding: 24 }}>
              <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Calendar (Active)</div>
                  <Calendar selected={dob} onSelect={setDob} maxDate={new Date()} />
                </div>
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Calendar (Disabled)</div>
                  <Calendar disabled selected={dob} onSelect={() => { }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "12",
      anchorId: "input-icon",
      title: "Input with icon",
      description: "First-class leading or trailing icon slot.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                {/* Leading icon */}
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Leading Icon (Search)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {(p) => <InputWithIcon {...p} leadingIcon={<Icon name="fa-solid fa-magnifying-glass" size="sm" />} placeholder="Search transactions…" />}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {(p) => <InputWithIcon {...p} leadingIcon={<Icon name="fa-solid fa-magnifying-glass" size="sm" />} placeholder="Search transactions…" />}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {(p) => <InputWithIcon {...p} leadingIcon={<Icon name="fa-solid fa-magnifying-glass" size="sm" />} placeholder="Search transactions…" />}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {(p) => <InputWithIcon {...p} leadingIcon={<Icon name="fa-solid fa-magnifying-glass" size="sm" />} defaultValue="Payroll run Q3" />}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {(p) => <InputWithIcon {...p} disabled leadingIcon={<Icon name="fa-solid fa-magnifying-glass" size="sm" />} placeholder="Locked" />}
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Trailing icon */}
                <div style={{ borderTop: "1px solid var(--theme-neutral-border-primary-default)", paddingTop: 20 }}>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Trailing Icon (Currency)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {(p) => <InputWithIcon {...p} trailingIcon={<Icon name="fa-solid fa-dollar-sign" size="sm" />} placeholder="0.00" />}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {(p) => <InputWithIcon {...p} trailingIcon={<Icon name="fa-solid fa-dollar-sign" size="sm" />} placeholder="0.00" />}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {(p) => <InputWithIcon {...p} trailingIcon={<Icon name="fa-solid fa-dollar-sign" size="sm" />} placeholder="0.00" />}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {(p) => <InputWithIcon {...p} trailingIcon={<Icon name="fa-solid fa-dollar-sign" size="sm" />} defaultValue="1,250.00" />}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {(p) => <InputWithIcon {...p} disabled trailingIcon={<Icon name="fa-solid fa-dollar-sign" size="sm" />} placeholder="0.00" />}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      )
    },
    {
      id: "13",
      anchorId: "payment-bank-fields",
      title: "Bank fields",
      description: "Masked and formatted inputs for sensitive data (card, routing, etc.).",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                {/* Card Number */}
                <div>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Card Number</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {(p) => (
                          <InputWithIcon
                            {...p}
                            trailingIcon={<Icon name="fa-solid fa-credit-card" size="sm" />}
                            inputMode="numeric"
                            placeholder="1234 5678 9012 3456"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {(p) => (
                          <InputWithIcon
                            {...p}
                            trailingIcon={<Icon name="fa-solid fa-credit-card" size="sm" />}
                            inputMode="numeric"
                            placeholder="1234 5678 9012 3456"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {(p) => (
                          <InputWithIcon
                            {...p}
                            trailingIcon={<Icon name="fa-solid fa-credit-card" size="sm" />}
                            inputMode="numeric"
                            placeholder="1234 5678 9012 3456"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {(p) => (
                          <InputWithIcon
                            {...p}
                            trailingIcon={<Icon name="fa-solid fa-credit-card" size="sm" />}
                            inputMode="numeric"
                            defaultValue="4532 8920 1234 5678"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {(p) => (
                          <InputWithIcon
                            {...p}
                            disabled
                            trailingIcon={<Icon name="fa-solid fa-credit-card" size="sm" />}
                            inputMode="numeric"
                            defaultValue="•••• •••• •••• 5678"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Routing & Account Number */}
                <div style={{ borderTop: "1px solid var(--theme-neutral-border-primary-default)", paddingTop: 20 }}>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Routing Number (9 Digits)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                    <div className="force-default">
                      <Field label="Default">
                        {(p) => <Input {...p} inputMode="numeric" maxLength={9} placeholder="021000021" />}
                      </Field>
                    </div>
                    <div className="force-hover">
                      <Field label="Hover">
                        {(p) => <Input {...p} inputMode="numeric" maxLength={9} placeholder="021000021" />}
                      </Field>
                    </div>
                    <div className="force-focus">
                      <Field label="Focus">
                        {(p) => <Input {...p} inputMode="numeric" maxLength={9} placeholder="021000021" />}
                      </Field>
                    </div>
                    <div className="force-filled">
                      <Field label="Filled">
                        {(p) => <Input {...p} inputMode="numeric" maxLength={9} defaultValue="021000021" />}
                      </Field>
                    </div>
                    <div className="force-disabled">
                      <Field label="Disabled">
                        {(p) => <Input {...p} disabled inputMode="numeric" maxLength={9} defaultValue="021000021" />}
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Expiration & CVC */}
                <div style={{ borderTop: "1px solid var(--theme-neutral-border-primary-default)", paddingTop: 20 }}>
                  <div style={{ fontSize: "var(--typography-label-size)", lineHeight: "var(--typography-label-line-height)", fontWeight: "var(--typography-label-weight)", letterSpacing: "var(--typography-label-letter-spacing)", color: "var(--theme-neutral-text-subtle)", marginBottom: 12 }}>Interactive Card Verification Entry</div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
                    <Field label="Card number" hint="Stored securely — last 4 digits only.">
                      {(p) => (
                        <InputWithIcon
                          {...p}
                          trailingIcon={<Icon name="fa-solid fa-credit-card" size="sm" />}
                          inputMode="numeric"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        />
                      )}
                    </Field>
                    <Field label="Expiration date">
                      {(p) => <Input {...p} placeholder="MM / YY" inputMode="numeric" />}
                    </Field>
                    <Field label="CVC" hint="3 digits">
                      {(p) => <Input {...p} placeholder="123" inputMode="numeric" maxLength={4} />}
                    </Field>
                  </div>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      )
    },
    {
      id: "14",
      anchorId: "attachment",
      title: "Attachment",
      description: "File upload dropzone and attachment list.",
      content: (
        <div className="site-panel site-panel--flush">
          <Preview>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 32, width: "100%" }}>
              {/* Default State */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-text-secondary)" }}>
                    Default (Interactive)
                  </span>
                  <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 500, color: "var(--core-color-text-tertiary)" }}>Ready to upload</span>
                </div>
                <Dropzone
                  onFiles={(fl) =>
                    setFiles((prev) => [
                      ...prev,
                      { id: String(Date.now()), name: fl[0].name, size: `${Math.round(fl[0].size / 1024)} KB` }
                    ])
                  }
                />
                <AttachmentList files={files} onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))} />
              </div>

              {/* Success State */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-status-success-text)", display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon name="fa-solid fa-circle-check" size="sm" /> Success State
                  </span>
                  <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 600, color: "var(--core-color-status-success-text)", background: "var(--core-color-status-success-bg)", border: "1px solid var(--core-color-status-success-border)", padding: "1px 8px", borderRadius: 999 }}>
                    Complete
                  </span>
                </div>
                <Dropzone
                  status="success"
                  icon={<Icon name="fa-solid fa-circle-check" size="md" color="var(--core-color-status-success-text)" />}
                  label={<span>File uploaded successfully, or <strong style={{ color: "var(--core-color-status-success-text)" }}>browse more</strong></span>}
                  hint="All files passed security and format verification."
                />
                <AttachmentList
                  files={[
                    { id: "s1", name: "beneficiary-form.pdf", size: "212 KB", status: "success", statusText: "Uploaded" },
                    { id: "s2", name: "voided-check.png", size: "480 KB", status: "success", statusText: "Verified" }
                  ]}
                  onRemove={() => {}}
                />
              </div>

              {/* Error State */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-status-danger-text)", display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon name="fa-solid fa-circle-exclamation" size="sm" /> Error State
                  </span>
                  <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 600, color: "var(--core-color-status-danger-text)", background: "var(--core-color-status-danger-bg)", border: "1px solid var(--core-color-status-danger-border)", padding: "1px 8px", borderRadius: 999 }}>
                    Failed
                  </span>
                </div>
                <Dropzone
                  status="error"
                  icon={<Icon name="fa-solid fa-circle-exclamation" size="md" color="var(--core-color-status-danger-text)" />}
                  label={<span>Upload failed, or <strong style={{ color: "var(--core-color-status-danger-text)" }}>choose another file</strong></span>}
                  hint="File exceeds 10MB limit. Please select a smaller file."
                />
                <AttachmentList
                  files={[
                    { id: "e1", name: "annual-financial-audit-2024.zip", size: "14.2 MB", status: "error", statusText: "Exceeds 10MB limit" },
                    { id: "e2", name: "unsupported-installer.pkg", size: "3.5 MB", status: "error", statusText: "Unsupported format" }
                  ]}
                  onRemove={() => {}}
                />
              </div>

              {/* Warning State */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-status-warning-text)", display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon name="fa-solid fa-triangle-exclamation" size="sm" /> Warning State
                  </span>
                  <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 600, color: "var(--core-color-status-warning-text)", background: "var(--core-color-status-warning-bg)", border: "1px solid var(--core-color-status-warning-border)", padding: "1px 8px", borderRadius: 999 }}>
                    Warning
                  </span>
                </div>
                <Dropzone
                  status="warning"
                  icon={<Icon name="fa-solid fa-triangle-exclamation" size="md" color="var(--core-color-status-warning-text)" />}
                  label={<span>Storage capacity warning, or <strong style={{ color: "var(--core-color-status-warning-text)" }}>browse</strong></span>}
                  hint="Only 1 upload remaining before reaching capacity limit (3 files max)."
                />
                <AttachmentList
                  files={[
                    { id: "w1", name: "macro-enabled-roster.xlsm", size: "4.8 MB", status: "warning", statusText: "Virus scan pending" },
                    { id: "w2", name: "high-res-contract.tiff", size: "8.9 MB", status: "warning", statusText: "Auto-converted" }
                  ]}
                  onRemove={() => {}}
                />
              </div>

              {/* Disable State */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "var(--typography-body-md-size)", fontWeight: 600, color: "var(--core-color-text-tertiary)", display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon name="fa-solid fa-lock" size="sm" /> Disable State
                  </span>
                  <span style={{ fontSize: "var(--typography-font-size-xs)", fontWeight: 600, color: "var(--theme-neutral-text-subtleleast)", background: "var(--theme-brand-background-disabled-light)", border: "1px solid var(--theme-brand-borders-primary-disabled)", padding: "1px 8px", borderRadius: 999 }}>
                    Disabled
                  </span>
                </div>
                <Dropzone
                  disabled={true}
                  icon={<Icon name="fa-solid fa-lock" size="md" color="var(--theme-neutral-text-subtleleast)" />}
                  label={<span>File uploads are disabled</span>}
                  hint="Attachments are locked and read-only for submitted requests."
                />
                <AttachmentList
                  disabled={true}
                  files={[
                    { id: "d1", name: "beneficiary-form.pdf", size: "212 KB", status: "disabled", statusText: "Locked" }
                  ]}
                />
              </div>
            </div>
          </Preview>
        </div>
      )
    },
    {
      id: "15",
      anchorId: "working-example",
      title: "Working Example",
      description: "A functional form combining multiple control variants, states, and maximum configuration.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div className="site-panel site-panel--flush">
            <Preview>
              <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 420 }}>
                {/* Kitchen Sink Input */}
                <Field label="Kitchen Sink Input" hint="Prefix, suffix, icons, hint, and error all at once." error="Username is already taken">
                  {(p) => (
                    <InputGroup prefix="@">
                      <InputWithIcon
                        {...p}
                        leadingIcon={<Icon name="fa-solid fa-user" size="sm" />}
                        trailingIcon={<Icon name="fa-solid fa-circle-exclamation" size="sm" color="var(--core-color-status-danger-text)" />}
                        defaultValue="jordanlee"
                      />
                    </InputGroup>
                  )}
                </Field>

                {/* Working Form */}
                <div style={{ padding: 24, border: "1px solid var(--site-border)", borderRadius: 12, background: "var(--core-color-surface-default)" }}>
                  <h3 style={{ margin: "0 0 24px 0", fontSize: 18, fontWeight: 600 }}>Profile Settings</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <Field label="Display name">
                      {(p) => <Input {...p} defaultValue="Jordan Lee" variant="solid" />}
                    </Field>

                    <Field label="Department">
                      {(p) => <Select {...p} options={employers} value="acme" />}
                    </Field>

                    <Field label="Bio" hint="Briefly describe your role.">
                      {(p) => <Textarea {...p} rows={3} defaultValue="Lead designer focused on..." />}
                    </Field>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid var(--site-border)", borderBottom: "1px solid var(--site-border)" }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>Two-factor authentication</div>
                        <div style={{ fontSize: "var(--typography-font-size-xs)", color: "var(--core-color-text-tertiary)", marginTop: 2 }}>Secure your account.</div>
                      </div>
                      <Switch checked={on} onChange={setOn} />
                    </div>

                    <Checkbox label="Subscribe to product updates" defaultChecked />

                    <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
                      <button className="cds-btn cds-btn--primary">Save Changes</button>
                      <button className="cds-btn cds-btn--secondary">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      )
    }
  ];

  const sectionList = (
    <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
      {sections.map((s) => (
        <div key={s.anchorId} id={s.anchorId} className="docs-section" style={{ display: "flex", flexDirection: "column", gap: 40, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "-12.5%", width: "125%", height: 1, backgroundColor: "var(--site-border)" }} />
          <div style={{ paddingTop: 32 }}>
            <ComponentSectionNumber anchorId={s.anchorId} />
            <h2 style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.04em", margin: 0, textTransform: "lowercase" }}>{s.title}</h2>
          </div>
          <div>{s.content}</div>
        </div>
      ))}
    </div>
  );

  const formStyles = (
    <style>{`
        .force-hover .cds-input,
        .force-hover .cds-textarea, 
        .force-hover .cds-select,
        .force-hover .cds-combobox .cds-input,
        .force-hover .cds-input-affix-wrap .cds-input,
        .force-hover .cds-input-group .cds-input,
        .force-hover .cds-input-group-addon { 
          border-color: var(--theme-neutral-border-strong) !important; 
        }
        .force-hover .cds-toggle:not(:disabled):not([aria-pressed="true"]) { 
          background: var(--brand-background-hover) !important;
          color: var(--theme-primitive-color-primary-100) !important;
          border-color: var(--brand-borders-hover) !important;
        }
        .force-hover .cds-toggle-group__item:not(:disabled):not([aria-pressed="true"]) {
          color: var(--theme-brand-text-primary-default) !important;
        }
        .force-hover .cds-switch input:not(:checked):not(:disabled) + .cds-switch-track {
          background: var(--theme-colors-neutral-400) !important;
        }
        .force-hover .cds-switch input:checked:not(:disabled) + .cds-switch-track {
          background: var(--brand-background-hover) !important;
        }
        .force-hover .cds-checkbox input:not(:checked):not(:disabled) + .cds-checkbox-box,
        .force-hover .cds-radio input:not(:checked):not(:disabled) + .cds-radio-box {
          border-color: var(--theme-primitive-color-primary-400) !important;
          background: var(--theme-brand-background-primary-subtle) !important;
        }
        .force-hover .cds-checkbox input:checked:not(:disabled) + .cds-checkbox-box,
        .force-hover .cds-radio input:checked:not(:disabled) + .cds-radio-box {
          background: var(--brand-background-hover) !important;
          border-color: var(--brand-background-hover) !important;
        }
        
        .force-focus .cds-input,
        .force-focus .cds-textarea, 
        .force-focus .cds-select,
        .force-focus .cds-combobox .cds-input,
        .force-focus .cds-date-picker .cds-input,
        .force-focus .cds-input-affix-wrap .cds-input { 
          border-color: var(--theme-primitive-color-primary-400) !important; 
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primitive-color-primary-400) 25%, transparent) !important; 
        }
        .force-focus .cds-input-affix-wrap .cds-input-icon {
          color: var(--theme-neutral-text-subtle) !important;
        }
        .force-focus .cds-input-group {
          border-radius: var(--core-input-radius) !important;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primitive-color-primary-400) 25%, transparent) !important;
        }
        .force-focus .cds-input-group .cds-input,
        .force-focus .cds-input-group-addon {
          border-color: var(--theme-primitive-color-primary-400) !important;
        }
        .force-focus .cds-input-group .cds-input {
          box-shadow: none !important;
        }
        .force-focus .cds-checkbox input:not(:checked):not(:disabled) + .cds-checkbox-box,
        .force-focus .cds-radio input:not(:checked):not(:disabled) + .cds-radio-box {
          border-color: var(--theme-primitive-color-primary-400) !important;
          background: var(--theme-colors-neutral-0) !important;
          outline: var(--core-focusRing-width) solid var(--theme-primitive-color-primary-400) !important;
          outline-offset: 2px !important;
        }
        .force-focus .cds-switch-track { 
          outline: none !important;
          box-shadow:
            0 0 0 2px var(--theme-colors-neutral-0),
            0 0 0 calc(2px + var(--core-focusRing-width)) var(--theme-primitive-color-primary-400) !important;
        }
        .force-focus .cds-toggle:not(:disabled) {
          outline: var(--core-focusRing-width) solid var(--theme-primitive-color-primary-400) !important;
          outline-offset: var(--core-focusRing-offset) !important;
        }
        .force-focus .cds-slider input[type="range"] {
          outline: none !important;
        }
        .force-focus .cds-slider input[type="range"]::-webkit-slider-thumb {
          box-shadow:
            0 0 0 2px var(--theme-colors-neutral-0),
            0 0 0 calc(2px + var(--core-focusRing-width)) var(--theme-primitive-color-primary-400) !important;
        }
        .force-focus .cds-slider input[type="range"]::-moz-range-thumb {
          box-shadow:
            0 0 0 2px var(--theme-colors-neutral-0),
            0 0 0 calc(2px + var(--core-focusRing-width)) var(--theme-primitive-color-primary-400) !important;
        }

        .force-active .cds-textarea, .force-active .cds-select { 
          border-color: var(--theme-primitive-color-primary-400) !important; 
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--theme-primitive-color-primary-400) 25%, transparent) !important; 
          background: var(--theme-brand-background-primary-subtle) !important;
        }
        .force-active .cds-checkbox input:checked:not(:disabled) + .cds-checkbox-box,
        .force-active .cds-radio input:checked:not(:disabled) + .cds-radio-box {
          background: var(--brand-background-active) !important;
          border-color: var(--brand-background-active) !important;
        }
        .force-error .cds-input[aria-invalid="true"] {
          border-color: var(--theme-semantics-critical-border) !important;
        }

        .force-disabled .cds-select, .cds-select:disabled, .cds-select[aria-disabled="true"] { 
          background: var(--theme-brand-background-disabled-light) !important; 
          color: var(--theme-neutral-text-subtleleast) !important; 
          border-color: var(--theme-neutral-border-primary-default) !important; 
          opacity: 1 !important; 
          cursor: not-allowed !important;
        }
        .force-disabled .cds-textarea, .cds-textarea:disabled { 
          background: var(--theme-brand-background-disabled-light) !important; 
          color: var(--theme-neutral-text-subtleleast) !important; 
          border-color: var(--theme-neutral-border-primary-default) !important; 
          opacity: 1 !important; 
          cursor: not-allowed !important;
        }
        .force-disabled .cds-input, .cds-input:disabled { 
          background: var(--theme-brand-background-disabled-light) !important; 
          color: var(--theme-neutral-text-subtleleast) !important; 
          border-color: var(--theme-neutral-border-primary-default) !important; 
          opacity: 1 !important; 
          cursor: not-allowed !important;
        }
        .force-disabled .cds-input-group-addon, .cds-input-group:has(.cds-input:disabled) .cds-input-group-addon {
          background: var(--theme-brand-background-disabled-light) !important; 
          color: var(--theme-neutral-text-subtleleast) !important; 
          border-color: var(--theme-neutral-border-primary-default) !important; 
          cursor: not-allowed !important;
        }
        .force-disabled .cds-input-icon, .cds-input-affix-wrap:has(.cds-input:disabled) .cds-input-icon {
          color: var(--theme-neutral-text-subtleleast) !important;
        }
        .force-disabled .cds-toggle, .cds-toggle:disabled {
          background: var(--theme-brand-background-disabled-light) !important; 
          color: var(--theme-neutral-text-subtleleast) !important; 
          border-color: var(--theme-neutral-border-primary-default) !important; 
          opacity: 1 !important; 
          cursor: not-allowed !important;
        }
        .force-disabled .cds-toggle[aria-pressed="true"], .cds-toggle:disabled[aria-pressed="true"] {
          background: var(--theme-neutral-border-subtle) !important;
          color: var(--theme-neutral-text-subtleleast) !important;
        }
        .force-disabled .cds-slider input[type="range"],
        .cds-slider input[type="range"]:disabled {
          background: var(--theme-brand-background-disabled-light) !important;
          cursor: not-allowed !important;
        }
        .force-disabled .cds-slider input[type="range"]::-webkit-slider-thumb,
        .cds-slider input[type="range"]:disabled::-webkit-slider-thumb {
          background: var(--theme-colors-neutral-300) !important;
          border-color: var(--theme-colors-neutral-0) !important;
          box-shadow: none !important;
          cursor: not-allowed !important;
        }
        .force-disabled .cds-slider input[type="range"]::-moz-range-thumb,
        .cds-slider input[type="range"]:disabled::-moz-range-thumb {
          background: var(--theme-colors-neutral-300) !important;
          border-color: var(--theme-colors-neutral-0) !important;
          box-shadow: none !important;
          cursor: not-allowed !important;
        }
        .force-disabled .cds-slider-value,
        .cds-slider--disabled .cds-slider-value {
          color: var(--theme-neutral-text-subtleleast) !important;
        }
        .force-hover .cds-otp-digit:not(:disabled) {
          border-color: var(--theme-neutral-border-strong) !important;
        }
        .force-error .cds-otp-digit {
          border-color: var(--theme-semantics-critical-border) !important;
        }
        .force-disabled .cds-otp-digit {
          background: var(--theme-brand-background-disabled-light) !important;
          color: var(--theme-neutral-text-subtleleast) !important;
          border-color: var(--theme-brand-borders-primary-disabled) !important;
          cursor: not-allowed !important;
        }
      `}</style>
  );

  if (embedded) {
    return (
      <>
        {formStyles}
        {sectionList}
      </>
    );
  }

  return (
    <div style={{ maxWidth: 1024, margin: "0 auto", padding: "20px" }}>
      {formStyles}
      <div style={{ textAlign: "center", marginBottom: 60, marginTop: 40 }}>
        <h1 style={{ fontSize: 72, fontWeight: 800, letterSpacing: "-0.06em", margin: "0 0 16px 0", color: "var(--core-color-text-primary)", lineHeight: 1.1 }}>
          Form Controls
        </h1>
        <p style={{ maxWidth: 560, margin: "0 auto", color: "var(--core-color-text-tertiary)", fontSize: 18, lineHeight: 1.6, fontWeight: 400 }}>
          Essential components for data entry and configuration. Label, hint, and error states are wired together automatically via aria attributes.
        </p>
      </div>
      {sectionList}
    </div>
  );
}
