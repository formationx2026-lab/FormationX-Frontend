"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import type { TooltipProps, LegendProps } from "recharts";
import type {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

import { cn } from "@/app/admin-dashboard/lib/utils";

// ------------------------------------
// THEME CONFIG
// ------------------------------------
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within <ChartContainer />");
  }
  return context;
}

// ------------------------------------
// CONTAINER
// ------------------------------------
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-layer]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

// ------------------------------------
// STYLE INJECTION
// ------------------------------------
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, v]) => v.color || v.theme,
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] ?? item.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

// ------------------------------------
// TOOLTIP
// ------------------------------------
const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipProps<ValueType, NameType> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const safePayload = Array.isArray(payload) ? payload : [];

    if (!active || safePayload.length === 0) return null;

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel) return null;

      const item = safePayload[0];
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);

      const value =
        !labelKey && typeof label === "string"
          ? config[label]?.label || label
          : itemConfig?.label;

      if (!value) return null;

      return labelFormatter ? (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, safePayload)}
        </div>
      ) : (
        <div className={cn("font-medium", labelClassName)}>{value}</div>
      );
    }, [
      hideLabel,
      safePayload,
      label,
      labelFormatter,
      labelClassName,
      config,
      labelKey,
    ]);

    const nestLabel = safePayload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel && tooltipLabel}

        <div className="grid gap-1.5">
          {safePayload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);

            const itemPayload =
              typeof item.payload === "object" && item.payload !== null
                ? (item.payload as Record<string, any>)
                : undefined;

            const indicatorColor =
              color ?? itemPayload?.fill ?? item.color;

            return (
              <div
                key={String(item.dataKey ?? index)}
                className="flex items-center gap-2"
              >
                {!hideIndicator && (
                  <div
                    className={cn("rounded-[2px]", {
                      "h-2.5 w-2.5": indicator === "dot",
                      "w-1 h-2.5": indicator === "line",
                      "w-0 h-2.5 border-[1.5px] border-dashed":
                        indicator === "dashed",
                    })}
                    style={{
                      backgroundColor: indicatorColor,
                      borderColor: indicatorColor,
                    }}
                  />
                )}

                <div className="flex flex-1 justify-between">
                  <span className="text-muted-foreground">
                    {itemConfig?.label || item.name}
                  </span>
{formatter &&
 item.value !== undefined &&
 item.name !== undefined ? (
  formatter(
    item.value,
    item.name,
    item,
    index,
    item.payload, // ✅ PASS RAW PAYLOAD
  )
) : item.value !== undefined ? (
  <span className="font-mono font-medium">
    {item.value.toLocaleString()}
  </span>
) : null}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

// ------------------------------------
// LEGEND
// ------------------------------------
const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  const safePayload = Array.isArray(payload) ? payload : [];
  if (safePayload.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {safePayload.map((item, index) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={String(item.value ?? index)}
            className="flex items-center gap-1.5"
          >
            {!hideIcon && itemConfig?.icon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// ------------------------------------
// HELPERS
// ------------------------------------
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== "object" || payload === null) return undefined;

  const p = payload as Record<string, any>;
  const nested =
    typeof p.payload === "object" && p.payload !== null ? p.payload : undefined;

  const resolvedKey =
    typeof p[key] === "string"
      ? p[key]
      : typeof nested?.[key] === "string"
      ? nested[key]
      : key;

  return config[resolvedKey] ?? config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
