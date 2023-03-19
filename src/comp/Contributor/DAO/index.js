import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import CreateDao from "../Modals/CreateDao";

function DAO() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const updateOpen = () => setOpen(p => !p)

  return (
    <section className='dfc h-full overflow-y-hidden'>
      <div className='df gap-4 px-4 py-4'>
        <h1 className='text-2xl'>
          DAO {pathname === "/dao/my-projects" && <span className="text-base font-medium">(My projects)</span>}
        </h1>

        <Link to="/dao/my-projects" className="ml-auto text-sm hover:text-blue-600">
          My Projects
        </Link>

        <button
          className="theme-btn text-sm"
          onClick={updateOpen}
        >
          Create project
        </button>
      </div>

      <div className='scroll-y overflow-x-auto p-4 mb-2'>
        <Outlet />
      </div>

      {
        open &&
        <CreateDao
          closeModal={updateOpen}
        />
      }
    </section>
  )
}

export default DAO