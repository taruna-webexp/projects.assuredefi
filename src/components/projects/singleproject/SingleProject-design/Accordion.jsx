"use client";
import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { cn } from "@/lib/utils";

const Accordion = ({
  title,
  actionTitle,
  items = [],
  expandByDefault = false,
  className,
  style,
}) => {
  const [isExpand, setIsExpand] = useState(expandByDefault);

  return (
    <div
      className={cn(
        "w-full border border-[#2A2A2A] bg-[#0A0916] rounded-xl",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-between gap-2 px-3 py-4">
        {title}

        <button
          className="bg-transparent border-none sm:text-sm text-xs font-bold flex items-center sm:gap-2 gap-1 text-[#F2F1EC]"
          onClick={() => setIsExpand((prev) => !prev)}
        >
          <div className="sm:w-auto">{actionTitle}</div>
          {isExpand ? <ExpandLess /> : <ExpandMore />}
        </button>
      </div>
      {isExpand ? (
        items.length ? (
          <ul>
            {items.map((item) => (
              <li
                key={item.title}
                className="p-2.5 flex flex-wrap gap-2 items-center justify-between border-t border-t-[#292929]"
              >
                <div className="text-white opacity-50 font-semibold sm:text-sm text-xs">
                  {item.title}
                </div>
                {item.details}
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-2.5 text-center border-t border-t-[#292929]">
            N/A
          </div>
        )
      ) : null}
    </div>
  );
};

export default Accordion;
