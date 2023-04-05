import Web3 from "web3";
import myContract from '../blockchain.js';
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
    const ownerAddress = "0x4A157b19a4d6037249876196464E3B7c77928f92";
    // const tokenAddress = "0xabF05e1E4e823281c1d75a67726f73B9D4972e4d"; 

    const amt = Web3.utils.toWei(`${data.amount}`, 'ether')

    const res = await myContract.myContract.methods
      .transfer(ownerAddress, amt)
      .send({ from: window.ethereum.selectedAddress });

    // const res = await sendApiReq({
    //   method: "post",
    //   url: endPoints.createOrder,
    //   data
    // })

    console.log(res)

    successNotify("Order placed successfully")
    onSuccess()
  } catch (error) {
    console.log(error)
    onError()
    errorNotify()
  }
}

export async function getPurchaseAmount(data, onSuccess) {
  try {
    const res = await sendApiReq({
      url: endPoints.getPayment,
      method: "post",
      data
    })

    onSuccess(res?.[0]?.count || 0)
  } catch (error) {
    console.log(error)
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
