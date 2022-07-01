import Button from '../components/ui/button'

function NotFound() {
  return (
    <div className='center'>
      <h1>404 - Page Not Found</h1>
      <Button link="/">
        Go back home
      </Button>
    </div>
  )
}

export default NotFound