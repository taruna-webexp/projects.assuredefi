"use client";
import Card from "./SingleProject-design/Card";
// import FolderChart from "../../../../public/assets/icons/folder-chart-fill.svg";
// import UpArrow from "../../../../public/assets/icons/up-arrow.svg";
// import DownArrow from "../../../../public/assets/icons/down-arrow.svg";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import {
  crypto1D,
  crypto1M,
  crypto1Y,
  crypto3M,
  crypto7D,
} from "@/data/project";
import { useState } from "react";
import { cn } from "@/lib/utils";
const TradingView = () => {
  const dataMap = {
    "1d": crypto1D,
    "7d": crypto7D,
    "1m": crypto1M,
    "3m": crypto3M,
    "1y": crypto1Y,
  };

  const [activeFilter, setActiveFilter] = useState("1m");

  return (
    <Card
      className="w-full relative"
      style={{
        background: "rgba(4, 3, 17, 0.30)",
        filter: "drop-shadow(0px 4px 20px #000)",
      }}
    >
      <div className="flex items-center justify-between gap-2 p-4 border-b border-b-[#423f8480]">
        <div className="flex items-center gap-2">
          {/* <FolderChart /> */}
          <p className="capitalize font-bold sm:text-base text-sm text-white">
            Trading
          </p>
        </div>

        <p className="text-sm font-normal italic text-[#727272]">
          Via Pancake Swap
        </p>
      </div>

      <div className="px-3 py-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-xl font-bold text-white">
            $0.00547531{" "}
            <span className="text-[#F66262] text-sm font-semibold">-7.60%</span>
          </p>
          <div className="flex items-center gap-3">
            {["1d", "7d", "1m", "3m", "1y", "ytd"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "bg-transparent p-0 border-none text-[#F2F1EC] font-normal text-sm uppercase opacity-50",
                  filter === activeFilter && "opacity-100"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer height="100%" width="100%">
            <AreaChart
              data={dataMap[activeFilter]}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              {...{ overflow: "visible" }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00CB6A" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#00CB6A" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                interval={"preserveStartEnd"}
                tick={{ fontSize: "12px", fill: "#5D5C5D" }}
              />
              <CartesianGrid
                strokeDasharray="10 10"
                horizontal={true}
                vertical={false}
                stroke="#3E3E3E"
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#00CB6A"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            className="w-full border border-[#5EDE99] rounded-md flex items-center gap-2 text-base font-bold text-white p-3.5 justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 9.38%, rgba(255, 255, 255, 0.30) 100%), #143523",
            }}
          >
            {/* <UpArrow /> Buy */}
          </button>
          <button
            className="w-full border border-[#F66262] rounded-md flex items-center gap-2 text-base font-bold text-white p-3.5 justify-center"
            style={{
              background:
                "linear-gradient(180deg, #F66262 -53.12%, #180909 50%)",
            }}
          >
            {/* <DownArrow /> Sell */}
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-base font-bold text-white">Overview</p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  MKT CAP
                </p>
                <p className="text-sm font-bold text-white">$8.78B</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  Liquidity
                </p>
                <p className="text-sm font-bold text-white">$74.6M</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  HOLDERS
                </p>
                <p className="text-sm font-bold text-white">$1.2M</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  24H VOLUME
                </p>
                <p className="text-sm font-bold text-white">142.K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default TradingView;
