import Image from "next/image";
import { format } from "date-fns";

import SocialIcon from "../singleproject/SingleProject-design/SocialIcon";

// ✅ Social Links Component

export const renderSocialLinks = (project) => {
  const socialLinks = [
    { link: project?.websiteLink, icon: "/assets/icons/network.svg" },
    { link: project?.twitterLink, icon: "/assets/icons/x.svg" },
    { link: project?.telegramLink, icon: "/assets/icons/telegram.svg" },
    { link: project?.discordLink, icon: "/assets/icons/discord.svg" },
  ];

  return socialLinks.map(
    ({ link, icon }, idx) =>
      link &&
      link !== "N/A" &&
      link.trim() !== "" && (
        <SocialIcon
          key={idx}
          link={link}
          icon={<Image src={icon} alt="icon" width={24} height={24} />}
        />
      )
  );
};

// ✅ KYC Info Component
export const renderKYCInfo = (project) => {
  if (project?.auditDate) {
    return (
      <div className="space-y-2 text-center">
        <p className="text-sm font-normal text-white opacity-50">Audit Date</p>
        <p className="text-base font-semibold text-[#DDCC42]">
          {format(new Date(project.auditDate), "MMMM do yyyy")}
        </p>
      </div>
    );
  } else if (project?.kycStatus === "Approved") {
    return (
      <div className="space-y-2 text-center">
        <p className="text-sm font-normal text-white opacity-50">KYC Date</p>
        <p className="text-base font-semibold text-[#DDCC42]">
          {format(new Date(project.kycDate), "MMMM do yyyy")}
        </p>
      </div>
    );
  }

  return null;
};
