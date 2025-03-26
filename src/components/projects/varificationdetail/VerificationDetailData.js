import Network from "../../../../public/assets/icons/network.svg";
import X from "../../../../public/assets/icons/x.svg";
import Telegram from "../../../../public/assets/icons/telegram.svg";
import Discord from "../../../../public/assets/icons/discord.svg";
import { format } from "date-fns";
import SocialIcon from "../singleproject/SingleProject-design/SocialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
// import { format } from "prettier";

// Social Links Component
export const renderSocialLinks = (project) => {
  const socialLinks = [
    { link: project?.websiteLink, icon: <Network /> },
    { link: project?.twitterLink, icon: <X /> },
    { link: project?.telegramLink, icon: <Telegram /> },
    { link: project?.discordLink, icon: <Discord /> },
    {
      link: project?.mediumLink,
      icon: <FontAwesomeIcon icon={faMedium} className="theme-color" />,
    },
  ];

  return socialLinks.map(
    ({ link, icon }, idx) =>
      link &&
      link !== "N/A" &&
      link.trim() !== "" && <SocialIcon key={idx} link={link} icon={icon} />
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
