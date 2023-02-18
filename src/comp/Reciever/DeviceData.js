import { useState } from 'react';
import { ReactComponent as Search } from '../../assets/svg/common/search.svg';
import Table from './Common/Table';
import Tabs from '../UIComp/Tabs';

const deviceList = ["Hussain Sagar", "Apartment", "Durgam Cheruvu"]

const lists = ["Kd", "Turbidity", "Secchi Depth"]

function DeviceData() {
  const [device, setDevice] = useState("")

  return (
    <div className="dfc h-full overflow-hidden">
      <div className="df gap-6 p-4 pb-2">
        <h1 className='mr-auto text-2xl font-medium'>DeviceData</h1>

        <button className="text-sm bg-[#D9D9D9]">
          Refresh
        </button>
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

      <Tabs
        tabsList={lists}
        listClass='mx-6'
        tabClass='pb-2 pt-4'
        panelClass='scroll-y overflow-x-auto ml-4 my-2'
        panelChildCls="h-full"
      >
        <Table firstCol='testName' value='kd' />
        <Table firstCol='testName' value='turbidity' />
        <Table firstCol='testName' value='secchiDepth' />
      </Tabs>
    </div>
  )
}

export default DeviceData