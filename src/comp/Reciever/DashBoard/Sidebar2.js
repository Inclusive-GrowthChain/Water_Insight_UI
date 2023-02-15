import { Chart, CategoryScale, LinearScale, BarElement, Colors, Title, Tooltip, Legend } from 'chart.js';
import { useKeenSlider } from "keen-slider/react"
import { Bar } from 'react-chartjs-2';
import "keen-slider/keen-slider.min.css";

import { ReactComponent as Arrow } from '../../../assets/svg/arrows/dropdown.svg';
import { options } from "./constants";
import dummyData from './dummyData2';

Chart.register(
  CategoryScale,
  LinearScale,
  // PointElement,
  BarElement,
  Colors,
  Title,
  Tooltip,
  Legend
)

function Sidebar2() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 900px)": {
        slides: { perView: 2, spacing: 20, },
      },
      "(min-width: 1280px)": {
        slides: { perView: 3, spacing: 20, },
      },
    },
    slides: {
      spacing: 20,
    },
  })

  return (
    <div className='df gap-4 h-72 px-2'>
      <button
        onClick={() => instanceRef?.current?.prev()}
        className="p-2 rounded-full hover:bg-primary-100 border"
      >
        <Arrow className="rotate-90" />
      </button>

      <div ref={sliderRef} className="keen-slider flex-1">
        {dummyData.map(d => (
          <div key={d.id} className="keen-slider__slide p-4 rounded-lg border shadow-lg">
            <button className='block w-full mb-2 p-0 pb-1 text-sm border-b text-left hover:font-semibold'>
              {d.title}
            </button>
            <Bar data={d.data} options={options} />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.next()}
        className="p-2 rounded-full hover:bg-primary-100 border"
      >
        <Arrow className="-rotate-90" />
      </button>
    </div>
  )
}

export default Sidebar2