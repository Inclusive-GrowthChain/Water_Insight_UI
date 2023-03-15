export const root = {
  baseUrl: "https://0a85-122-186-147-146.in.ngrok.io/api",
}

const endPoints = {
  login: "/user/login",
  signup: "/user/signup",
  logout: "/user/logout",
  profile: "/user/get/profile",
  updateProfile: "/user/update/profile",
  getAllPayments: "/user/getpayments",

  refreshEcoli: "/ecolidata/refresh",
  getEcoliData: "/ecolidata/results",
  refreshImgData: "/devicedata/refresh/", // {email}
  getImgData: "/devicedata/imagedata",
  getAllOrders: "/orders/orders",
  createOrder: "/orders/create",
  contributions: "/contributions",

  payContributor: "/admin/payContributor",
  computeHash: "/admin/computeHash",
  verify: "/admin/verify",
}

export default endPoints