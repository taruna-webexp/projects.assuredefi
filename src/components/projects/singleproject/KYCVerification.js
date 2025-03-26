import { Warning } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Card from "./SingleProject-design/Card";
import CheckFill from "../../../../public/assets/icons/check-fill.svg";
import GradientButton from "./SingleProject-design/GradientButton";
import Accordion from "./SingleProject-design/Accordion";
import CountryTier from "../modal/CountryTier";
import { renderControlOver } from "../varificationdetail/KycDetailData";
import SocialLinks from "@/components/Sociallinks/SocialLinks";

const KYCVerification = ({ project, handleCertificateModalOpen }) => {
  return (
    <div className="relative">
      <Card
        className="w-full"
        style={{
          background: "rgba(4, 3, 17, 0.40)",
          filter:
            project?.kycStatus !== "Approved"
              ? "blur(5px)"
              : "drop-shadow(0px 4px 20px #000)",
        }}
      >
        <div className="flex items-center justify-between gap-2 p-4 border-b border-b-[#423f8480] flex-wrap">
          <div className="flex items-center gap-2">
            <div className="relative size-6">
              <Image
                alt="contact"
                src="/assets/icons/contact-shield.png"
                fill
              />
            </div>
            <p className="capitalize font-bold sm:text-base text-sm text-white">
              KYC Verification
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project?.kycCertificate && (
              <GradientButton
                className="button-under-kyc"
                onClick={handleCertificateModalOpen}
              >
                Certificate
              </GradientButton>
            )}

            {project?.nftUrl && (
              <Link href={project.nftUrl} target="_blank">
                <GradientButton>NFT</GradientButton>
              </Link>
            )}
          </div>
        </div>

        {project?.kycStatus === "Approved" && (
          <div className="p-3 space-y-2">
            {project?.verifiyMembersList?.map((verifiy, index) => (
              <Accordion
                key={index}
                title={
                  <div className="flex items-center gap-1.5">
                    <div className="relative size-4">
                      <Image
                        src="/assets/verified-beg.png"
                        alt="verified"
                        width={32}
                        height={32}
                      />
                    </div>
                    <p className="sm:text-lg text-sm font-normal text-[#DDCC42]">
                      {verifiy.name || "N/A"}
                    </p>
                    <CheckFill />
                  </div>
                }
                actionTitle={verifiy.role || "N/A"}
                expandByDefault
                items={[
                  {
                    title: "Has control over:",
                    details: (
                      <div className="flex items-center gap-2">
                        {renderControlOver(verifiy.controlOver)}
                      </div>
                    ),
                  },
                  {
                    title: (
                      <div className="flex items-center gap-1">
                        Country Tier: <CountryTier />
                      </div>
                    ),
                    details: (
                      <div className="flex items-center gap-px">
                        <Image
                          src="/assets/icons/location-pin.svg"
                          alt="location"
                          width={16}
                          height={16}
                        />
                        <span className="text-sm font-bold text-white">
                          Tier {verifiy.countryTier || ""}
                        </span>
                      </div>
                    ),
                  },
                  {
                    title: "Verified socials:",
                    details: (
                      <div className="flex items-center gap-3.5">
                        <SocialLinks verifiy={verifiy} />
                      </div>
                    ),
                  },
                ]}
              />
            ))}
          </div>
        )}
      </Card>

      {project?.kycStatus !== "Approved" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <button
            onClick={() =>
              window.open("https://www.assuredefi.com/#get-kyc", "_blank")
            }
            className="p-2 rounded-lg border border-[#F66262] text-[#F66262] font-bold text-base flex items-center gap-1"
            style={{ background: "rgba(7, 6, 14, 0.40)" }}
          >
            <Warning className="size-5" /> No KYC
          </button>
        </div>
      )}
    </div>
  );
};

export default KYCVerification;
