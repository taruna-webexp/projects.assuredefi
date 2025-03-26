"use client";

const SocialIcon = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="size-10 rounded-md border border-[#2a2a2a] grid place-items-center"
      style={{
        background: "linear-gradient(11deg, #07070E 37.58%, #45418D 165.54%)",
      }}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
