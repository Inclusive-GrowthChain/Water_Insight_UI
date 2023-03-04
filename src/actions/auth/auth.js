import sendApiReq, { cookies } from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';

const setTokenToApp = token => {
  cookies.set("WaterInshight", token, {
    path: '/',
    domain: window.location.hostname,
    expires: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
  })
}

export async function signup(data, onSuccess) {
  try {
    const res = await sendApiReq({
      isAuthendicated: false,
      method: 'post',
      url: endPoints.signup,
      data,
    })

    console.log(res)
    onSuccess()

  } catch (error) {
    console.log(error)
  }
}

export async function login(data, onSuccess, onError) {
  try {
    const { data: { user, token } } = await sendApiReq({
      isAuthendicated: false,
      method: 'post',
      url: endPoints.login,
      data,
    })

    console.log(user, token)
    setTokenToApp(token)
    onSuccess({ ...user, token })

  } catch (error) {
    console.log(error)
    onError()
  }
}

export async function onLogOut(onSuccess) {
  try {
    await sendApiReq({
      method: "post",
      url: endPoints.logout
    })
    cookies.remove('WaterInshight', { path: '', domain: window.location.hostname })
    onSuccess()
    window.location.replace('/')
  } catch (error) {
    console.log(error)
  }
}

export async function updateProfile(data, onSuccess) {
  try {
    await sendApiReq({
      method: "patch",
      url: endPoints.profile,
      data
    })

    onSuccess()
  } catch (error) {
    console.log(error)
  }
}
