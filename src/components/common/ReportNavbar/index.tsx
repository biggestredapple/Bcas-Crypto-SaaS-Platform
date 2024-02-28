import { Link } from "react-router-dom";
import {
  FaHome,
  FaFacebook,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

import { PATHS } from "consts";
import { ExpLabel, LinkButton } from "components/common";
import { ICryptoInfo, ILinkData } from "store/types";

interface ReportNavbarComponentProps {
  linkData: ILinkData | null;
  metaData: ICryptoInfo | null;
  navbar: boolean;
  changeNavbar: () => void;
}

export const ReportNavbarComponent: React.FC<ReportNavbarComponentProps> = ({
  linkData,
  metaData,
  navbar,
  changeNavbar,
}) => {
  return (
    <div
      className={`flex p-0 min-w-72 max-w-72 h-full z-10 mobile:absolute transition-all ${
        navbar ? "absolute left-0" : "absolute -left-72"
      } tablet:absolute`}
    >
      <div className="flex flex-col items-start justify-between h-full pb-5 bg-black w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <Link className="py-12 mx-auto outline-none" to={PATHS.MAIN}>
            <img src="https://www.bcas.io/hubfs/BCAS-2022-Website/Typography/bcas-logo.svg" alt="logo" />
          </Link>
          <LinkButton to={PATHS.MAIN} Icon={FaHome} label="Home" />
          <div className="px-5 py-3 flex items-center gap-5">
            <img src={metaData?.logo} alt="token logo" />
            <div className="flex flex-col text-white">
              <div className="font-bold text-2xl">{metaData?.name}</div>
              <div className="font-medium">{metaData?.symbol}</div>
            </div>
          </div>
          <ExpLabel label="Price:" value={`${metaData?.price}$`} />
          <ExpLabel label="Market Cap:" value="56403$" />
          <ExpLabel label="Volume:" value="56403$" />
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          {linkData && linkData.website ? (
            <LinkButton to={linkData.website} Icon={TbWorld} label="Website" />
          ) : null}
          {linkData && linkData.tech_doc ? (
            <LinkButton
              to={linkData.tech_doc}
              Icon={IoDocumentSharp}
              label="White Paper"
            />
          ) : null}
          {linkData && linkData.facebook ? (
            <LinkButton
              to={linkData.facebook}
              Icon={FaFacebook}
              label="Fackbook"
            />
          ) : null}
          {linkData && linkData.reddit ? (
            <LinkButton
              to={linkData.reddit}
              Icon={FaRedditSquare}
              label="Reddit"
            />
          ) : null}
          {linkData && linkData.twitter ? (
            <LinkButton
              to={linkData.twitter}
              Icon={FaTwitterSquare}
              label="Twitter"
            />
          ) : null}
        </div>
      </div>
      <div className="w-16 h-full bg-transparent flex items-center absolute left-68">
        <button
          className="animate-pulse flex items-center justify-center w-16 h-8 rounded-tl-full rounded-tr-full bg-black rotate-90 text-4xl border-dark-100 border-b-black border-2 relative"
          onClick={changeNavbar}
        >
          <div className="w-6 h-6 border-t-4 border-l-4 rotate-45 border-white absolute top-3"></div>
        </button>
      </div>
    </div>
  );
};
