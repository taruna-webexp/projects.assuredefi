import Image from "next/image";
import Card from "./SingleProject-design/Card";
import { renderKYCInfo } from "../varificationdetail/VerificationDetailData";

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

export default KYCDate;
