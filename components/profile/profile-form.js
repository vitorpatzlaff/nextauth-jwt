import { useRef } from 'react'

import classes from './profile-form.module.css'

function ProfileForm ({ onChangePassword }) {
  const currentPassword = useRef()
  const newPassword = useRef()

  function submitHandler (event) {
    event.preventDefault()

    const enteredCurrentPassword = currentPassword.current.value
    const enteredNewPassword = newPassword.current.value

    onChangePassword({
      currentPassword: enteredCurrentPassword,
      newPassword: enteredNewPassword
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='current-password'>Current Password</label>
        <input type='password' id='current-password' ref={currentPassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}

export default ProfileForm
