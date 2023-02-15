import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './comp/Common/Loader';

const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TemplateSetting = lazy(() => import("./comp/Template/Setting"))
const TemplateSupport = lazy(() => import("./comp/Template/Support"))

const MyContribution = lazy(() => import("./comp/Contributor/MyContribution"))
const StartTest = lazy(() => import("./comp/Contributor/StartTest"))
const Contributor = lazy(() => import("./comp/Contributor"))

const RecieverDashBoard = lazy(() => import("./comp/Reciever/DashBoard"))
const Reciever = lazy(() => import("./comp/Reciever"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        <Route path='contributor' element={<Contributor />}>
          <Route path='my-contribution' element={<MyContribution />} />
          <Route path='start-test' element={<StartTest />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route>

        <Route path='reciever' element={<Reciever />}>
          <Route path='dashboard' element={<RecieverDashBoard />} />
          <Route path='device-data' element={<div>Coming soon...</div>} />
          <Route path='satellite-data' element={<div>Coming soon...</div>} />
          <Route path='device-config' element={<div>Coming soon...</div>} />
          <Route path='e-coli-data' element={<div>Coming soon...</div>} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App