# Glide Tabs

An animated tab group component for React, powered by [motion.dev](https://motion.dev).

## Installation

```bash
npm install glide-tabs motion
```

## Quick Start

```tsx
import { useState } from 'react';
import { TabGroup, Tab } from 'glide-tabs';
import 'glide-tabs/styles.css';

function App() {
  const [active, setActive] = useState('overview');

  return (
    <TabGroup value={active} onChange={setActive}>
      <Tab value="overview">Overview</Tab>
      <Tab value="features">Features</Tab>
      <Tab value="pricing">Pricing</Tab>
    </TabGroup>
  );
}
```

## Variants

Choose between `pill` (default) and `underline` indicator styles:

```tsx
<TabGroup value={active} onChange={setActive} variant="underline">
  <Tab value="tab1">Tab 1</Tab>
  <Tab value="tab2">Tab 2</Tab>
</TabGroup>
```

## Scrollable Tabs

Set `maxWidth` to constrain the width and enable horizontal scrolling:

```tsx
<TabGroup value={active} onChange={setActive} maxWidth={400}>
  <Tab value="a">Overview</Tab>
  <Tab value="b">Features</Tab>
  <Tab value="c">Pricing</Tab>
  <Tab value="d">Documentation</Tab>
  <Tab value="e">Changelog</Tab>
  <Tab value="f">Support</Tab>
</TabGroup>
```

## API

### `<TabGroup>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | Active tab value (controlled) |
| `onChange` | `(value: string) => void` | — | Called when a tab is clicked |
| `variant` | `"pill" \| "underline"` | `"pill"` | Visual style of the indicator |
| `maxWidth` | `number \| string` | — | Max width before scrolling |
| `className` | `string` | — | Custom class on the container |
| `style` | `CSSProperties` | — | Inline style overrides |

### `<Tab>`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | Unique tab identifier |
| `disabled` | `boolean` | `false` | Disables the tab |
| `className` | `string` | — | Custom class on the tab button |
| `children` | `ReactNode` | — | Tab label content |

## Theming

Glide Tabs ships a small CSS file with custom properties. Override them to match your design:

```css
[data-glide-root] {
  --glide-bg: #f4f4f5;
  --glide-active-bg: #ffffff;
  --glide-text: #71717a;
  --glide-active-text: #09090b;
  --glide-border-radius: 8px;
  --glide-padding: 4px;
  --glide-tab-padding: 8px 16px;
  --glide-font-size: 14px;
  --glide-font-weight: 500;
  --glide-underline-color: #09090b;
  --glide-underline-height: 2px;
  --glide-indicator-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}
```

## Accessibility

- Uses `role="tablist"` and `role="tab"` with proper `aria-selected`
- Supports keyboard navigation via `tabIndex`
- Focus-visible styling included
- Disabled tabs are properly marked with `aria-disabled`

## License

MIT
