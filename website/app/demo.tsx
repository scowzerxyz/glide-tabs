"use client";

import { useState } from "react";
import { TabGroup, Tab } from "glide-tabs";
import "glide-tabs/styles.css";

const allTabs = [
  "Overview",
  "Features",
  "Pricing",
  "Documentation",
  "Changelog",
  "Support",
  "Blog",
  "FAQ",
];

export function HeroDemo() {
  const [active, setActive] = useState("Overview");

  return (
    <TabGroup value={active} onChange={setActive} variant="pill">
      <Tab value="Overview">Overview</Tab>
      <Tab value="Features">Features</Tab>
      <Tab value="Pricing">Pricing</Tab>
      <Tab value="Documentation">Documentation</Tab>
    </TabGroup>
  );
}

export function VariantDemo() {
  const [variant, setVariant] = useState<"pill" | "underline">("pill");
  const [active, setActive] = useState("Overview");

  return (
    <div className="demo-block">
      <div className="demo-controls">
        <button
          className={`control-btn ${variant === "pill" ? "active" : ""}`}
          onClick={() => setVariant("pill")}
        >
          Pill
        </button>
        <button
          className={`control-btn ${variant === "underline" ? "active" : ""}`}
          onClick={() => setVariant("underline")}
        >
          Underline
        </button>
      </div>
      <div className="demo-preview">
        <TabGroup value={active} onChange={setActive} variant={variant}>
          <Tab value="Overview">Overview</Tab>
          <Tab value="Features">Features</Tab>
          <Tab value="Pricing">Pricing</Tab>
          <Tab value="Documentation">Documentation</Tab>
        </TabGroup>
      </div>
    </div>
  );
}

export function ScrollDemo() {
  const [variant, setVariant] = useState<"pill" | "underline">("pill");
  const [active, setActive] = useState("Overview");

  return (
    <div className="demo-block">
      <div className="demo-controls">
        <button
          className={`control-btn ${variant === "pill" ? "active" : ""}`}
          onClick={() => setVariant("pill")}
        >
          Pill
        </button>
        <button
          className={`control-btn ${variant === "underline" ? "active" : ""}`}
          onClick={() => setVariant("underline")}
        >
          Underline
        </button>
      </div>
      <div className="demo-preview">
        <TabGroup
          value={active}
          onChange={setActive}
          variant={variant}
          maxWidth={360}
        >
          {allTabs.map((tab) => (
            <Tab key={tab} value={tab}>
              {tab}
            </Tab>
          ))}
        </TabGroup>
      </div>
      <p className="demo-hint">Scroll horizontally to see more tabs</p>
    </div>
  );
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="copy-btn"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}
