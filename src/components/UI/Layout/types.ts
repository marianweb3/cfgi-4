export interface StakingHeaderProps {
  logo: string;
  links: {
    label: string;
    href: string;
  }[];
  showActionButton?: boolean;
  className?: string;
  theme?: "landbot" | "staking" | "maeve" | "default";
  fixedHeder?: boolean;
}
