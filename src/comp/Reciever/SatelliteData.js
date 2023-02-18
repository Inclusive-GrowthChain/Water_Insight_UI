import { useState } from 'react';
import { ReactComponent as Search } from '../../assets/svg/common/search.svg';
import { IdBtn, StatusBtn } from './Common/Btns';
import dummy from './dummy';

const deviceList = ["Hussain Sagar", "Apartment", "Durgam Cheruvu"]

function SatelliteData() {
  const [device, setDevice] = useState("")

  return (
    <div className="dfc h-full overflow-hidden">
      <div className="df gap-6 p-4 pb-2">
        <h1 className='mr-auto text-2xl font-medium'>Satellite Data</h1>
      </div>

      <div className="df px-4">
        <div className="df gap-3 p-2 border rounded border-[#EBEBEB]">
          <Search className="w-5 h-5 ml-0.5 fill-[#999CA0]" />
          <input
            type="text"
            placeholder='Search by'
            className='border-none p-0'
          />
        </div>

        <div>
          <select
            value={device}
            onChange={e => setDevice(e.target.value)}
          >
            <option value="" disabled>Name</option>
            {deviceList.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      <div className="px-4 mt-4 scroll-y h-full overflow-x-auto">
        <table className='table-fixed w-full'>
          <thead>
            <tr className='sticky top-0 bg-white shadow-sm font-medium text-[#809FB8] border-b'>
              <td className='w-20 px-4 py-2 text-center'>#</td>
              <td className='w-40 px-4 py-2'>Lake name</td>
              <td className='w-40 px-4 py-2'>Turbidity</td>
              <td className='w-28 px-4 py-2'>Salinity</td>
              <td className='w-40 px-4 py-2'>Chlorophyll</td>
              <td className='w-20 px-4 py-2'>PH</td>
              <td className='w-32 px-4 py-2'>Date</td>
              <td className='w-28 px-4 py-2'>Status</td>
            </tr>
          </thead>

          <tbody>
            {
              dummy.map(d => (
                <tr key={d.id} className="text-sm border-b">
                  <td className='px-4 py-2 text-center'><IdBtn id={d.id} type={d.status} /></td>
                  <td className='px-4 py-2'>{d.lakeName}</td>
                  <td className='px-4 py-2'>{d.turbidity}</td>
                  <td className='px-4 py-2'>{d.salinity}</td>
                  <td className='px-4 py-2'>{d.chlorophyll}</td>
                  <td className='px-4 py-2'>{d.ph}</td>
                  <td className='px-4 py-2'>{d.date}</td>
                  <td className='px-4 py-2'><StatusBtn type={d.status} /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SatelliteData