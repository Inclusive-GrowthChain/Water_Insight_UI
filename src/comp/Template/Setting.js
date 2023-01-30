import { useId, useState } from 'react';
import { ReactComponent as User } from '../../assets/svg/users/user.svg';

function Input({ name = '', label = '', value = '', onChange }) {
  const id = useId()

  return (
    <div className='df gap-4 my-4'>
      <label
        htmlFor={id}
        className='w-32 mb-0 shrink-0 cursor-pointer'
      >
        {label}
      </label>

      <strong>:</strong>

      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function Settings() {
  const [show, setShow] = useState("profile")
  const [edit, setEdit] = useState(false)
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
  })

  const updateEdit = () => setEdit(p => !p)

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className='h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='max-w-xl my-8 mx-auto p-8 bg-white rounded-2xl'>
        <User className='w-32 h-32 mx-auto rounded-full' />
        <div className='dc gap-6 font-semibold text-lg my-4'>
          <p
            onClick={() => setShow("profile")}
            className={`${show === "profile" ? "text-blue-900" : ""} cursor-pointer`}
          >
            Profile
          </p>
          <p
            onClick={() => setShow("password")}
            className={`${show === "password" ? "text-blue-900" : ""} cursor-pointer`}
          >
            Password Reset
          </p>
        </div>

        {
          show === "profile" &&
          <>
            <Input
              name="firstName"
              label='First Name'
              value={details.firstName}
              onChange={onChange}
            />

            <Input
              name="lastName"
              label='Last Name'
              value={details.lastName}
              onChange={onChange}
            />

            <Input
              name="email"
              label='Email'
              value={details.email}
              onChange={onChange}
            />

            <Input
              name="phone"
              label='Phone number'
              value={details.phone}
              onChange={onChange}
            />

            {
              !edit &&
              <button
                className='block mx-auto text-white bg-blue-600 hover:bg-blue-800'
                onClick={updateEdit}
              >
                Edit
              </button>
            }

            {
              edit &&
              <div className='dc gap-4'>
                <button
                  className='block text-white bg-blue-600 hover:bg-blue-800'
                  onClick={updateEdit}
                >
                  Cancel
                </button>

                <button
                  className='block text-white bg-blue-600 hover:bg-blue-800'
                  onClick={updateEdit}
                >
                  Update
                </button>
              </div>
            }
          </>
        }


        {
          show === "password" &&
          <>
            <Input
              name="oldPassword"
              label='Old Password'
              value={details.oldPassword}
              onChange={onChange}
            />
            <Input
              name="newPassword"
              label='New Password'
              value={details.newPassword}
              onChange={onChange}
            />

            <button
              className='block mx-auto text-white bg-blue-600 hover:bg-blue-800'
            >
              Update
            </button>
          </>
        }
      </div>
    </section>
  )
}

export default Settings