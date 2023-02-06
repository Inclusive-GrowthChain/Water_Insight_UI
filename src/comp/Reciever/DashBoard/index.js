import { useState } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Colors, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { parameterOptions, monthOptions, waterBodyOptions, options } from "./constants";
import dummyData from './dummyData';

import { SelectBox, Cal } from "./Help";

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

function DashBoard() {
  const [parameter, setParameter] = useState("")
  const [month, setMonth] = useState("")
  const [water, setWater] = useState("")

  return (
    <section className='dfc pl-8 pb-4 pt-2 pr-1 h-full overflow-hidden'>
      <div className='df gap-4 flex-wrap pr-6'>
        <SelectBox
          name="Waterbody"
          value={water}
          onChange={setWater}
          optionsList={waterBodyOptions}
        />
        <SelectBox
          name="Parameter"
          value={parameter}
          onChange={setParameter}
          optionsList={parameterOptions}
        />
        <SelectBox
          name="Month"
          value={month}
          onChange={setMonth}
          optionsList={monthOptions}
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