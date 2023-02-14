import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
// import { ReactComponent as Test } from '../../assets/svg/common/test.svg';
import { ReactComponent as User } from '../../assets/svg/users/user.svg';

const list = [
  // {
  //   icon: <Test className="app-sb-ic-stroke" />,
  //   title: "Start a Test",
  //   to: 'start-test'
  // },
  {
    icon: <User className="w-5 h-5 app-sb-ic-fill" />,
    title: "My Contribution",
    to: 'my-contribution'
  },
  {
    title: "Support",
    icon: <Support className="app-sb-ic-fill" />,
    to: 'support'
  },
  {
    title: "Settings",
    icon: <Setting className="app-sb-ic-fill w-5 h-5" />,
    to: 'setting'
  },
]

function Contributor() {
  return (
    <AppWrapper role="contributor" list={list} />
  )
}

export default Contributor