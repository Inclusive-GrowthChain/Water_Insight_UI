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
    const res = await sendApiReq({
      method: "post",
      url: endPoints.computeHash,
      data
    })

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
    const res = await sendApiReq({
      method: "post",
      url: endPoints.verify,
      data
    })

    console.log(res)

    successNotify("Order verified successfully")
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
