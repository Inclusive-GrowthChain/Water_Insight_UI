import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './comp/Common/Loader';

const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TemplateSetting = lazy(() => import("./comp/Template/Setting"))
const TemplateSupport = lazy(() => import("./comp/Template/Support"))

const Contributor = lazy(() => import("./comp/Contributor"))

const Reciever = lazy(() => import("./comp/Reciever"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        <Route path='contributor' element={<Contributor />}>
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route>

        <Route path='reciever' element={<Reciever />}>
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSetting />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App