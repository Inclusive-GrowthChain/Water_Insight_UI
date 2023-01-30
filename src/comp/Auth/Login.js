import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as EyeClose } from '../../assets/svg/common/eye-close.svg';
import { ReactComponent as EyeOpen } from '../../assets/svg/common/eye-open.svg';
import { ReactComponent as User } from '../../assets/svg/users/user1.svg';
import { ReactComponent as Lock } from '../../assets/svg/common/lock.svg';
import Template from './Template';

function Login() {
  const [email, setEmail] = useState("contributor")
  const [pass, setPass] = useState("contributor")
  const [type, setType] = useState("password")
  const navigate = useNavigate()

  const onSumbit = () => {
    if (email === "contributor" && pass === "contributor") {
      navigate("contributor")
    } else if (email === "reciever" && pass === "reciever") {
      navigate("reciever")
    }
  }

  return (
    <Template>
      <div className='sm:min-w-[320px] px-6 pb-8 pt-20 relative bg-white rounded-xl shadow-lg'>
        <div className='p-4 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#01264e] rounded-full shadow'>
          <User className="w-16 h-16 fill-none stroke-white" />
        </div>

        <div className='df mb-4 gap-0 bg-[#01264e] rounded'>
          <label className='dc p-2 mb-0' htmlFor="login-email"><User className="fill-white" /></label>
          <input
            id='login-email'
            type="text"
            placeholder='Email'
            className='h-10 text-white bg-[#385276] placeholder:text-white border-none rounded-l-none'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='df mb-6 gap-0 bg-[#01264e] rounded relative'>
          <label className='dc p-2 mb-0' htmlFor="login-password"><Lock className="fill-white" /></label>
          <input
            id='login-password'
            type={type}
            placeholder='Password'
            className='h-10 pr-10 text-white bg-[#385276] placeholder:text-white border-none rounded-l-none'
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

      <div className='px-8 py-3 text-sm bg-white rounded-b-xl shadow-md'>
        Don't have account, <Link to="/signup" className='text-blue-500 hover:text-blue-700'>Sign up</Link>
      </div>
    </Template>
  )
}

export default Login