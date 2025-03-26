"use client";

import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useProjects } from "@/hooks/useProjects";
import Image from "next/image";
import Link from "next/link";
import { audits } from "@/data/project";
import ProjectOverview from "./ProjectOverview";
import KYCDate from "./KYCDate";
import KYCVerification from "./KYCVerification";
import AuditScore from "./AuditScore";
import TradingView from "./TradingView";
import ThirdPartyAudits from "./ThirdPartyAudits";
import DeatailSkeleton from "@/components/skeleton/DetailSkeleton";
import CertificateModal from "../modal/CertificateModal";
import { useParams } from "next/navigation";
export default function SingleProject() {
  const { slug } = useParams();
  const {
    project,
    singleProjecterror,
    isSingleProjectLoading,
    fetchSingleProject,
  } = useProjects();
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchDeatailsData = () => {
      if (slug) {
        fetchSingleProject(slug);
      }
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
              <div className="absolute inset-0 border-t-[3px] border-t-[#d6c641]"></div>
              <div className="absolute inset-0 project-detail-left-border"></div>
              <div className="absolute inset-0 project-detail-right-border"></div>
              <div className="absolute size-7 top-0 left-0 border-l-[3px] border-t-[3px] rounded-tl-3xl z-[1] border-l-[#d6c641] border-t-[#d6c641]" />
              <div className="absolute size-7 top-0 right-0 border-r-[3px] border-t-[3px] rounded-tr-3xl z-[1] border-r-[#d6c641] border-t-[#d6c641]" />

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

                  {/* <KYCVerification
                    project={project}
                    handleCertificateModalOpen={handleCertificateModalOpen}
                  /> */}

                  <div className="sm:hidden block">{/* <KYCDate /> */}</div>

                  <div className="xl:block hidden">
                    {/* <AuditScore project={project} /> */}
                  </div>

                  <div className="sm:hidden block">
                    {/* <AuditScore project={project} /> */}
                  </div>
                </div>
                <div className="space-y-4">
                  <TradingView />
                  <div className="xl:hidden sm:block hidden">
                    {/* <AuditScore /> */}
                  </div>
                  {/* <ThirdPartyAudits audits={audits} /> */}
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
