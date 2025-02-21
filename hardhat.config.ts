import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks : {
    hardhat : {
      forking : {
        url : "https://eth-mainnet.g.alchemy.com/v2/QVSxCIKEbPdKDFhj0OR4qcJq0rWMOuWf"
      }
    }
  }
};

export default config;
