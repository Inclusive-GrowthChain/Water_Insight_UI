import { useState } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Colors, Title, Tooltip, Legend } from 'chart.js';
import DatePicker from "react-datepicker";
import { Line } from 'react-chartjs-2';

import "react-datepicker/dist/react-datepicker.css";

import dummyData from './dummyData';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
  // scales: {
  //   y: {
  //     title: {
  //       display: true,
  //       text: 'probability'
  //     }
  //   },
  //   x: {
  //     title: {
  //       display: true,
  //       text: 'probability'
  //     }
  //   }
  // }
}

const ParameterOptions = [
  "All",
]

const MonthOptions = [
  "All",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function SelectBox({ name = "", value = "", onChange, optionsList = [] }) {
  return (
    <div>
      <label className='mb-0.5 font-medium' htmlFor={name}>{name}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="" disabled></option>
        {
          optionsList.map(p => (
            <option key={p} value={p}>
              {p}
            </option>
          ))
        }
      </select>
    </div>
  )
}

function Cal() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const onChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)

    if (start && end) {
      console.log({ start, end })
    }
  }

  return (
    <div>
      <div className='mb-0.5 font-medium text-center'>Select Date Range</div>

      {/* <div className='grid grid-cols-2 gap-2'>
        <input type="date" className='w-32' />
        <input type="date" className='w-32' />
      </div> */}

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
  )
}

function DashBoard() {
  const [parameter, setParameter] = useState("")
  const [month, setMonth] = useState("")

  return (
    <section className='dfc pl-8 pb-4 pt-2 pr-1 h-full overflow-hidden'>
      <div className='df gap-4 flex-wrap pr-6'>
        <SelectBox
          name="Parameter"
          value={parameter}
          onChange={setParameter}
          optionsList={ParameterOptions}
        />
        <SelectBox
          name="Month"
          value={month}
          onChange={setMonth}
          optionsList={MonthOptions}
        />
        <Cal />
        <button className='theme-btn ml-auto'>
          Generate Report
        </button>
      </div>

      <div className='scroll-y grid md:grid-cols-2 lg:grid-cols-3 items-center gap-12 pr-4'>
        {dummyData.map(d => (
          <div key={d.id}>
            <Line data={d.data} options={options} />
            <button className='block mx-auto mt-2 px-6 text-lg font-medium text-center hover:bg-blue-500 hover:text-white transition-colors'>
              {d.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DashBoard