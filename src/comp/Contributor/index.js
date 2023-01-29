import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Test } from '../../assets/svg/common/test.svg';
import { ReactComponent as User } from '../../assets/svg/users/user.svg';

const list = [
  {
    icon: <Test className="stroke-white" />,
    title: "Start a Test",
    to: ''
  },
  {
    icon: <User className="w-5 h-5 fill-white" />,
    title: "My Contribution",
    to: ''
  },
  {
    title: "Support",
    icon: <Support className="fill-white" />,
    to: 'support'
  },
  {
    title: "Settings",
    icon: <Setting className="w-5 h-5 fill-white" />,
    to: 'setting'
  },
]

function Contributor() {
  return (
    <AppWrapper list={list} />
  )
}

export default Contributor