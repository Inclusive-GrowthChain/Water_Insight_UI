import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function AppWrapper({ role = "", list = [] }) {
  return (
    <div className="app-wrapper h-screen overflow-hidden">
      <Nav role={role} />
      <Sidebar role={role} list={list} />
      <Outlet />
    </div>
  )
}

export default AppWrapper