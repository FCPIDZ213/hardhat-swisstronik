require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",  // Vous pouvez utiliser cette version de Solidity
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [""]  // Remplacez par votre clé privée
    }
  }
};
