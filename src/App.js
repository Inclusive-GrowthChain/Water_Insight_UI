import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './comp/Common/Loader';

import "keen-slider/keen-slider.min.css";

const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TemplateSetting = lazy(() => import("./comp/Template/Setting"))
const TemplateSupport = lazy(() => import("./comp/Template/Support"))

// const MyContribution = lazy(() => import("./comp/Contributor/MyContribution"))
// const StartTest = lazy(() => import("./comp/Contributor/StartTest"))
// const Contributor = lazy(() => import("./comp/Contributor"))

const RecieverDashBoard = lazy(() => import("./comp/Reciever/DashBoard"))
const SatelliteData = lazy(() => import("./comp/Reciever/SatelliteData"))
const DeviceConfig = lazy(() => import("./comp/Reciever/DeviceConfig"))
const DeviceData = lazy(() => import("./comp/Reciever/DeviceData"))
const EColiData = lazy(() => import("./comp/Reciever/EColi"))
const Reciever = lazy(() => import("./comp/Reciever"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        {/* <Route path='contributor' element={<Contributor />}>
          <Route path='my-contribution' element={<MyContribution />} />
          <Route path='start-test' element={<StartTest />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route> */}

        <Route path='receiver' element={<Reciever />}>
          <Route path='satellite-data' element={<SatelliteData />} />
          <Route path='device-config' element={<DeviceConfig />} />
          <Route path='device-data' element={<DeviceData />} />
          <Route path='e-coli-data' element={<EColiData />} />
          <Route path='dashboard' element={<RecieverDashBoard />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App