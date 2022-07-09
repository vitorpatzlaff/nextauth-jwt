import { useContext } from 'react'

import classes from './notification.module.css'
import NotificationContext from '../../store/notification-context'

function Notification({ title, message, status }) {
  const notificationCtx = useContext(NotificationContext)

  let statusClasses = ''

  if (status === 'success') {
    statusClasses = classes.success
  }

  if (status === 'error') {
    statusClasses = classes.error
  }

  if (status === 'pending') {
    statusClasses = classes.pending
  }

  const activeClasses = `${classes.notification} ${statusClasses}`

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default Notification