import { useState } from 'react';
import Input from '../../Common/Input';
import Modal from '../../UIComp/Modal';

function CreateDao({ closeModal }) {
  const [details, setDetails] = useState({
    title: "",
    summary: "",
    description: "",
    fundingTarget: "",
    minimumStakingAmount: "",
    votingThreshold: "",
    closingTime: "",
  })

  const onChange = (key, val) => {
    setDetails(p => ({
      ...p,
      [key]: val
    }))
  }

  return (
    <Modal
      isOpen
      title='Create '
      closeModal={closeModal}
    >
      <div className='grid grid-cols-2 gap-6'>
        <Input
          name='Title'
          value={details["title"]}
          onChange={val => onChange("title", val)}
        />

        <Input
          name='Funding Target'
          value={details["fundingTarget"]}
          onChange={val => onChange("fundingTarget", val)}
        />

        <Input
          name='Minimum Staking Amount'
          value={details["minimumStakingAmount"]}
          onChange={val => onChange("minimumStakingAmount", val)}
        />

        <Input
          name='Voting Threshold'
          value={details["votingThreshold"]}
          onChange={val => onChange("votingThreshold", val)}
        />

        <Input
          name='Summary'
          value={details["summary"]}
          onChange={val => onChange("summary", val)}
        />

        <Input
          name='Closing Time'
          value={details["closingTime"]}
          onChange={val => onChange("closingTime", val)}
        />

        <div className='col-span-2'>
          <label className="mb-1 text-gray-700" htmlFor="Description">
            Description
          </label>
          <textarea
            id="Description"
            name="Description"
            value={details["description"]}
            onChange={e => onChange("description", e.target.value)}
            className="h-20 max-h-40"
          ></textarea>
        </div>

        <div className='dc col-span-2'>
          <button className='theme-btn px-12 py-2'>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CreateDao