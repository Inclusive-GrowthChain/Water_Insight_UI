import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as EyeClose } from '../../assets/svg/common/eye-close.svg';
import { ReactComponent as EyeOpen } from '../../assets/svg/common/eye-open.svg';
import { ReactComponent as User } from '../../assets/svg/users/user1.svg';
import { ReactComponent as Lock } from '../../assets/svg/common/lock.svg';
import Template from './Template';

function Login() {
  const [email, setEmail] = useState("receiver")
  const [pass, setPass] = useState("receiver")
  const [type, setType] = useState("password")
  const navigate = useNavigate()

  const onSumbit = () => {
    if (email === "contributor" && pass === "contributor") {
      navigate("contributor")
    } else if (email === "receiver" && pass === "receiver") {
      navigate("/receiver/dashboard")
    }
  }

  return (
    <Template>
      <div className='p-6 rounded-xl shadow-outer'>
        <h1 className="mb-4 text-2xl font-medium text-center">Login</h1>

        <div className='df mb-4 gap-0 bg-[#546880] rounded'>
          <label className='dc p-2 mb-0' htmlFor="login-email"><User className="fill-white" /></label>
          <input
            id='login-email'
            type="text"
            placeholder='Email'
            className='h-10 rounded-l-none'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='df mb-6 gap-0 bg-[#546880] rounded relative'>
          <label className='dc p-2 mb-0' htmlFor="login-password"><Lock className="fill-white" /></label>
          <input
            id='login-password'
            type={type}
            placeholder='Password'
            className='h-10 pr-10 rounded-l-none'
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
          {type === "password" && <EyeClose className="absolute top-2 right-2 fill-white" onClick={() => setType("text")} />}
          {type === "text" && <EyeOpen className="absolute top-2 right-2 fill-white" onClick={() => setType("password")} />}
        </div>

        <button
          className='block px-12 mx-auto bg-[#01264e] text-white rounded-full hover:opacity-95'
          onClick={onSumbit}
        >
          Login
        </button>
      </div>

      <div className='px-8 py-3 text-sm bg-white rounded-b-xl shadow-outer'>
        Don't have account, <Link to="/signup" className='text-[#0071b0] hover:text-[#0d87c9]'>Sign up</Link>
      </div>
    </Template>
  )
}

export default Login