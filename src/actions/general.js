import { errorNotify, successNotify } from '../helper/toastifyHelp';
import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export async function getEcoliData() {
  return sendApiReq({
    url: endPoints.getEcoliData,
    method: "post",
  })
}

export async function getImgData() {
  return sendApiReq({ url: endPoints.getImgData })
}

export async function getAllOrders() {
  return sendApiReq({
    url: endPoints.getAllOrders,
    method: "post",
  })
}

export async function createOrder(data, onSuccess, onError) {
  try {
    const res = await sendApiReq({
      method: "post",
      url: endPoints.createOrder,
      data
    })

    console.log(res)

    successNotify("Order placed successfully")
    onSuccess()
  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}

export async function getAllContributions() {
  return sendApiReq({
    url: endPoints.contributions,
    method: "post",
  })
}

export async function getAllPaymentss() {
  return sendApiReq({
    url: endPoints.getAllPayments,
    method: "post",
  })
}