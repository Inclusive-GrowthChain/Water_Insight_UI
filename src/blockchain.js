import Web3 from "web3";
import WaterInsightDAO from "./assets/WaterInsightDAO.json";

const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

const ContractAddress = "0x00E2cFd0b3AB702cada80dE2d3780b12A330167C";
const ContractAbi = WaterInsightDAO

const myContract = new web3.eth.Contract(
  ContractAbi,
  ContractAddress
);

export default { myContract }
