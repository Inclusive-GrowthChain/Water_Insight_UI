import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar({ role, list = [] }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className='dfc px-1 py-4 bg-blue-500 text-white text-sm'>
      {
        list.map(l => (
          <div
            key={l.title}
            className={`df px-4 py-2 cursor-pointer border-l-2 ${`/${role}/${l.to}` === pathname ? "border-white bg-blue-600" : "hover:bg-blue-600 rounded border-l-transparent"}`}
            onClick={() => navigate(l.to)}
          >
            {l.icon}
            {l.title}
          </div>
        ))
      }
    </aside>
  )
}

export default Sidebar