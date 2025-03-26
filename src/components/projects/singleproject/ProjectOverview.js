import Image from "next/image";
import Card from "./SingleProject-design/Card";
import { renderSocialLinks } from "../varificationdetail/VerificationDetailData";

const ProjectOverview = ({ project }) => {
  return (
    <Card className="sm:p-8 p-4 w-full">
      <div className="space-y-5">
        <div className="flex items-center gap-3.5">
          <div className="size-12 rounded-full relative">
            <Image
              alt="destra-network"
              src="/assets/icons/destra-network.png"
              fill
            />
          </div>
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
          {/* {renderSocialLinks(project)} */}
        </div>
      </div>
    </Card>
  );
};
export default ProjectOverview;
