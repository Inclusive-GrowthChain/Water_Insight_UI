import { Link, useNavigate } from 'react-router-dom';
import { DropDownWrapper } from '../UIComp/DropDown';
import { ReactComponent as User } from '../../assets/svg/users/user1.svg';
import logo from '../../assets/img/logo.png';

function Nav({ role = "" }) {
  const navigate = useNavigate()

  const onClk = val => {
    if (val === "Profile") {
      navigate(`${role}/setting`)
    } else if (val === 'Log out') {
      navigate("/")
    }
  }

  return (
    <nav className='df gap-8 px-4 py-2 bg-[#004e7c] text-white'>
      <Link to={role} className="df text-white">
        <img src={logo} alt="" className='w-8' />
        <p>Inclusive Growth Chain</p>
      </Link>

      <DropDownWrapper
        list={["Profile", "Log out"]}
        rootCls='df p-0 ml-auto'
        needArrow
        onClk={onClk}
      >
        <User className="fill-white" />
        <p className='first-letter:uppercase'>Raj kumar</p>
      </DropDownWrapper>
    </nav>
  )
}

export default Nav