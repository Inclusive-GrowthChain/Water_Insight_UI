import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signup } from "../../actions/auth/auth";
import Template from './Template';

function Input({ name = "", value = "", onChange = () => { } }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={name}
      className="mb-4 focus-within:border-slate-900"
      onChange={e => onChange(e.target.value)}
    />
  )
}

function Signup() {
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    walletId: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: "",
  })

  const onChange = (key, val) => {
    setDetails(p => ({
      ...p,
      [key]: val
    }))
  }

  const onSubmit = () => {
    signup(details, () => navigate("/login"))
  }

  return (
    <Template>
      <div className='p-6 rounded-xl shadow-outer'>
        <h1 className="mb-4 text-2xl font-medium text-center">Sign up</h1>

        <div className="max-h-[45vh] grid grid-cols-2 gap-2 -mr-6 pr-6 overflow-y-auto">
          <Input
            name="First Name"
            value={details.firstname}
            onChange={val => onChange("firstname", val)}
          />

          <Input
            name="Last Name"
            value={details.lastname}
            onChange={val => onChange("lastname", val)}
          />

          <Input
            name="Email"
            value={details.email}
            onChange={val => onChange("email", val)}
          />

          <Input
            name="Phone"
            value={details.phone}
            onChange={val => onChange("phone", val)}
          />

          <Input
            name="Wallet Id"
            value={details.walletId}
            onChange={val => onChange("walletId", val)}
          />

          <div>
            <select
              value={details.role}
              onChange={e => onChange("role", e.target.value)}
              className="w-full text-sm"
            >
              <option value="" disabled>Role</option>
              <option value="Consumer">Consumer</option>
              <option value="Contributor">Contributor</option>
            </select>
          </div>

          <Input
            name="Password"
            value={details.password}
            onChange={val => onChange("password", val)}
          />

          <Input
            name="Confirm Password"
            value={details.confirmPassword}
            onChange={val => onChange("confirmPassword", val)}
          />
        </div>

        <button
          className='block mt-6 px-12 mx-auto bg-[#01264e] text-white rounded-full hover:opacity-95'
          onClick={onSubmit}
        >
          Sign up
        </button>
      </div>

      <div className='px-8 py-3 text-sm bg-white rounded-b-xl shadow-outer'>
        Already have an account, <Link to="/login" className='text-[#0071b0] hover:text-[#0d87c9]'>Login</Link>
      </div>
    </Template>
  )
}

export default Signup