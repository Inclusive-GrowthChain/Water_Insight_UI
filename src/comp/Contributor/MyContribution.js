import createArr from '../../helper/createArr';
import getRandom from '../../helper/getRandom';

const alphabhets = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
]

const data = createArr(16).map(d => ({
  contributionId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
  date: "12-12-22",
  time: "10:10 AM",
  waterBody: "Some name",
  accessPoint: alphabhets[getRandom(0, 25)],
  turbidityId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
  coliformId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
}))

function MyContribution() {
  return (
    <section className='dfc h-full overflow-y-hidden'>
      <div className='df gap-4 px-4 py-4'>
        <h1 className='text-2xl'>My Contributions</h1>
      </div>

      <div className='scroll-y overflow-x-auto px-4 mb-2'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='sticky top-0 text-[15px] font-medium bg-slate-200 text-left shadow-sm'>
              <td className='w-36 p-2 pl-4'>Contribution Id</td>
              <td className='w-28 p-2'>Date</td>
              <td className='w-24 p-2'>Time</td>
              <td className='w-32 p-2'>Water Body</td>
              <td className='w-32 p-2'>Access Point</td>
              <td className='w-32 p-2'>Turbidity Id</td>
              <td className='w-32 p-2'>Coliform Id</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(d => (
                <tr key={d.contributionId} className='text-sm even:bg-slate-100'>
                  <td className='p-2 pl-4'>{d.contributionId}</td>
                  <td className='p-2'>{d.date}</td>
                  <td className='p-2'>{d.time}</td>
                  <td className='p-2'>{d.waterBody}</td>
                  <td className='p-2'>{d.accessPoint}</td>
                  <td className='p-2'>{d.turbidityId}</td>
                  <td className='p-2'>{d.coliformId}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default MyContribution