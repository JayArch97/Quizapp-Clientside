"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  Rectangle,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

//update this needs to come from server side API, impliment a fetch fucntion and update the data.
// come back to this and see if I should seperate charts into different components?? Might get too chaotic with too many Charts in one file
//
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const secondaryChartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-6)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

const secondaryChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function ChartAreaGradient() {
  return (
    <div className="size-full flex justify-center items-center grid-rows-2">
      <Card className="w-120 h-24 mt-4 mr-4">
        <CardHeader>
          <CardTitle>Area Chart - Gradient</CardTitle>
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                January - June 2026
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="w-120 h-24 mt-4">
        {/* Bar Chart */}
        <CardHeader>
          <CardTitle>Bar Chart Active</CardTitle>
          <CardDescription>random data for the time being</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <ChartContainer config={secondaryChartConfig}>
            <BarChart accessibilityLayer data={secondaryChartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="browser"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  secondaryChartConfig[
                    value as keyof typeof secondaryChartConfig
                  ]?.label
                }
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="visitors"
                strokeWidth={2}
                radius={8}
                activeIndex={2}
                activeBar={({ ...props }) => {
                  return (
                    <Rectangle
                      {...props}
                      fillOpacity={0.8}
                      stroke={props.payload.fill}
                      strokeDasharray={4}
                      strokeDashoffset={4}
                    />
                  );
                }}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
