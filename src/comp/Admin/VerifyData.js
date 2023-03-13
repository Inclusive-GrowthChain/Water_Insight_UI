import { useState } from "react";
import { verify } from "../../actions/admin";

function VerifyData() {
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState("")

  const onSuccess = () => {
    setIsLoading(false)
    setType("")
  }

  const onError = () => setIsLoading(false)

  const onSubmit = () => {
    setIsLoading(true)
    verify(type, onSuccess, onError)
  }

  return (
    <section className="dc h-full bg-[#f7f7f7]">
      <div className="sm:w-96 p-6 shadow-outer rounded-2xl bg-white">
        <h1 className='mb-6 text-2xl font-medium text-center'>
          Verify from blockchain
        </h1>

        <div className='mb-6'>
          <label htmlFor="verifyId" className='mb-0.5 font-medium'>
            Verification ID
          </label>

          <input
            id="verifyId"
            type="text"
            placeholder="Verification ID"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>

        <button
          className='theme-btn block mx-auto py-2 px-6'
          disabled={isLoading}
          onClick={onSubmit}
        >
          Verify
        </button>
      </div>
    </section>
  )
}

export default VerifyData