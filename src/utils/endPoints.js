export const root = {
  baseUrl: "https://5516-115-98-29-60.in.ngrok.io/api",
}

const endPoints = {
  login: "/user/login",
  signup: "/user/signup",
  logout: "/user/logout",
  profile: "/user/get/profile",
  updateProfile: "/user/update/profile",

  refreshEcoli: "/ecolidata/refresh",
  getEcoliData: "/ecolidata/results",
  refreshImgData: "/devicedata/refresh/", // {email}
  getImgData: "/devicedata/imagedata",
  getAllOrders: "/orders/orders",
  createOrder: "/orders/create",

  payContributor: "/admin/payContributor",
  computeHash: "/admin/computeHash",
  verify: "/admin/verify",
}

export default endPoints