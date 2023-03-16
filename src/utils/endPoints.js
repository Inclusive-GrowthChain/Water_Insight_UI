export const root = {
  baseUrl: "https://0e07-115-99-192-223.in.ngrok.io/api",
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
  computeHash: "/admin/computeHash",
  verify: "/admin/verify",
}

export default endPoints