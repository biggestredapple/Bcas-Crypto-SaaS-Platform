import { ReportNavbarComponent } from "components/common";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

type SidebarLayoutProps = {
  children: React.ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { cryptoLinkData, cryptoMetaData } = useSelector(
    (store: RootState) => store.crypto
  );
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => setNavbar(!navbar);

  return (
    <div className="w-full h-full flex bg-land relative">
      <ReportNavbarComponent
        linkData={cryptoLinkData}
        metaData={cryptoMetaData}
        navbar={navbar}
        changeNavbar={changeNavbar}
      />
      <div
        className={`${
          !navbar ? "w-full relative" : "absolute w-[calc(100vw-288px)] left-72"
        } bg-land h-full transition-width tablet:w-full mobile:w-full`}
      >
        {children}
      </div>
    </div>
  );
};

export const withReportSidebarLayout =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <SidebarLayout>
        <Page />
      </SidebarLayout>
    );
  };
