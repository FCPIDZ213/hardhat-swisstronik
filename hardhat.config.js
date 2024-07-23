require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",  // Vous pouvez utiliser cette version de Solidity
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["eceb4f55303829e5a7509b74c39a966afa61ee42b947d60b3431d065154ef4a8"]  // Remplacez par votre clé privée
    }
  }
};
