import myContract from '../blockchain.js';
// enableMetaMask,
import { errorNotify, successNotify } from '../helper/toastifyHelp';
import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

const enableMetaMask = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

export async function createProject(data, onSuccess, onError) {
  try {
    const {
      title, summary, description,
      fundingTarget,
      minimumStakingAmount: minimumStakeAmount,
      votingThreshold,
      closingTime: closeTime,
    } = data

    const { hash } = await sendApiReq({
      method: "post",
      url: endPoints.getHash,
      data: {
        title,
        summary,
        description,
      }
    })

    await enableMetaMask()

    await myContract.myContract.methods.Project_Add(
      fundingTarget,
      minimumStakeAmount,
      new Date(closeTime).getTime(),
      hash
    ).send({ from: window.ethereum.selectedAddress })

    const id = await myContract.myContract.methods.getProjectCount().call()

    await sendApiReq({
      method: "post",
      url: endPoints.createProject,
      data: {
        id,
        title,
        summary,
        description,
        fundingTarget,
        minimumStakeAmount,
        votingThreshold,
        closeTime,
        dataHash: hash,
        forVotes: 0,
        againstVotes: 0,
        abstainVotes: 0,
        forAmount: 0,
        againstAmount: 0,
        abstainAmount: 0,
        status: "voting",
      }
    })

    successNotify("New project created successfully")
    onSuccess()

  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}

export async function createStake(data, onSuccess, onError) {
  try {
    await enableMetaMask()
    const stakeProject = await myContract.myContract.methods.Project_StakeMoney(
      Number(data.stakeAmount), data.projectId
    ).send({ from: window.ethereum.selectedAddress })
    console.log(stakeProject)

    // const res = await sendApiReq({
    //   method: "post",
    //   url: endPoints.createStake,
    //   data
    // })

    // console.log(res)

    // onSuccess("")
  } catch (error) {
    console.log(error)
  }
}

export async function getProjects(data, onSuccess, onError) {
  return sendApiReq({
    method: "post",
    url: "/dao/projects"
  })
}
