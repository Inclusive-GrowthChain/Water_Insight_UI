import { IdBtn, StatusBtn } from './Btns';
import dummy from '../dummy';

function Table({ data = dummy, firstCol = "", value = "" }) {
  return (
    <table className='table-fixed w-full'>
      <thead>
        <tr className='sticky top-0 bg-white shadow-sm font-medium text-[#809FB8] border-b'>
          <td className='w-20 px-4 py-2 text-center'>#</td>
          <td className='w-40 px-4 py-2'>{firstCol === "testName" ? "Test" : "Lake"} name</td>
          {
            firstCol !== "lakeName" &&
            <>
              <td className='w-28 px-4 py-2'>Type</td>
              <td className='w-40 px-4 py-2'>Device Id</td>
            </>
          }
          <td className='w-20 px-4 py-2'>Value</td>
          <td className='w-32 px-4 py-2'>Date</td>
          <td className='w-28 px-4 py-2'>Status</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map(d => (
            <tr key={d._id} className="text-sm border-b">
              <td className='px-4 py-2 text-center'>
                {/* <IdBtn id={d.id} type={d.status} /> */}
              </td>
              <td className='px-4 py-2'>{d[firstCol]}</td>
              {
                firstCol !== "lakeName" &&
                <>
                  <td className='px-4 py-2'>{d.type}</td>
                  <td className='px-4 py-2'>{d.deviceId}</td>
                </>
              }
              <td className='px-4 py-2'>{d[value]}</td>
              <td className='px-4 py-2'>{d.date}</td>
              <td className='px-4 py-2'><StatusBtn type={d.status} /></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table