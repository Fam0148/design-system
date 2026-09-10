import React from "react";
import { Anatomy, AnatomyLegend } from "../Anatomy";
import { Button, IconButton } from "../../../../packages/core/src/components/Button";
import { Input, InputWithIcon } from "../../../../packages/core/src/components/Field";
import { Switch, Card, Badge, Alert } from "../../../../packages/core/src/components/Misc";
import { Checkbox, RadioGroup, Textarea, Select } from "../../../../packages/core/src/components/FormControls";
import { Slider, ButtonGroup, Icon, Item, DescriptionList, Empty } from "../../../../packages/core/src/components/Primitives";
import { Avatar, Progress, Table, DataTable } from "../../../../packages/core/src/components/DataDisplay";
import { Modal, Drawer, Tooltip, Popover, Toast, ConfirmDialog, DropdownMenu, Spinner } from "../../../../packages/core/src/components/Overlays";
import { Toggle, ToggleGroup, InputGroup, InputOTP } from "../../../../packages/core/src/components/ToggleInputs";
import { Combobox } from "../../../../packages/core/src/components/Combobox";
import { Calendar, DatePicker } from "../../../../packages/core/src/components/Calendar";
import { Dropzone } from "../../../../packages/core/src/components/Attachment";
import { Collapsible, Accordion, Skeleton, Separator } from "../../../../packages/core/src/components/Disclosure";
import { Tabs, Breadcrumb, Pagination, NavigationMenu, AppSidebar, Stepper } from "../../../../packages/core/src/components/Navigation";
import { HoverCard } from "../../../../packages/core/src/components/HoverCard";

export default function AnatomyPage() {
  const sections = [
    {
      title: "Actions",
      components: [
        {
          id: "button",
          title: "Button Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 90, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 130, y: -40, leaderTo: { x: 90, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 130, y: 80, leaderTo: { x: 45, y: 20 } }
              ]}>
                <div style={{width: 90, height: 40}}><Button>Button</Button></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "icon-button",
          title: "Icon Button Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 40, height: 40 }]} points={[
                { n: 1, label: "Padding: 8px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 80, y: -40, leaderTo: { x: 40, y: 0 } },
                { n: 3, label: "Text size: 16px (Icon)", x: 80, y: 80, leaderTo: { x: 20, y: 20 } }
              ]}>
                <div style={{width: 40, height: 40}}><IconButton aria-label="Edit"><Icon name="fa-solid fa-pen" /></IconButton></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 8px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Icon)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "link",
          title: "Link Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={100} rects={[{ x: 0, y: 0, width: 65, height: 20 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 105, y: -40, leaderTo: { x: 65, y: 0 } },
                { n: 3, label: "Text size: 16px", x: 105, y: 60, leaderTo: { x: 32, y: 10 } }
              ]}>
                <div style={{width: 65, height: 20}}><a href="#" className="cds-link">Link text</a></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "button-group",
          title: "Button Group Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 180, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 16px (each)", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px (outer)", x: 220, y: -40, leaderTo: { x: 180, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 220, y: 80, leaderTo: { x: 90, y: 20 } }
              ]}>
                <div style={{width: 180, height: 40}}>
                  <ButtonGroup><Button>One</Button><Button>Two</Button></ButtonGroup>
                </div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 16px (each)", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px (outer)", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Forms",
      components: [
        {
          id: "input",
          title: "Input Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 80, leaderTo: { x: 100, y: 20 } }
              ]}>
                <div style={{width: 200, height: 40}}><Input placeholder="Input value" /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "textarea",
          title: "Textarea Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={160} rects={[{ x: 0, y: 0, width: 200, height: 80 }]} points={[
                { n: 1, label: "Padding: 8px 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 120, leaderTo: { x: 100, y: 40 } }
              ]}>
                <div style={{width: 200, height: 80}}><Textarea placeholder="Type here..." rows={3} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 8px 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "select",
          title: "Select Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 32px 0 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 80, leaderTo: { x: 100, y: 20 } }
              ]}>
                <div style={{width: 200, height: 40}}><Select options={[{value:"1", label:"Option 1"}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 32px 0 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "checkbox",
          title: "Checkbox Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={100} rects={[{ x: 0, y: 0, width: 100, height: 20 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 4px", x: 140, y: -40, leaderTo: { x: 100, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 140, y: 60, leaderTo: { x: 50, y: 10 } }
              ]}>
                <div style={{width: 100, height: 20}}><Checkbox label="Checkbox" checked={true} onChange={() => {}} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 4px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "switch",
          title: "Switch Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={100} rects={[{ x: 0, y: 0, width: 100, height: 20 }]} points={[
                { n: 1, label: "Padding: 2px (inset)", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 10px", x: 140, y: -40, leaderTo: { x: 100, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 140, y: 60, leaderTo: { x: 50, y: 10 } }
              ]}>
                <div style={{width: 100, height: 20}}><Switch label="Switch" checked={true} onChange={() => {}} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 2px (inset)", x: 0, y: 0 }, { n: 2, label: "Corner radius: 10px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "toggle",
          title: "Toggle Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 50, height: 32 }]} points={[
                { n: 1, label: "Padding: 0 8px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 4px", x: 90, y: -40, leaderTo: { x: 50, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 90, y: 80, leaderTo: { x: 25, y: 16 } }
              ]}>
                <div style={{width: 50, height: 32}}><Toggle pressed={true} onPressedChange={()=>{}}>Bold</Toggle></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 8px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 4px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "input-group",
          title: "Input Group Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 250, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px (outer)", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 290, y: 80, leaderTo: { x: 125, y: 20 } }
              ]}>
                <div style={{width: 250, height: 40}}><InputGroup><Input /></InputGroup></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px (outer)", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "input-otp",
          title: "Input OTP Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 48 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 24px", x: 240, y: 80, leaderTo: { x: 100, y: 24 } }
              ]}>
                <div style={{width: 200, height: 48}}><InputOTP length={4} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 24px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "slider",
          title: "Slider Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={100} rects={[{ x: 0, y: 0, width: 200, height: 20 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 2px (track)", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: N/A", x: 240, y: 60, leaderTo: { x: 100, y: 10 } }
              ]}>
                <div style={{width: 200, height: 20}}><Slider value={50} max={100} onChange={()=>{}} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 2px (track)", x: 0, y: 0 }, { n: 3, label: "Text size: N/A", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "combobox",
          title: "Combobox Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 80, leaderTo: { x: 100, y: 20 } }
              ]}>
                <div style={{width: 200, height: 40}}><Combobox options={[{label: "Item", value: "1"}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "date-picker",
          title: "Date Picker Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 80, leaderTo: { x: 100, y: 20 } }
              ]}>
                <div style={{width: 200, height: 40}}><DatePicker /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "calendar",
          title: "Calendar Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={400} rects={[{ x: 0, y: 0, width: 280, height: 320 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 320, y: -40, leaderTo: { x: 280, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 320, y: 360, leaderTo: { x: 140, y: 160 } }
              ]}>
                <div style={{width: 280, height: 320}}><Calendar onSelect={()=>{}} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "attachment",
          title: "Attachment Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={180} rects={[{ x: 0, y: 0, width: 200, height: 100 }]} points={[
                { n: 1, label: "Padding: 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 140, leaderTo: { x: 100, y: 50 } }
              ]}>
                <div style={{width: 200, height: 100}}><Dropzone /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "input-with-icon",
          title: "Input with icon Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 12px 0 36px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 80, leaderTo: { x: 100, y: 20 } }
              ]}>
                <div style={{width: 200, height: 40}}><InputWithIcon placeholder="Search..." /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 12px 0 36px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "payment-&-bank-fields",
          title: "Payment & Bank Fields Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 200, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 12px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 80, leaderTo: { x: 100, y: 20 } }
              ]}>
                <div style={{width: 200, height: 40}}><Input placeholder="Card number" /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 12px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Data Display",
      components: [
        {
          id: "card",
          title: "Card Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={200} rects={[{ x: 0, y: 0, width: 250, height: 120 }]} points={[
                { n: 1, label: "Padding: 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 12px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 290, y: 160, leaderTo: { x: 125, y: 60 } }
              ]}>
                <div style={{width: 250, height: 120}}><Card>Card Content</Card></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 12px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "badge",
          title: "Badge Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={104} rects={[{ x: 0, y: 0, width: 60, height: 24 }]} points={[
                { n: 1, label: "Padding: 0 8px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 12px", x: 100, y: -40, leaderTo: { x: 60, y: 0 } },
                { n: 3, label: "Text size: 12px", x: 100, y: 64, leaderTo: { x: 30, y: 12 } }
              ]}>
                <div style={{width: 60, height: 24}}><Badge>Badge</Badge></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 8px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 12px", x: 0, y: 0 }, { n: 3, label: "Text size: 12px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "data-table",
          title: "Data Table Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={230} rects={[{ x: 0, y: 0, width: 300, height: 150 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 340, y: 190, leaderTo: { x: 150, y: 75 } }
              ]}>
                <div style={{width: 300, height: 150}}><DataTable columns={[{key:"id", header:"ID"}]} rows={[{id:1}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "table",
          title: "Table Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={200} rects={[{ x: 0, y: 0, width: 300, height: 120 }]} points={[
                { n: 1, label: "Padding: 12px 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 340, y: 160, leaderTo: { x: 150, y: 60 } }
              ]}>
                <div style={{width: 300, height: 120}}><Table columns={[{key:"1", header:"1"}]} rows={[]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 12px 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "item",
          title: "Item Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={140} rects={[{ x: 0, y: 0, width: 250, height: 60 }]} points={[
                { n: 1, label: "Padding: 12px 0", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 16px (Title)", x: 290, y: 100, leaderTo: { x: 125, y: 30 } }
              ]}>
                <div style={{width: 250, height: 60}}><Item title="Title" description="Desc" /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 12px 0", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Title)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "description-list",
          title: "Description List Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={140} rects={[{ x: 0, y: 0, width: 250, height: 60 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 290, y: 100, leaderTo: { x: 125, y: 30 } }
              ]}>
                <div style={{width: 250, height: 60}}><DescriptionList items={[{term: "Label", value: "Value"}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "avatar",
          title: "Avatar Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 40, height: 40 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 50%", x: 80, y: -40, leaderTo: { x: 40, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 80, y: 80, leaderTo: { x: 20, y: 20 } }
              ]}>
                <div style={{width: 40, height: 40}}><Avatar name="AB" /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 50%", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "progress",
          title: "Progress Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={88} rects={[{ x: 0, y: 0, width: 200, height: 8 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 4px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: N/A", x: 240, y: 48, leaderTo: { x: 100, y: 4 } }
              ]}>
                <div style={{width: 200, height: 8}}><Progress value={50} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 4px", x: 0, y: 0 }, { n: 3, label: "Text size: N/A", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Charts",
      components: [
        {
          id: "line-chart",
          title: "Line Chart Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={280} rects={[{ x: 0, y: 0, width: 300, height: 200 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 12px (Axis)", x: 340, y: 240, leaderTo: { x: 150, y: 100 } }
              ]}>
                <div style={{width: 300, height: 200}}><div className="cds-chart-placeholder" style={{width: "100%", height: "100%", background: "var(--core-color-bg-page)", borderRadius: 8, padding: 16, border: "1px solid var(--core-color-border-subtle)"}}>Line Chart</div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 12px (Axis)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "bar-chart",
          title: "Bar Chart Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={280} rects={[{ x: 0, y: 0, width: 300, height: 200 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 12px (Axis)", x: 340, y: 240, leaderTo: { x: 150, y: 100 } }
              ]}>
                <div style={{width: 300, height: 200}}><div className="cds-chart-placeholder" style={{width: "100%", height: "100%", background: "var(--core-color-bg-page)", borderRadius: 8, padding: 16, border: "1px solid var(--core-color-border-subtle)"}}>Bar Chart</div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 12px (Axis)", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Disclosure",
      components: [
        {
          id: "collapsible",
          title: "Collapsible Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={180} rects={[{ x: 0, y: 0, width: 250, height: 100 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 16px", x: 290, y: 140, leaderTo: { x: 125, y: 50 } }
              ]}>
                <div style={{width: 250, height: 100}}><Collapsible trigger={(open, toggle) => <button onClick={toggle}>Trigger</button>}>Content</Collapsible></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "accordion",
          title: "Accordion Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={180} rects={[{ x: 0, y: 0, width: 250, height: 100 }]} points={[
                { n: 1, label: "Padding: 16px 20px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 16px", x: 290, y: 140, leaderTo: { x: 125, y: 50 } }
              ]}>
                <div style={{width: 250, height: 100}}><Accordion items={[{id:"1", title:"Title", content:"Content"}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px 20px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "separator",
          title: "Separator Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={81} rects={[{ x: 0, y: 0, width: 250, height: 1 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: N/A", x: 290, y: 41, leaderTo: { x: 125, y: 0 } }
              ]}>
                <div style={{width: 250, height: 1}}><Separator /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: N/A", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "skeleton",
          title: "Skeleton Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={100} rects={[{ x: 0, y: 0, width: 200, height: 20 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 4px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: N/A", x: 240, y: 60, leaderTo: { x: 100, y: 10 } }
              ]}>
                <div style={{width: 200, height: 20}}><Skeleton width={200} height={20} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 4px", x: 0, y: 0 }, { n: 3, label: "Text size: N/A", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Navigation",
      components: [
        {
          id: "navigation-menu",
          title: "Navigation Menu Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={128} rects={[{ x: 0, y: 0, width: 300, height: 48 }]} points={[
                { n: 1, label: "Padding: 0 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 340, y: 88, leaderTo: { x: 150, y: 24 } }
              ]}>
                <div style={{width: 300, height: 48}}><NavigationMenu items={[{label: "Home", current: true}, {label: "About"}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "sidebar",
          title: "Sidebar Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={380} rects={[{ x: 0, y: 0, width: 200, height: 300 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 340, leaderTo: { x: 100, y: 150 } }
              ]}>
                <div style={{width: 200, height: 300}}><AppSidebar items={[]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "tabs",
          title: "Tabs Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 250, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 290, y: 80, leaderTo: { x: 125, y: 20 } }
              ]}>
                <div style={{width: 250, height: 40}}><Tabs items={[{id: "1", label: "Tab 1"}]} defaultId="1" /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "breadcrumb",
          title: "Breadcrumb Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={104} rects={[{ x: 0, y: 0, width: 250, height: 24 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 290, y: 64, leaderTo: { x: 125, y: 12 } }
              ]}>
                <div style={{width: 250, height: 24}}><Breadcrumb items={[{label: "Home"}, {label: "Page"}]} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "stepper",
          title: "Stepper Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 300, height: 40 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 340, y: 80, leaderTo: { x: 150, y: 20 } }
              ]}>
                <div style={{width: 300, height: 40}}><Stepper steps={[{label: "Step 1", status: "current"}]} currentIndex={0} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "pagination",
          title: "Pagination Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 250, height: 40 }]} points={[
                { n: 1, label: "Padding: 0 8px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 6px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 290, y: 80, leaderTo: { x: 125, y: 20 } }
              ]}>
                <div style={{width: 250, height: 40}}><Pagination page={1} pageCount={5} onChange={()=>{}} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0 8px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 6px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Feedback",
      components: [
        {
          id: "alert",
          title: "Alert Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={160} rects={[{ x: 0, y: 0, width: 300, height: 80 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 340, y: 120, leaderTo: { x: 150, y: 40 } }
              ]}>
                <div style={{width: 300, height: 80}}><Alert tone="info" title="Info">Message</Alert></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "toast",
          title: "Toast Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={160} rects={[{ x: 0, y: 0, width: 300, height: 80 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 340, y: 120, leaderTo: { x: 150, y: 40 } }
              ]}>
                <div style={{width: 300, height: 80}}><Toast tone="success" title="Success" onClose={()=>{}} /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "toast-manager",
          title: "Toast Manager Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={160} rects={[{ x: 0, y: 0, width: 300, height: 80 }]} points={[
                { n: 1, label: "Padding: 24px (viewport)", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: N/A", x: 340, y: 120, leaderTo: { x: 150, y: 40 } }
              ]}>
                <div style={{width: 300, height: 80}}><div className="cds-toast-manager-demo">Toast Manager</div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px (viewport)", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: N/A", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "empty",
          title: "Empty Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={230} rects={[{ x: 0, y: 0, width: 300, height: 150 }]} points={[
                { n: 1, label: "Padding: 48px 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 16px (Title)", x: 340, y: 190, leaderTo: { x: 150, y: 75 } }
              ]}>
                <div style={{width: 300, height: 150}}><Empty title="No data" description="Empty state" /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 48px 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Title)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "spinner",
          title: "Spinner Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={120} rects={[{ x: 0, y: 0, width: 40, height: 40 }]} points={[
                { n: 1, label: "Padding: 0px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 50%", x: 80, y: -40, leaderTo: { x: 40, y: 0 } },
                { n: 3, label: "Text size: N/A", x: 80, y: 80, leaderTo: { x: 20, y: 20 } }
              ]}>
                <div style={{width: 40, height: 40}}><Spinner /></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 0px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 50%", x: 0, y: 0 }, { n: 3, label: "Text size: N/A", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    },
    {
      title: "Overlays",
      components: [
        {
          id: "modal",
          title: "Modal Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={230} rects={[{ x: 0, y: 0, width: 300, height: 150 }]} points={[
                { n: 1, label: "Padding: 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 12px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 16px (Title)", x: 340, y: 190, leaderTo: { x: 150, y: 75 } }
              ]}>
                <div style={{width: 300, height: 150}}><div className="cds-modal" style={{position:"relative", width:300, margin:0, transform:"none", top:0, left:0}}><h2 className="cds-modal-title">Title</h2><div className="cds-modal-body">Body</div></div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 12px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Title)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "confirmation-dialog",
          title: "Confirmation Dialog Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={180} rects={[{ x: 0, y: 0, width: 300, height: 100 }]} points={[
                { n: 1, label: "Padding: 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 12px", x: 340, y: -40, leaderTo: { x: 300, y: 0 } },
                { n: 3, label: "Text size: 16px (Title)", x: 340, y: 140, leaderTo: { x: 150, y: 50 } }
              ]}>
                <div style={{width: 300, height: 100}}><div className="cds-modal" style={{position:"relative", width:300, margin:0, transform:"none", top:0, left:0}}><h2 className="cds-modal-title">Confirm?</h2></div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 12px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Title)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "drawer",
          title: "Drawer Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={280} rects={[{ x: 0, y: 0, width: 250, height: 200 }]} points={[
                { n: 1, label: "Padding: 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 16px (Title)", x: 290, y: 240, leaderTo: { x: 125, y: 100 } }
              ]}>
                <div style={{width: 250, height: 200}}><div className="cds-drawer" style={{position:"relative", width:250, height:200, transform:"none", top:0, left:0}}><div className="cds-drawer-header"><h2 className="cds-drawer-title">Drawer</h2></div></div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Title)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "slideover",
          title: "Slideover Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={280} rects={[{ x: 0, y: 0, width: 250, height: 200 }]} points={[
                { n: 1, label: "Padding: 24px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 0px", x: 290, y: -40, leaderTo: { x: 250, y: 0 } },
                { n: 3, label: "Text size: 16px (Title)", x: 290, y: 240, leaderTo: { x: 125, y: 100 } }
              ]}>
                <div style={{width: 250, height: 200}}><div className="cds-drawer" style={{position:"relative", width:250, height:200, transform:"none", top:0, left:0}}><div className="cds-drawer-header">Slideover</div></div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 24px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 0px", x: 0, y: 0 }, { n: 3, label: "Text size: 16px (Title)", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "dropdown-menu",
          title: "Dropdown Menu Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={160} rects={[{ x: 0, y: 0, width: 150, height: 80 }]} points={[
                { n: 1, label: "Padding: 8px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 190, y: -40, leaderTo: { x: 150, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 190, y: 120, leaderTo: { x: 75, y: 40 } }
              ]}>
                <div style={{width: 150, height: 80}}><div className="cds-dropdown-menu" style={{position:"relative", width:150, transform:"none", top:0, left:0}}><div className="cds-dropdown-item">Item 1</div></div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 8px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "tooltip",
          title: "Tooltip Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={112} rects={[{ x: 0, y: 0, width: 80, height: 32 }]} points={[
                { n: 1, label: "Padding: 4px 8px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 4px", x: 120, y: -40, leaderTo: { x: 80, y: 0 } },
                { n: 3, label: "Text size: 12px", x: 120, y: 72, leaderTo: { x: 40, y: 16 } }
              ]}>
                <div style={{width: 80, height: 32}}><div className="cds-tooltip" style={{position:"relative", width:80, transform:"none", top:0, left:0, opacity:1}}>Tooltip</div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 4px 8px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 4px", x: 0, y: 0 }, { n: 3, label: "Text size: 12px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "popover",
          title: "Popover Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={160} rects={[{ x: 0, y: 0, width: 150, height: 80 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 190, y: -40, leaderTo: { x: 150, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 190, y: 120, leaderTo: { x: 75, y: 40 } }
              ]}>
                <div style={{width: 150, height: 80}}><div className="cds-popover" style={{position:"relative", width:150, transform:"none", top:0, left:0, opacity:1}}>Popover</div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        },
        {
          id: "hover-card",
          title: "Hover Card Anatomy",
          content: (
            <div className="site-panel site-panel--flush">
              <Anatomy height={180} rects={[{ x: 0, y: 0, width: 200, height: 100 }]} points={[
                { n: 1, label: "Padding: 16px", x: -40, y: 10, leaderTo: { x: 0, y: 10 } },
                { n: 2, label: "Corner radius: 8px", x: 240, y: -40, leaderTo: { x: 200, y: 0 } },
                { n: 3, label: "Text size: 14px", x: 240, y: 140, leaderTo: { x: 100, y: 50 } }
              ]}>
                <div style={{width: 200, height: 100}}><div className="cds-popover" style={{position:"relative", width:200, transform:"none", top:0, left:0, opacity:1}}>Hover Card</div></div>
              </Anatomy>
              <div style={{ padding: "0 24px" }}><AnatomyLegend points={[{ n: 1, label: "Padding: 16px", x: 0, y: 0 }, { n: 2, label: "Corner radius: 8px", x: 0, y: 0 }, { n: 3, label: "Text size: 14px", x: 0, y: 0 }]} /></div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div>
      <h1 className="site-h1">Component Anatomy</h1>
      <p className="site-lede">Detailed structural specifications for all components.</p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        {sections.map((group) => (
          <div key={group.title}>
            <h2 className="site-section-title" style={{ fontSize: 32 }}>{group.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 64, marginTop: 32 }}>
              {group.components.map((c) => (
                <div key={c.id} id={c.id}>
                  <h3 className="site-section-title" style={{ fontSize: 16, border: "none", padding: "0 24px" }}>{c.title}</h3>
                  {c.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
