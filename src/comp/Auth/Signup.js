import { useState } from "react"

function Input({ name = "" }) {
  return (
    <input type="text" placeholder={name} />
  )
}

function Signup() {
  const [type, setType] = useState("")

  return (
    <div className='auth-bg dc flex-col gap-0 h-screen'>
      <div className='p-6 bg-white rounded-xl shadow-lg'>
        <h1 className="mb-4 text-2xl font-medium text-center">Sign up</h1>

        <div className="grid sm:grid-cols-2 gap-4">
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
    </div>
  )
}

export default Signup