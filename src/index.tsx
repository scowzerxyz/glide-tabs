import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'motion/react';
import type { TabContextValue, TabGroupProps, TabProps } from './types';

export type { TabGroupProps, TabProps, TabVariant } from './types';

const TabContext = createContext<TabContextValue | null>(null);

function useTabContext() {
  const ctx = useContext(TabContext);
  if (!ctx) {
    throw new Error('<Tab> must be used within a <TabGroup>');
  }
  return ctx;
}

export function TabGroup({
  value,
  onChange,
  variant = 'pill',
  maxWidth,
  className,
  style,
  children,
}: TabGroupProps) {
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const registerTab = useCallback(
    (tabValue: string, el: HTMLButtonElement | null) => {
      if (el) {
        tabRefs.current.set(tabValue, el);
      } else {
        tabRefs.current.delete(tabValue);
      }
    },
    [],
  );

  const updateIndicator = useCallback(() => {
    const activeTab = tabRefs.current.get(value);
    const container = containerRef.current;
    if (!activeTab || !container) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    setIndicator({
      left: tabRect.left - containerRect.left + container.scrollLeft,
      width: tabRect.width,
    });
  }, [value]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      updateIndicator();
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [updateIndicator]);

  const contextValue: TabContextValue = {
    activeValue: value,
    variant,
    onSelect: onChange,
    registerTab,
  };

  const containerStyle: React.CSSProperties = {
    ...style,
    ...(maxWidth != null ? { maxWidth } : {}),
  };

  return (
    <TabContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        data-glide-root=""
        data-variant={variant}
        className={className}
        style={containerStyle}
        role="tablist"
      >
        {indicator && (
          <motion.div
            data-glide-indicator=""
            data-variant={variant}
            layoutId="glide-indicator"
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 35,
              mass: 0.8,
            }}
          />
        )}
        {children}
      </div>
    </TabContext.Provider>
  );
}

export function Tab({
  value,
  disabled = false,
  className,
  children,
}: TabProps) {
  const { activeValue, onSelect, registerTab } = useTabContext();
  const ref = useRef<HTMLButtonElement>(null);
  const isActive = activeValue === value;

  useEffect(() => {
    registerTab(value, ref.current);
    return () => registerTab(value, null);
  }, [value, registerTab]);

  return (
    <button
      ref={ref}
      data-glide-tab=""
      data-active={isActive}
      data-disabled={disabled}
      className={className}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => {
        if (!disabled) onSelect(value);
      }}
    >
      {children}
    </button>
  );
}
