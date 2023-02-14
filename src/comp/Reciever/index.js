import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Chart } from '../../assets/svg/common/chart.svg';

const list = [
  {
    title: "Dashboard",
    icon: <Chart className="app-sb-ic-stroke" />,
    to: 'dashboard'
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

function Reciever() {
  return (
    <AppWrapper role="reciever" list={list} />
  )
}

export default Reciever