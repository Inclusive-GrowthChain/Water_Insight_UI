import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';

export async function getEcoliData() {
  return sendApiReq({ url: endPoints.getEcoliData })
}

export async function getImgData() {
  return sendApiReq({ url: endPoints.getImgData })
}

export async function getAllOrders() {
  return sendApiReq({ url: endPoints.getAllOrders })
}
