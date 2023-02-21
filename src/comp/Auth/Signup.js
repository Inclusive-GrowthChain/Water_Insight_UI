import { useState } from "react";
import { Link } from 'react-router-dom';
import Template from './Template';

function Input({ name = "" }) {
  return (
    <input
      type="text"
      placeholder={name}
      className="focus-within:border-slate-900"
    />
  )
}

function Signup() {
  const [type, setType] = useState("")

  return (
    <Template>
      <div className='p-6 rounded-xl shadow-outer'>
        <h1 className="mb-4 text-2xl font-medium text-center">Sign up</h1>

        <div className="grid sm:grid-cols-2 gap-4 max-h-[45vh] -mr-6 pr-6 overflow-y-auto">
          <Input name="Name" />
          <Input name="Email" />
          <Input name="DOB" />
          <Input name="Phone" />
          <Input name="Address" />
          <Input name="Postal code" />
          <Input name="License Key" />
          <div className="grid-row-full df">
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="w-24 text-sm"
            >
              <option value="" disabled>ID Type</option>
              <option value="Aadhar Card">Aadhar</option>
              <option value="Pan Card">Pan Card</option>
            </select>

            <Input name="Govt ID No." />
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