export const root = {
  baseUrl: "https://662e-115-98-183-148.in.ngrok.io/api",
}

const endPoints = {
  login: "/userdata/users/login",
  signup: "/userdata/users/signup",
  logout: "/userdata/users/logout",
  profile: "/userdata/users/me",

  refreshEcoli: "/ecolidata/refresh",
  getEcoliData: "/ecolidata/results",
  refreshImgData: "/devicedata/refresh/", // {email}
  getImgData: "/devicedata/imagedata",
  getAllOrders: "",
  createOrder: "",
}

export default endPoints