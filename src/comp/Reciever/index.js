import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';

const list = [
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

function Reciever() {
  return (
    <AppWrapper role="reciever" list={list} />
  )
}

export default Reciever