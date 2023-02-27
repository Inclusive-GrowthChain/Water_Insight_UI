import { useState } from "react";
import Input from "../Common/Input";

function OrderEntry() {
  const [detail, setDetail] = useState({
    orderDate: new Date().toDateString(),
    startDate: "",
    endDate: "",
    email: "raj@gmail.com",
    type: "",
  })

  const onChange = (key, val) => {
    setDetail(p => ({
      ...p,
      [key]: val
    }))
  }

  return (
    <section className='grid grid-cols-2 gap-8 max-w-lg m-auto p-6 shadow-outer rounded-2xl'>
      <h1 className='mb-4 text-2xl font-medium grid-col-full text-center'>Order Entry</h1>

      <div>
        <label className="mb-1 text-gray-700" htmlFor="data-type">
          Data type
        </label>

        <select
          name=""
          id="data-type"
          value={detail.type}
          onChange={e => setDetail(p => ({
            ...p,
            type: e.target.value
          }))}
          className="text-sm focus-within:border-slate-900 disabled:bg-gray-50"
        >
          <option value="" disabled></option>
          <option value="ecoli">E-Coli</option>
          <option value="satellite">Satellite</option>
          <option value="deviceData">Device Data</option>
        </select>
      </div>

      <Input
        type="date"
        name="Start Date"
        value={detail.startDate}
        onChange={val => onChange("startDate", val)}
      />

      <Input
        type="date"
        name="End Date"
        value={detail.endDate}
        onChange={val => onChange("endDate", val)}
      />

      <Input
        name="Email"
        value={detail.email}
        disabled
      />

      <Input
        name="Order Date"
        value={detail.orderDate}
        disabled
      />

      <Input
        name="Price"
        value="5,000"
        disabled
      />

      <button className="theme-btn grid-col-full mx-auto px-12">
        Submit
      </button>
    </section>
  )
}

export default OrderEntry