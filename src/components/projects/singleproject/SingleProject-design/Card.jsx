import { cn } from "@/lib/utils";

const Card = ({ children, className, style }) => {
  return (
    <div
      className={cn(
        "relative isolate rounded-2xl overflow-hidden w-full shadow-lg border border-[#423f8480] border-b-[#2b2b2b80]",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(221, 204, 66, 0.30) -106.64%, rgba(8, 7, 17, 0.30) 16.61%)",
        filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.75))",
        ...style,
      }}
    >
      {/* borders */}
      {/* <div className="absolute inset-0 border-t border-t-[#423f8480] border-b-[#2B2B2B] rounded-2xl" /> */}
      {/* <div className="absolute inset-0 border border-[#2b2b2b80] rounded-2xl" /> */}
      {/* <div className="absolute inset-0 project-card-left-border"></div>
      <div className="absolute inset-0 project-card-right-border"></div>
      <div className="absolute left-0 right-0 top-0 h-[80%] border border-b-0 border-[#423f8480] rounded-tr-2xl rounded-tl-2xl" />
      <div className="absolute inset-0 border-b border-b-[#2b2b2b80] rounded-bl-2xl rounded-br-2xl" /> */}

      <div className="w-full relative z-50">{children}</div>
    </div>
  );
};

export default Card;
