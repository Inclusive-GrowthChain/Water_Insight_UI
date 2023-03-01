import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import createArr from '../../helper/createArr';
import getRandom from '../../helper/getRandom';

const data = createArr(20).map(t => ({
  paymentId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
  amount: getRandom(10, 100) * 100,
  date: "12-12-22",
}))

function Payments() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <section className='dfc h-full overflow-y-hidden'>
      <div className='df gap-4 px-4 py-4'>
        <h1 className='mr-auto text-2xl'>Payments</h1>

        <div>
          <DatePicker
            isClearable
            selectsRange
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            className='w-52'
            placeholderText='Select date range'
          />
        </div>
      </div>

      <div className='scroll-y max-w-2xl mx-auto mb-2 overflow-x-auto'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='sticky top-0 text-[15px] font-medium bg-slate-200 text-left shadow-sm'>
              <td className='w-36 p-2 pl-4'>Payment Id</td>
              <td className='w-28 p-2'>Date</td>
              <td className='w-28 p-2'>Amount</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(d => (
                <tr key={d.paymentId} className='text-sm even:bg-slate-100'>
                  <td className='p-2 pl-4'>{d.paymentId}</td>
                  <td className='p-2'>{d.date}</td>
                  <td className='p-2'>{d.amount}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Payments