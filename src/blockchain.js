// import Web3 from "web3";
// import WaterInsightDAO from "./assets/WaterInsightDAO.json";
// import sol from './assets/waterInsightDao.sol';

// const ethereum = window.ethereum;
// const web3 = new Web3(ethereum);

//paste contract address here
// const contractAddress = "0x6C955A241Fdd53353C9486f05da940A6c1746db4";
// const contractABI = WaterInsightDAO
// const myContract = new web3.eth.Contract(contractAddress, contractABI);

// const enableMetaMask = async () => {
//   await ethereum.request({ method: "eth_requestAccounts" });
// }

// export default myContract
// enableMetaMask







import Web3 from "web3";
import WaterInsightDAO from "./assets/WaterInsightDAO.json";
// import sol from './assets/waterInsightDao.sol';

const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

//paste contract address here
const ContractAddress = "0xABA6Ac94c5EEf5B1efc3436c94B4Df93ABb9Aed6";
const ContractAbi = WaterInsightDAO

const myContract = new web3.eth.Contract(
  ContractAbi,
  ContractAddress
);

export default { myContract }
