import React from "react";
import { abbreviateAddress } from "../utils/abbreviateAddress";

interface ExplorerLinkProps {
  address: string;
  type?: "tx" | "address";
  children?: React.ReactNode;
}

const ExplorerLink: React.FC<ExplorerLinkProps> = ({
  address,
  type = "address",
  children,
}) => {
  return (
    <a
      target="_blank"
      href={`https://goerli-optimism.etherscan.io/${type}/${address}`}
    >
      {children || abbreviateAddress(address)}
    </a>
  );
};

export default ExplorerLink;
