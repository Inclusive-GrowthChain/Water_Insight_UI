import logo from '../../assets/img/logo.png';

function Template({ children }) {
  return (
    <div className='auth-bg dc flex-col gap-0 h-screen'>
      {children}

      <div className='df px-6 py-1 fixed bottom-2 bg-[rgba(255,255,255,.6)] rounded-full'>
        <p className='font-medium'>Designed and developed by </p>
        <img className='w-8' src={logo} alt="Inclusive Growth Chain" />
        <p className='text-xl text-[#01264e] font-semibold'>IGC</p>
      </div>
    </div>
  )
}

export default Template