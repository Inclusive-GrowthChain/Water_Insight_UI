export const root = {
  baseUrl: "https://615c-112-133-196-210.in.ngrok.io/api",
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
  updateOrderStatus: "/orders/updatestatus",
  contributions: "/contributions",
  getPayment: "/filterContributions",
  sendEmail: "/orders/sendEmail",


  getSatelite: "/get/satellite",
  refreshSatelite: "/refresh/satellite",

  payContributor: "/admin/payContributor",
  deviveConfig: "/admin/devices",
  computeHash: "/admin/computeHash",
  verify: "/admin/verify",

  getHash: "/dao/getHash",
  getDaoProjects: "/dao/projects",
  getMyDaoProjects: "/dao/myprojects",
  createProject: "/dao/createProject",
  updateProject: "/dao/updateproject/",
  createStake: "/dao/createStake",
}

export default endPoints