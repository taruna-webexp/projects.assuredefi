import Card from "./SingleProject-design/Card";
// import Shield from "../../../../public/assets/icons/shield.svg";
// import CheckFill from "../../../../public/assets/icons/check-fill.svg";
import Accordion from "./SingleProject-design/Accordion";
import { Warning } from "@mui/icons-material";
import { cn } from "@/lib/utils";
const ThirdPartyAudits = ({ audits }) => {
  return (
    <Card
      className="w-full"
      style={{
        background: "rgba(4, 3, 17, 0.40)",
        filter: "drop-shadow(0px 4px 20px #000)",
      }}
    >
      <div className="flex items-center justify-between gap-2 p-4 border-b border-b-[#423f8480]">
        <div className="flex items-center gap-2">
          {/* <Shield /> */}
          <p className="capitalize font-bold sm:text-base text-sm text-white">
            3rd party audits
          </p>
        </div>
      </div>

      <div className="p-3 space-y-2">
        {audits.map((audit) => (
          <Accordion
            key={audit.title}
            title={
              <p className="text-sm font-semibold text-white opacity-50">
                {audit.title}
              </p>
            }
            actionTitle={
              <div
                className={cn(
                  "flex items-center gap-1.5 text-sm font-bold",
                  audit.status === "alert" && "text-[#F66262]",
                  audit.status === "information" && "text-[#D8BC2D]",
                  audit.status === "success" && "text-[#76BE00]"
                )}
              >
                {["alert", "information"].includes(audit.status) ? (
                  <Warning className="size-5" />
                ) : (
                  ""
                )}{" "}
                {audit.count}
              </div>
            }
            className="rounded-lg"
            style={{
              background:
                audit.status === "alert"
                  ? "linear-gradient(90deg, rgba(7, 6, 14, 0.40) 51.67%, rgba(228, 91, 91, 0.40) 119.68%)"
                  : audit.status === "information"
                    ? "linear-gradient(90deg, rgba(7, 6, 14, 0.40) 51.67%, rgba(221, 204, 66, 0.40) 119.68%)"
                    : "linear-gradient(90deg, rgba(7, 6, 14, 0.40) 51.67%, rgba(118, 190, 0, 0.40) 119.68%)",
            }}
          />
        ))}
      </div>
    </Card>
  );
};
export default ThirdPartyAudits;
