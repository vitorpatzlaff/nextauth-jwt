import { useRouter } from 'next/router' 

function PortfolioProjectPage () {
  const router = useRouter()

  console.log(router.pathname)
  console.log(router.query)
  console.log(router)

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage