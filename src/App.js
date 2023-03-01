import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './comp/Common/PrivateRoute';
import Loader from './comp/Common/Loader';

import "keen-slider/keen-slider.min.css";

const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TemplateSetting = lazy(() => import("./comp/Template/Setting"))
const TemplateSupport = lazy(() => import("./comp/Template/Support"))

const MyContribution = lazy(() => import("./comp/Contributor/MyContribution"))
const OrderEntry = lazy(() => import("./comp/Contributor/OrderEntry"))
const StartTest = lazy(() => import("./comp/Contributor/StartTest"))
const OrderList = lazy(() => import("./comp/Contributor/OrderList"))
const Payments = lazy(() => import("./comp/Contributor/Payments"))
const Contributor = lazy(() => import("./comp/Contributor"))

const RecieverDashBoard = lazy(() => import("./comp/Reciever/DashBoard"))
const SatelliteData = lazy(() => import("./comp/Reciever/SatelliteData"))
const DeviceConfig = lazy(() => import("./comp/Reciever/DeviceConfig"))
const DeviceData = lazy(() => import("./comp/Reciever/DeviceData"))
const EColiData = lazy(() => import("./comp/Reciever/EColi"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        <Route path='/' element={<PrivateRoute comp={<Contributor />} />}>
          <Route path='satellite-data' element={<SatelliteData />} />
          <Route path='device-config' element={<DeviceConfig />} />
          <Route path='device-data' element={<DeviceData />} />
          <Route path='e-coli-data' element={<EColiData />} />
          <Route path='dashboard' element={<RecieverDashBoard />} />
          <Route path='my-contribution' element={<MyContribution />} />
          <Route path='order-entry' element={<OrderEntry />} />
          <Route path='start-test' element={<StartTest />} />
          <Route path='order-list' element={<OrderList />} />
          <Route path='payments' element={<Payments />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App