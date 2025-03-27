"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import Image from "next/image";
import { blockchainNames } from "../BlockChainImages";
import Card from "./SingleProject-design/Card";
import { cn } from "@/lib/utils";

const TradingView = ({ project }) => {
  const [dataMap, setDataMap] = useState({
    "1D": [],
    "7D": [],
    "1M": [],
    "3M": [],
    "1Y": [],
  });
  const [activeFilter, setActiveFilter] = useState("1D");
  const [overViewData, setOverViewData] = useState([]);

  // Memoize the blockchain name to prevent unnecessary recalculations
  const chainName = useMemo(() => {
    return blockchainNames[project.blockchain[0]] || project.blockchain[0];
  }, [project.blockchain]);

  const fetchMarketCap = async () => {
    try {
      const chainId = chainName.charAt(0).toLowerCase() + chainName.slice(1);
      const pairId = project.contractAddress;

      const res = await fetch(
        "https://api.dexscreener.com/latest/dex/pairs/solana/h9d3xhfvmgfoohydepqh4w3mopnvjcrze9vqaihkdqs7"
      );
      const json = await res.json();
      console.log("API Response:", json);
      setOverViewData(json?.pairs?.[0]);
      const priceChange = json?.pairs?.[0]?.priceChange;

      if (priceChange) {
        const formattedData = {
          "1D": [
            { time: "00:00", price: 0 },
            { time: "04:00", price: priceChange.m5 },
            { time: "08:00", price: priceChange.h1 },
            { time: "12:00", price: priceChange.h6 },
            { time: "16:00", price: priceChange.h24 },
            { time: "20:00", price: priceChange.h24 },
            { time: "23:59", price: priceChange.h24 },
          ],
        };

        setDataMap(formattedData);
        activeFilter("1d");
      }
    } catch (error) {
      console.error("Error fetching market cap:", error);
    }
  };

  useEffect(() => {
    fetchMarketCap();
  }, []);

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
          <Image
            src="/assets/icons/folder-chart-fill.svg"
            alt="Shield Icon"
            width={24}
            height={24}
          />
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
            {overViewData?.priceUsd}

            <span className="text-[#F66262] text-sm font-semibold">
              {" "}
              {overViewData?.priceChange?.h24}{" "}
            </span>
          </p>
          <div className="flex items-center gap-3">
            {["1D", "7d", "1m", "3m", "1y", "ytd"].map((filter) => (
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
                horizontal
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
          <a href={overViewData?.url} target="_blank" rel="noopener noreferrer">
            <button
              className="w-full border border-[#5EDE99] rounded-md flex items-center gap-2 text-base font-bold text-white p-3.5 justify-center"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 9.38%, rgba(255, 255, 255, 0.30) 100%), #143523",
              }}
            >
              <Image
                src="/assets/icons/up-arrow.svg"
                alt="Shield Icon"
                width={24}
                height={24}
              />
              Buy
            </button>
          </a>
          <a href={overViewData?.url} target="_blank" rel="noopener noreferrer">
            <button
              className="w-full border border-[#F66262] rounded-md flex items-center gap-2 text-base font-bold text-white p-3.5 justify-center"
              style={{
                background:
                  "linear-gradient(180deg, #F66262 -53.12%, #180909 50%)",
              }}
            >
              <Image
                src="/assets/icons/down-arrow.svg"
                alt="Shield Icon"
                width={24}
                height={24}
              />
              Sell
            </button>
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-base font-bold text-white">Overview</p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  MKT CAP
                </p>
                <p className="text-sm font-bold text-white">
                  ${overViewData?.marketCap}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  Liquidity
                </p>
                <p className="text-sm font-bold text-white">
                  ${overViewData?.liquidity?.usd}
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  Price
                </p>
                <p className="text-sm font-bold text-white">
                  ${overViewData?.priceUsd}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white opacity-50 uppercase">
                  24H VOLUME
                </p>
                <p className="text-sm font-bold text-white">
                  {overViewData?.volume?.h24}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TradingView;
