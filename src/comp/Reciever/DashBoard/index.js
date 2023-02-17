import { useState } from 'react';
import Sidebar from "./Sidebar2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const lat = "13.0827"
const lng = "80.2707"

const lakesList = ["Hussain Sagar", "Osman Sagar", "Durgam Cheruvu"]

function DashBoard() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [lake, setLake] = useState("")

  const onChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <section className='dfc h-full overflow-hidden'>
      <div className="df gap-6 p-4 pb-2">
        <h1 className="text-lg font-medium mr-auto">Dashboard</h1>

        <select className="w-fit" value={lake} onChange={e => setLake(e.target.value)}>
          <option value="" disabled>Lake</option>
          {lakesList.map(l => <option key={l} value={l}>{l}</option>)}
        </select>

        <div>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable
            // className="w-fit"
            placeholderText='Date Range'
          />
        </div>

        <div className='df p-2 bg-[#D9D9D93D] rounded-md'>
          <button className='px-2 py-1 text-sm rounded-md bg-white'>Day</button>
          <button className='px-2 py-1 text-sm rounded-md bg-white'>Month</button>
          <button className='px-2 py-1 text-sm rounded-md bg-white'>Year</button>
        </div>

        <button className="theme-btn text-sm">Generate report</button>
      </div>

      <div className="flex-1">
        <iframe
          width="100%"
          height="100%"
          style={{ border: "none" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZ4YsHJ-UaXOd2W95mXMNhrH2SJXNzUPU&q=${lat},${lng}&center=${lat},${lng}&zoom=6`}
          title="map"
        ></iframe>
      </div>

      <Sidebar />
    </section>
  )
}

export default DashBoard