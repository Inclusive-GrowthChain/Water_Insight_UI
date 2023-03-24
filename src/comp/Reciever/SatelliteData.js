import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSatelite, refreshSatelite } from '../../actions/general';

import { ReactComponent as Search } from '../../assets/svg/common/search.svg';
import Table from './Common/Table';
import Tabs from '../UIComp/Tabs';

const deviceList = ["Hussain Sagar", "Osman Sagar", "Durgam Cheruvu"]

const lists = ["Turbidity", "Salinity", "PH", "Chlorophyll"]

function SatelliteData() {
  const [device, setDevice] = useState("")
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["get-satellites-data"],
    queryFn: getSatelite
  })
  const { refetch: refresh } = useQuery({
    queryFn: refreshSatelite,
    queryKey: ["refresh-satellites-data"],
    enabled: false,
    onSuccess: () => {
      refetch()
    }
  })

  console.log(isLoading, data)
  return (
    <div className="dfc h-full overflow-hidden">
      <div className="df gap-6 p-4 pb-2">
        <h1 className='mr-auto text-2xl font-medium'>
          Satellite Data <span className='text-sm text-gray-600'>(12/12/20 - 01/03/23)</span>
        </h1>

        <button
          className="text-sm bg-[#D9D9D9]"
          onClick={refresh}
        >
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
        <Table firstCol='lakeName' value='turbidity' />
        <Table firstCol='lakeName' value='salinity' />
        <Table firstCol='lakeName' value='ph' />
        <Table firstCol='lakeName' value='chlorophyll' />
      </Tabs>
    </div>
  )
}

export default SatelliteData