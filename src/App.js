import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './comp/Common/Loader';

const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Suspense>
  )
}

export default App