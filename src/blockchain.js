import Web3 from "web3";
import WaterInsightDAO from "./assets/WaterInsightDAO.json";

const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

const ContractAddress = "0xabF05e1E4e823281c1d75a67726f73B9D4972e4d";
const ContractAbi = WaterInsightDAO

const myContract = new web3.eth.Contract(
  ContractAbi,
  ContractAddress
);

export default { myContract }
