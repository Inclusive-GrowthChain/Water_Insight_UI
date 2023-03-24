import { errorNotify, successNotify } from '../helper/toastifyHelp';
import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export async function getEcoliData() {
  return sendApiReq({
    url: endPoints.getEcoliData,
    method: "post",
  })
}

export async function refreshEcoliData() {
  return sendApiReq({
    url: endPoints.refreshEcoli,
    method: "post",
  })
}

export async function getSatelite() {
  return sendApiReq({
    url: endPoints.getSatelite,
    method: "post",
  })
}

export async function refreshSatelite() {
  return sendApiReq({
    url: endPoints.refreshSatelite,
    method: "post",
  })
}

export async function getDeviceData() {
  return sendApiReq({
    url: endPoints.getDeviceData,
    method: "post",
  })
}

export async function refreshDeviceData(email) {
  return sendApiReq({
    url: endPoints.refreshDeviceData + email,
    method: "post",
  })
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


// {
//   "_id": "641164624b242a000b6a906a",
//   "uniqueMessageId": "18682f690966d3b8",
//   "Date": "2023-02-24T10:27:21.000Z",
//   "__v": 0,
//   "deviceId": "igcatisb@gmail.com",
//   "fileName": "18682f690966d3b8photo.jpg",
//   "hash": "59905b98b0862d2e73ad5b374e10208467b86170695ecb4462a53c6609e90b85",
//   "message": "Photo captured with ESP32-CAM and attached in this email.",
//   "subject": "ESP32-CAM Photo Captured",
//   "verifyId": 8195,
//   "K_mean_RG": 2.607180028192449,
//   "Turbidity": 10.064256324631863
// }