import { HeroDemo, VariantDemo, ScrollDemo, CopyButton } from "./demo";

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <a
          href="https://github.com/gregball/glide-tabs"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="title">Glide Tabs</h1>
          <p className="subtitle">
            An animated tab group component for React.
          </p>
          <div className="hero-demo">
            <HeroDemo />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Installation</h2>
          <div className="code-block">
            <code>npm install glide-tabs motion</code>
            <CopyButton text="npm install glide-tabs motion" />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Usage</h2>
          <div className="code-block wide">
            <pre>
              <code>{`import { TabGroup, Tab } from 'glide-tabs';
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
}`}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Variants</h2>
          <p className="section-desc">
            Switch between <code>pill</code> and{" "}
            <code>underline</code> styles.
          </p>
          <VariantDemo />
        </section>

        <section className="section">
          <h2 className="section-title">Scrollable</h2>
          <p className="section-desc">
            Set a <code>maxWidth</code> to enable horizontal scrolling when tabs
            overflow.
          </p>
          <ScrollDemo />
        </section>

        <section className="section">
          <h2 className="section-title">Theming</h2>
          <p className="section-desc">
            Customize with CSS custom properties. Override them on{" "}
            <code>[data-glide-root]</code>.
          </p>
          <div className="code-block wide">
            <pre>
              <code>{`[data-glide-root] {
  --glide-bg: #f4f4f5;
  --glide-active-bg: #ffffff;
  --glide-text: #71717a;
  --glide-active-text: #09090b;
  --glide-border-radius: 8px;
  --glide-padding: 4px;
  --glide-tab-padding: 8px 16px;
  --glide-font-size: 14px;
  --glide-underline-color: #09090b;
  --glide-underline-height: 2px;
}`}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">API</h2>

          <h3 className="api-heading">
            <code>{"<TabGroup>"}</code>
          </h3>
          <div className="api-table-wrapper">
            <table className="api-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>value</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>—</td>
                  <td>Active tab value (controlled)</td>
                </tr>
                <tr>
                  <td>
                    <code>onChange</code>
                  </td>
                  <td>
                    <code>{"(value: string) => void"}</code>
                  </td>
                  <td>—</td>
                  <td>Called when a tab is clicked</td>
                </tr>
                <tr>
                  <td>
                    <code>variant</code>
                  </td>
                  <td>
                    <code>{'"pill" | "underline"'}</code>
                  </td>
                  <td>
                    <code>{'"pill"'}</code>
                  </td>
                  <td>Visual style of the indicator</td>
                </tr>
                <tr>
                  <td>
                    <code>maxWidth</code>
                  </td>
                  <td>
                    <code>number | string</code>
                  </td>
                  <td>—</td>
                  <td>Max width before scrolling</td>
                </tr>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>—</td>
                  <td>Custom class on the container</td>
                </tr>
                <tr>
                  <td>
                    <code>style</code>
                  </td>
                  <td>
                    <code>CSSProperties</code>
                  </td>
                  <td>—</td>
                  <td>Inline style overrides</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="api-heading">
            <code>{"<Tab>"}</code>
          </h3>
          <div className="api-table-wrapper">
            <table className="api-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>value</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>—</td>
                  <td>Unique tab identifier</td>
                </tr>
                <tr>
                  <td>
                    <code>disabled</code>
                  </td>
                  <td>
                    <code>boolean</code>
                  </td>
                  <td>
                    <code>false</code>
                  </td>
                  <td>Disables the tab</td>
                </tr>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>—</td>
                  <td>Custom class on the tab button</td>
                </tr>
                <tr>
                  <td>
                    <code>children</code>
                  </td>
                  <td>
                    <code>ReactNode</code>
                  </td>
                  <td>—</td>
                  <td>Tab label content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Built by{" "}
          <a
            href="https://github.com/gregball"
            target="_blank"
            rel="noopener noreferrer"
          >
            Greg Ball
          </a>
        </p>
      </footer>
    </div>
  );
}
