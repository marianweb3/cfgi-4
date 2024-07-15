import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StakingHeader from "./StakingHeader";
import { StakingHeaderProps } from "./types";

interface LayoutProps {
  children: ReactNode;
  staking?: StakingHeaderProps;
  hideFooter?: boolean;
  className?: string;
  theme?: "landbot" | "staking" | "maeve" | "default";
  fixedHeder?: boolean;
}

const Layout = ({
  children,
  staking,
  hideFooter = false,
  className,
  theme = "default",
  fixedHeder,
}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-mainBlack">
      {staking ? (
        <StakingHeader {...staking} theme={theme} fixedHeder={fixedHeder} />
      ) : (
        <Header />
      )}
      <main
        className={`flex-grow 2xl:px-0 px-4 ${
          staking ? "!px-0 overflow-hidden" : ""
        } ${className}`}
      >
        {children}
      </main>
      {!hideFooter ? <Footer theme={theme} /> : null}
    </div>
  );
};

export default Layout;
