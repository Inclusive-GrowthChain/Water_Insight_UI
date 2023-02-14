import { Link, useNavigate } from 'react-router-dom';
import { DropDownWrapper } from '../UIComp/DropDown';
import { ReactComponent as Notification } from '../../assets/svg/common/notification.svg';
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
    <nav className='df gap-4 px-4 py-2 shadow'>
      <Link to={`/${role}`} className="df mr-auto">
        <img src={logo} alt="" className='w-10' />
        <p>IGC</p>
      </Link>

      <Notification className="w-5" />

      <DropDownWrapper
        list={["Profile", "Log out"]}
        rootCls='df p-0'
        needArrow
        onClk={onClk}
      >
        <User />
      </DropDownWrapper>
    </nav>
  )
}

export default Nav