import Web3 from "web3";
import WaterInsightDAO from "./assets/WaterInsightDAO.json";

// const ethereum = window.ethereum;
// const web3 = new Web3(ethereum);

/////////////////////////
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  console.log("Hello from Web3");
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/84a94754e27649afb916e2cbb9cc3f24"
  );
  web3 = new Web3(provider);
}

////////////////////////

const ContractAddress = "0x5ABaDea18D6b4d9d26896de6E1A0f636A04D1AA9";
const ContractAbi = WaterInsightDAO;

const myContract = new web3.eth.Contract(ContractAbi, ContractAddress);

export default { myContract };
