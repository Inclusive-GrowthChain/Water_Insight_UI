import createArr from '../../helper/createArr';
import getRandom from '../../helper/getRandom';

const data = createArr(20).map(d => ({
  id: `${getRandom(100, 1000)}-${getRandom(100, 1000)}`,
  emailId: `raj${d}@gmail.com`,
  startDate: "12-12-22",
  endDate: "13-12-22",
  orderDate: "13-12-22",
}))

function OrderList() {
  return (
    <section className='dfc h-full overflow-y-hidden'>
      <div className='df gap-4 px-4 py-4'>
        <h1 className='text-2xl'>Order List</h1>
      </div>

      <div className='scroll-y overflow-x-auto px-4 mb-2'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='sticky top-0 text-[15px] font-medium bg-slate-200 text-left shadow-sm z-1'>
              <td className='w-36 p-2 pl-4'>Order Id</td>
              <td className='w-32 p-2'>Email</td>
              <td className='w-28 p-2'>Start Date</td>
              <td className='w-28 p-2'>End Date</td>
              <td className='w-28 p-2'>Order Date</td>
              <td className='w-28 p-2'>Order Status</td>
              <td className='w-28 p-2'></td>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d, i) => (
                <tr key={d.id} className='text-sm even:bg-slate-100'>
                  <td className='p-2 pl-4'>{d.id}</td>
                  <td className='p-2'>{d.emailId}</td>
                  <td className='p-2'>{d.startDate}</td>
                  <td className='p-2'>{d.endDate}</td>
                  <td className='p-2'>{d.orderDate}</td>
                  <td className={`p-2 ${i % 7 === 0 ? "text-red-400" : i % 2 === 0 ? "text-green-400" : "text-yellow-300"}`}>
                    {i % 7 === 0 ? "Failed" : i % 2 === 0 ? "Success" : "Pending"}
                  </td>
                  <td>
                    <button className='theme-btn text-xs opacity-80'>
                      Download
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default OrderList