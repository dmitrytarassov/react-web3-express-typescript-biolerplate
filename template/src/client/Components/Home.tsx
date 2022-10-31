import React, { useEffect } from "react";
import { useWeb3Context } from "web3-react";
import ExplorerLink from "./ExplorerLink";

const Home: React.FC = ({}) => {
  const context = useWeb3Context();

  useEffect(() => {
    context.setConnector("MetaMask");
  }, []);

  const switchNetwork = async () => {
    const provider = await context.connector.getProvider();
    console.log(provider);
    provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + (420).toString(16) }], // chainId must be in hexadecimal numbers
    });
  };

  return (
    <>
      <div className="market">
        <h3>Home</h3>
        {context.error && (
          <p>
            {context.error.message}{" "}
            {context.error.message.includes("Unsupported Network:") && (
              <span className="link" onClick={switchNetwork}>
                Switch
              </span>
            )}
          </p>
        )}
        {context.account && (
          <div className="info">
            <h4>Info</h4>
            <p>
              Account: <ExplorerLink address={context.account} />
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
