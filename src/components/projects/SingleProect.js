"use client";

import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import {
  renderKYCInfo,
  renderSocialLinks,
} from "./varificationdetail/VerificationDetailData";
import ProjectTab from "./tabs/ProjectTab";
import CertificateModal from "./modal/CertificateModal";
import { useProjects } from "@/hooks/useProjects";
import Image from "next/image";
import Accordion from "./new-design/Accordion";
import X from "../../../public/assets/icons/x.svg";

import Network from "../../../public/assets/icons/network.svg";

import Telegram from "../../../public/assets/icons/telegram.svg";
import LocationPin from "../../../public/assets/icons/location-pin.svg";
import Ethereum from "../../../public/assets/icons/ethereum.svg";
import Copy from "../../../public/assets/icons/copy.svg";
import FolderChart from "../../../public/assets/icons/folder-chart-fill.svg";
import UpArrow from "../../../public/assets/icons/up-arrow.svg";
import DownArrow from "../../../public/assets/icons/down-arrow.svg";
import Shield from "../../../public/assets/icons/shield.svg";
import CheckFill from "../../../public/assets/icons/check-fill.svg";
import Github from "../../../public/assets/icons/github.svg";
import Discord from "../../../public/assets/icons/discord.svg";

import PdfFill from "../../../public/assets/icons/pdf-fill.svg";
import SocialIcon from "./new-design/SocialIcon";
import Card from "./new-design/Card";
import Link from "next/link";
import GradientButton from "./new-design/GradientButton";
import {
  audits,
  crypto1D,
  crypto1M,
  crypto1Y,
  crypto3M,
  crypto7D,
} from "@/data/project";
import { cn } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Warning } from "@mui/icons-material";
import { renderControlOver } from "./varificationdetail/KycDetailData";
import CountryTier from "./modal/CountryTier";
import SocialLinks from "../Sociallinks/SocialLinks";
import { BlockChainImages, blockchainNames } from "./BlockChainImages";
import ContractAdress from "./varificationdetail/ContractAdress";
import DeatailSkeleton from "../skeleton/DetailSkeleton";
export default function SingleProject({ slug }) {
  const {
    project,
    singleProjecterror,
    isSingleProjectLoading,
    fetchSingleProject,
  } = useProjects();
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

  const router = useRouter();

  useEffect(() => {
    const fetchDeatailsData = () => {
      fetchSingleProject(slug);
    };
    fetchDeatailsData();
  }, [slug]);

  if (singleProjecterror) {
    return (
      <Grid container justifyContent="center" className="my-5">
        <Typography variant="h6" color="text-white" className="data-not-found">
          {singleProjecterror}
        </Typography>
      </Grid>
    );
  }

  //certificate model open handler
  const handleCertificateImgModalOpen = () => setCertificateModalOpen(true);

  // Handle opening  certificate modal
  const handleCertificateModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 bg-project-bg -z-20 -top-20" />
        {/* background rectangle images */}
        <div className="h-[calc(100vh+80px)] w-full absolute -top-20 -z-10 xl:block hidden">
          <div className="h-full w-full relative">
            <Image
              alt="arch-with-rectangle"
              src="/assets/backgrounds/left-arch-rectangle.png"
              fill
              className="object-contain object-left-bottom"
              quality={100}
            />
          </div>
        </div>
        <div className="h-screen w-full absolute -z-10">
          <div className="h-full w-full relative">
            <Image
              alt="star-with-rectangle"
              src="/assets/backgrounds/star-with-rectangle-left.png"
              fill
              className="object-contain object-right-bottom"
              quality={100}
            />
          </div>
        </div>
        {/* end here */}

        <div className="sm:p-10 p-4 flex flex-col gap-6 relative isolate shadow-xl">
          <div
            className="rounded-full size-[600px] opacity-50 bg-[#9A8D28] absolute right-0 top-48 lg:block hidden"
            style={{ filter: "blur(300px)" }}
          />

          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-center text-gradient">
              {project?.projectName}
            </h2>
            <div className="">
              <Link
                href="/"
                className="w-full flex justify-center text-base text-white gap-1.5"
              >
                <Image
                  width={25}
                  height={100}
                  src="/assets/typcn_arrow-back.png"
                  alt="arrow-back"
                  priority
                />{" "}
                Back to projects
              </Link>
            </div>
          </div>
          {isSingleProjectLoading ? (
            <DeatailSkeleton />
          ) : (
            <div
              className="max-w-7xl w-full relative mx-auto bg-project-detail-bg sm:p-8 p-6 rounded-3xl overflow-hidden"
              style={{
                filter: "drop-shadow(0px 4px 40px #070711)",
              }}
            >
              {/* half borders effects start*/}
              <div className="absolute inset-0 border-t-[3px] border-t-[#d6c641]"></div>
              <div className="absolute inset-0 project-detail-left-border"></div>
              <div className="absolute inset-0 project-detail-right-border"></div>
              <div className="absolute size-7 top-0 left-0 border-l-[3px] border-t-[3px] rounded-tl-3xl z-[1] border-l-[#d6c641] border-t-[#d6c641]" />
              <div className="absolute size-7 top-0 right-0 border-r-[3px] border-t-[3px] rounded-tr-3xl z-[1] border-r-[#d6c641] border-t-[#d6c641]" />
              {/* half borders effects end */}

              <div className="grid xl:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full flex gap-4">
                    <div className="xl:col-span-4 lg:col-span-5 col-span-4 flex-1 flex">
                      <ProjectOverview project={project} />
                    </div>
                    <div className="flex-shrink-0 sm:block hidden">
                      <KYCDate
                        project={project}
                        handleCertificateImgModalOpen={
                          handleCertificateImgModalOpen
                        }
                      />
                    </div>
                  </div>

                  <KYCVerification
                    project={project}
                    handleCertificateModalOpen={handleCertificateModalOpen}
                  />

                  <div className="sm:hidden block">
                    <KYCDate />
                  </div>

                  <div className="xl:block hidden">
                    <AuditScore project={project} />
                  </div>

                  <div className="sm:hidden block">
                    <AuditScore project={project} />
                  </div>
                </div>
                <div className="space-y-4">
                  <TradingView />
                  <div className="xl:hidden sm:block hidden">
                    <AuditScore />
                  </div>
                  <ThirdPartyAudits audits={audits} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {certificateModalOpen && (
        <CertificateModal
          img={project.kycCertificate}
          buttonText=""
          open={certificateModalOpen}
          setOpen={setCertificateModalOpen}
        />
      )}

      {modalOpen && (
        <CertificateModal
          img={project.kycCertificate}
          buttonText=""
          open={modalOpen}
          setOpen={setModalOpen}
        />
      )}
    </>
  );
}

const ProjectOverview = ({ project }) => {
  return (
    <Card className="sm:p-8 p-4 w-full">
      <div className="space-y-5">
        <div className="flex items-center gap-3.5">
          {/* <div className="size-12 rounded-full relative">
            <Image
              alt="destra-network"
              src="/assets/icons/destra-network.png"
              fill
            />
          </div> */}
          <div className="!size-12 !rounded-full relative">
            <Image
              width={25}
              height={100}
              alt="project images"
              src={
                project?.images
                  ? project?.images[0]?.thumbnails
                    ? project?.images[0]?.thumbnails.small.url
                    : project?.images[0]?.url
                  : "/assets/no-image-available.png"
              }
              priority
              className="border-4 w-full h-full  rounded-full"
            />
          </div>

          <div className="space-y-0.5">
            <p className="sm:text-2xl text-xl font-bold text-white">
              {project?.projectName}
            </p>
            <p className="text-sm font-normal text-[#727272]">
              {" "}
              {project?.lowerCaseTickerName?.toUpperCase() || ""}
            </p>
          </div>
        </div>

        <p className="text-sm font-normal text-white">{project?.description}</p>

        <div className="flex items-center gap-2">
          {renderSocialLinks(project)}
        </div>
      </div>
    </Card>
  );
};

const KYCDate = ({ project, handleCertificateImgModalOpen }) => {
  return (
    <Card className="w-full h-full pb-2">
      <div className="space-y-4 sm:block hidden">
        <div className="relative">
          <Image
            alt="verified-by-assure-defi"
            onClick={handleCertificateImgModalOpen}
            src="/assets/icons/verification-stamp.png"
            height={176}
            width={150}
            className="object-fill h-auto w-full"
          />
        </div>
        {renderKYCInfo(project)}
      </div>

      <div className="px-4 pb-2 flex sm:hidden gap-2.5">
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-sm font-normal text-white opacity-50">
            Successful KYC Date:
          </p>
          <p className="text-base font-bold text-[#DDCC42]">July 13th 2024</p>
        </div>
        <div className="relative ml-auto shrink-0">
          <Image
            alt="verified-by-assure-defi"
            src="/assets/icons/verification-stamp.png"
            height={350}
            width={260}
            className="w-32 h-auto"
          />
        </div>
      </div>
    </Card>
  );
};

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
            {/* Certificate Button */}
            {project?.kycCertificate && (
              <GradientButton
                className="button-under-kyc"
                onClick={handleCertificateModalOpen}
              >
                Certificate
              </GradientButton>
            )}
            {/* NFT Button */}
            {project?.nftUrl && (
              <Link href={project.nftUrl} target="_blank">
                <GradientButton>NFT</GradientButton>
              </Link>
            )}
          </div>
          {/* )} */}
        </div>

        {project?.kycStatus === "Approved" && (
          <div className="p-3 space-y-2">
            {project?.verifiyMembersList?.map((verifiy, index) => (
              <Accordion
                key={index}
                title={
                  <div className="flex items-center gap-1.5">
                    <div className="relative size-4">
                      <img
                        src="/assets/verified-beg.png"
                        className="w-8"
                        alt="verified"
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
                        <LocationPin />
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
                          {blockchainNames[project.blockchain[0]] ||
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
          PROOF Projects' Factory Contract is Audited by Source Hat, link to the
          Audit Report can be found here.{" "}
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="space-y-4 p-3 border rounded-md"
        style={{
          background: "rgba(4, 3, 17)",
        }}
      >
        <p className="">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

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
          <FolderChart />
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
            <UpArrow /> Buy
          </button>
          <button
            className="w-full border border-[#F66262] rounded-md flex items-center gap-2 text-base font-bold text-white p-3.5 justify-center"
            style={{
              background:
                "linear-gradient(180deg, #F66262 -53.12%, #180909 50%)",
            }}
          >
            <DownArrow /> Sell
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
          <Shield />
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
                  <CheckFill className="shrink-0" />
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
