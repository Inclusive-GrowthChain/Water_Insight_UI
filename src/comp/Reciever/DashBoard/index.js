import {
  Chart, CategoryScale, LinearScale, PointElement,
  LineElement, Colors, Title, Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
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

function DashBoard() {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 items-center gap-12 p-8 h-full overflow-y-auto'>
      {dummyData.map(d => (
        <div key={d.id}>
          <Line data={d.data} options={options} />
          <button className='block mx-auto mt-2 px-6 text-lg font-medium text-center hover:bg-blue-500 hover:text-white transition-colors'>
            {d.title}
          </button>
        </div>
      ))}
    </section>
  )
}

export default DashBoard