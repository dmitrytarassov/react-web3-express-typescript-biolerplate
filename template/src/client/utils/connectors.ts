import { Connectors } from "web3-react";
const { InjectedConnector, NetworkOnlyConnector } = Connectors;

const MetaMask = new InjectedConnector({ supportedNetworks: [420] });

// const Infura = new NetworkOnlyConnector({
//   providerURL: "https://mainnet.infura.io/v3/...",
// });

export const connectors = { MetaMask };
