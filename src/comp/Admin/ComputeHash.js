import { useState } from 'react';
import DatePicker from "react-datepicker";

function ComputeHash() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [type, setType] = useState("")

  return (
    <section className="dc h-full bg-[#f7f7f7]">
      <div className="sm:w-96 p-6 shadow-outer rounded-2xl bg-white">
        <h1 className='mb-6 text-2xl font-medium text-center'>
          Compute Hash and <br />
          Upload to Blockchain
        </h1>

        <div className='mb-4'>
          <div className='mb-0.5 font-medium'>Start Date</div>

          <DatePicker
            isClearable
            selected={startDate}
            onChange={setStartDate}
            placeholderText='Select date'
          />
        </div>

        <div className='mb-4'>
          <div className='mb-0.5 font-medium'>End Date</div>

          <DatePicker
            isClearable
            selected={endDate}
            onChange={setEndDate}
            placeholderText='Select date'
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='data-type' className='mb-0.5 font-medium'>Data type</label>

          <select
            name="data-type"
            id="data-type"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="" disabled>Select type</option>
            <option value="Val 1">Val 1</option>
            <option value="Val 2">Val 2</option>
          </select>
        </div>

        <button className='theme-btn block mx-auto py-2 px-6'>
          Compute
        </button>
      </div>
    </section>
  )
}

export default ComputeHash