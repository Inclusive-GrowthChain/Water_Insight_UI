// import myContract from '../blockchain.js';
import { errorNotify, successNotify } from '../helper/toastifyHelp';
import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export async function payContributor(data, onSuccess, onError) {
  try {
    const res = await sendApiReq({
      method: "post",
      url: endPoints.payContributor,
      data
    })

    console.log(res)

    successNotify("Made payment successfully")
    onSuccess()
  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}

export async function computeHash(data, onSuccess, onError) {
  try {
    const { hash, verifyId } = await sendApiReq({
      method: "post",
      url: endPoints.computeHash,
      data
    })

    await enableMetaMask()

    const res = await myContract.myContract.methods
      .add_datahash(data.dataType, hash, verifyId)
      .send({ from: window.ethereum.selectedAddress })

    console.log(res)
    successNotify("Computed hash successfully")
    onSuccess()

  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}

export async function verify(data, onSuccess, onError) {
  try {
    const { hash } = await sendApiReq({
      method: "post",
      url: endPoints.verify + `/${data.verifyId}`,
      data
    })

    await enableMetaMask()

    const isVerified = await myContract.myContract.methods
      .verifyHash(data.verifyId, hash, data.dataType)
      .call()

    console.log({ isVerified })

    successNotify(isVerified ? "Hash is verified!" : "Hash is not verified!")
    onSuccess()
  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}

export async function deviceConfig(data, onSuccess, onError) {
  try {
    const res = await sendApiReq({
      method: "post",
      url: endPoints.deviveConfig,
      data
    })

    console.log(res)

    successNotify("Device config added successfully")
    onSuccess()
  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}
