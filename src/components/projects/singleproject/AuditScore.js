import Image from "next/image";
import Card from "./SingleProject-design/Card";
import ContractAdress from "../varificationdetail/ContractAdress";
import GradientButton from "./SingleProject-design/GradientButton";
import Github from "../../../../public/assets/icons/github.svg";
import PdfFill from "../../../../public/assets/icons/pdf-fill.svg";
import { BlockChainImages } from "../BlockChainImages";
const AuditScore = ({ project }) => {
  return project?.auditReportList?.length > 0 ? (
    project?.auditReportList.map((report, index) => {
      return (
        <>
          <Card
            className="w-full"
            style={{
              background: "rgba(4, 3, 17, 0.40)",
              filter: "drop-shadow(0px 4px 20px #000)",
            }}
          >
            <div className="flex items-center justify-between gap-2 p-4 border-b border-b-[#423f8480]">
              <div className="flex items-center gap-2">
                <div className="size-6 relative">
                  <Image
                    alt="contact"
                    src="/assets/icons/verified-seal.png"
                    fill
                  />
                </div>
                <p className="capitalize font-bold sm:text-base text-sm text-white">
                  Assure Audit Score:{" "}
                  <span className="text-[#76BE00]"> {report.auditScore}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-sm">
                  <p className="text-white font-semibold opacity-50 sm:block hidden">
                    Ecosystem:
                  </p>
                  <div className="flex items-center gap-px font-medium text-white">
                    {project?.blockchain?.length > 0 &&
                      BlockChainImages[project.blockchain[0]] && (
                        <div className="flex items-center justify-end gap-2">
                          <Image
                            width={25}
                            height={100}
                            src={BlockChainImages[project.blockchain[0]]}
                            alt={project.blockchain[0]}
                            className="w-5"
                            priority
                          />
                          {BlockChainImages[project.blockchain[0]] ||
                            project.blockchain[0]}
                        </div>
                      )}
                  </div>
                </div>
                <div className="size-6 relative sm:block hidden">
                  <Image
                    alt="contact"
                    src="/assets/icons/verified-tick.png"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-2.5 border-t border-t-[#292929] flex-wrap gap-2.5">
              <ContractAdress project={project} index={index} />
            </div>
            <div className="space-y-5 p-2.5 border-t border-t-[#292929]">
              <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold text-white opacity-50">
                  Type:
                </p>
                <p className="text-sm font-normal italic text-white">
                  {report.auditDescription
                    ? report.auditDescription
                    : "-------"}
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-2">
                <GradientButton
                  onClick={() => window.open(report.githubReportLink, "_blank")}
                >
                  <Github /> Github
                </GradientButton>

                {report.initialAuditReport &&
                  report.initialAuditReport.map((audit, idx) => (
                    <GradientButton
                      key={audit.url}
                      onClick={() => window.open(audit.url, "_blank")}
                    >
                      <PdfFill />
                      {idx + 1} Initial Report
                    </GradientButton>
                  ))}
                {report.finalAuditReport && (
                  <GradientButton
                    onClick={() =>
                      window.open(report.finalAuditReport[0].url, "_blank")
                    }
                  >
                    <PdfFill />
                    Final Report
                  </GradientButton>
                )}
              </div>
            </div>
          </Card>
        </>
      );
    })
  ) : project?.isProofProject === "Yes" ? (
    <Card
      className="w-full"
      style={{
        background: "rgba(4, 3, 17, 0.40)",
        filter: "drop-shadow(0px 4px 20px #000)",
      }}
    >
      <div className="flex items-center justify-between gap-2 p-4 border-b border-b-[#423f8480]">
        <div className="flex items-center gap-2">
          <div className="size-6 relative">
            <Image alt="contact" src="/assets/icons/verified-seal.png" fill />
          </div>
          <p className="capitalize font-bold sm:text-base text-sm text-white">
            Audit Score
          </p>
        </div>
      </div>
      <div className="text-center my-10">
        <p className="mb-5  text-lg p-2">
          PROOF Projects&#39; Factory Contract is Audited by Source Hat, link to
          the Audit Report can be found here.{" "}
        </p>
        <p className="flex justify-center">
          <GradientButton
            onClick={() =>
              window.open(
                "https://sourcehat.com/audits/ProofStandardWhitelist/",
                "_blank"
              )
            }
          >
            Source Hat Audit
          </GradientButton>
        </p>
      </div>{" "}
    </Card>
  ) : (
    <Card
      className="w-full"
      style={{
        background: "rgba(4, 3, 17, 0.40)",
        filter: "drop-shadow(0px 4px 20px #000)",
      }}
    >
      <div className="flex items-center justify-between gap-2 p-4 border-b border-b-[#423f8480]">
        <div className="flex items-center gap-2">
          <div className="size-6 relative">
            <Image alt="contact" src="/assets/icons/verified-seal.png" fill />
          </div>
          <p className="capitalize font-bold sm:text-base text-sm text-white">
            No Audit Score
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-evenly my-4">
        <p className="mb-2 text-red text-lg">
          No Assure Defi Code Audit Detected
        </p>
      </div>
      <div className=" mb-6 flex items-center justify-center">
        <GradientButton
          onClick={() =>
            window.open("https://www.assuredefi.com/code-audit", "_blank")
          }
        >
          Get One Here
        </GradientButton>
      </div>
    </Card>
  );
};
export default AuditScore;
