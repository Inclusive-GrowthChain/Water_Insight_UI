import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Payment } from '../../assets/svg/common/payment.svg';
// import { ReactComponent as Test } from '../../assets/svg/common/test.svg';
import { ReactComponent as Brand } from '../../assets/svg/common/brand-sentry.svg';
import { ReactComponent as List } from '../../assets/svg/common/list.svg';
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
    icon: <Payment className="w-5 h-5 app-sb-ic-stroke" />,
    title: "Payments",
    to: 'payments'
  },
  {
    icon: <Brand className="w-5 h-5 app-sb-ic-stroke" />,
    title: "Order Entry",
    to: 'order-entry'
  },
  {
    icon: <List className="w-5 h-5 app-sb-ic-stroke" />,
    title: "Order List",
    to: 'order-list'
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