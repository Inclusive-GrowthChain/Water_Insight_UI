export const root = {
  baseUrl: "https://da67-122-186-147-146.in.ngrok.io/api",
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
  refreshDeviceData: "/devicedata/refresh/", // {email}
  getDeviceData: "/devicedata/results",
  getAllOrders: "/orders/orders",
  createOrder: "/orders/create",
  contributions: "/contributions",

  payContributor: "/admin/payContributor",
  deviveConfig: "/admin/devices",
  computeHash: "/admin/computeHash",
  verify: "/admin/verify",

  getHash: "/dao/getHash",
  createProject: "/dao/createProject",
  createStake: "/dao/createStake",
  // createStake: "/dao/",
  // createStake: "/dao/",
}

export default endPoints