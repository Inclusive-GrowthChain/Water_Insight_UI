import { useMemo, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import createArr from '../../helper/createArr';
import getRandom from '../../helper/getRandom';

import { ReactComponent as Filter } from '../../assets/svg/common/filter.svg';
import { DropDownWrapper } from '../UIComp/DropDown';

const data = createArr(20).reduce((prev, curr) => {
  prev.push({
    paymentId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
    emailId: `raj${curr}@gmail.com`,
    amount: getRandom(10, 100) * 100,
    date: "12-12-22",
  })

  prev.push({
    paymentId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
    emailId: `raj${curr}@gmail.com`,
    amount: getRandom(10, 100) * 100,
    date: "12-12-22",
  })
  return prev
}, [])

function Payments() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [email, setEmail] = useState("")

  const [filteredData, filteredList] = useMemo(() => {
    let finalData = [...data]
    let finalList = [...new Set(data.map(e => e.emailId))]

    if (email && email !== "Clear") {
      finalList.unshift("Clear")
      finalData = finalData.filter(f => f.emailId === email)
    }

    return [finalData, finalList]
  }, [email])

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
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable
            className='w-52'
            placeholderText='Select date'
          />
        </div>

        <DropDownWrapper
          list={filteredList}
          onClk={setEmail}
          boxCls="mini-scroll-bar max-h-[400px] overflow-y-auto"
          activeCls="bg-primary-600 text-white"
          active={email}
          rootCls="df gap-1 text-sm"
        >
          <Filter className="w-5 h-5" />
          Filter by email
        </DropDownWrapper>
      </div>

      <div className='scroll-y overflow-x-auto px-4 mb-2'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='sticky top-0 text-[15px] font-medium bg-slate-200 text-left shadow-sm'>
              <td className='w-36 p-2 pl-4'>Payment Id</td>
              <td className='w-32 p-2'>Email</td>
              <td className='w-28 p-2'>Date</td>
              <td className='w-28 p-2'>Amount</td>
            </tr>
          </thead>

          <tbody>
            {
              filteredData.map(d => (
                <tr key={d.paymentId} className='text-sm even:bg-slate-100'>
                  <td className='p-2 pl-4'>{d.paymentId}</td>
                  <td className='p-2'>{d.emailId}</td>
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