import createArr from '../../helper/createArr';
import getRandom from '../../helper/getRandom';

const data = createArr(20).map(d => ({
  paymentId: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
  emailId: `raj${d}@gmail.com`,
  amount: getRandom(10, 100) * 100,
  date: "12-12-22",
}))

function Payments() {
  return (
    <section className='dfc h-full overflow-y-hidden'>
      <div className='df gap-4 px-4 py-4'>
        <h1 className='text-2xl'>Payments</h1>
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
              data.map(d => (
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