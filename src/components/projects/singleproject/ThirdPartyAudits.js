import Card from "./SingleProject-design/Card";
// import Shield from "../../../../public/assets/icons/shield.svg";
// import CheckFill from "../../../../public/assets/icons/check-fill.svg";
import Accordion from "./SingleProject-design/Accordion";
import { Warning } from "@mui/icons-material";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GradientButton from "./SingleProject-design/GradientButton";
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
          <Image
            src="/assets/icons/shield.svg"
            alt="Shield Icon"
            width={24}
            height={24}
          />
          <p className="capitalize font-bold sm:text-base text-sm text-white">
            3rd party audits
          </p>
        </div>
      </div>

      <div className="p-3 space-y-2 ">
        <p className="text-md font-semibold text-white opacity-50  text-center py-2">
          Check the latest third-party audit details on Dexscreener.
        </p>
        <div className="flex justify-center py-4">
          <GradientButton
            onClick={() =>
              window.open(
                "https://dexscreener.com/ethereum/0x1ffec7119e315b15852557f654ae0052f76e6ae1",
                "_blank"
              )
            }
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            View Audit on Dexscreener
          </GradientButton>
        </div>
      </div>
    </Card>
  );
};
export default ThirdPartyAudits;
