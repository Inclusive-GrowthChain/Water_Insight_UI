import { useState } from "react";
import { Link } from 'react-router-dom';
import Template from './Template';

function Input({ name = "" }) {
  return (
    <input
      type="text"
      placeholder={name}
      className="mb-4 focus-within:border-slate-900"
    />
  )
}

function Signup() {
  const [role, setRole] = useState("")

  return (
    <Template>
      <div className='p-6 rounded-xl shadow-outer'>
        <h1 className="mb-4 text-2xl font-medium text-center">Sign up</h1>

        <div className="max-h-[45vh] grid grid-cols-2 gap-2 -mr-6 pr-6 overflow-y-auto">
          <Input name="Org First Name" />
          <Input name="Org Last Name" />
          <Input name="Org Email" />
          <Input name="Org Phone" />
          <Input name="Wallet Id" />
          <div className="">
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              className="w-full text-sm"
            >
              <option value="" disabled>Role</option>
              <option value="Consumer">Consumer</option>
              <option value="Contributor">Contributor</option>
            </select>
          </div>
          <Input name="Password" />
          <Input name="Confirm Password" />
        </div>

        <button className='block mt-6 px-12 mx-auto bg-[#01264e] text-white rounded-full hover:opacity-95'>
          Sign up
        </button>
      </div>

      <div className='px-8 py-3 text-sm bg-white rounded-b-xl shadow-outer'>
        Already have an account, <Link to="/" className='text-[#0071b0] hover:text-[#0d87c9]'>Login</Link>
      </div>
    </Template>
  )
}

export default Signup