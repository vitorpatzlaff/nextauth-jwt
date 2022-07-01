import { useRouter } from 'next/router'

function ClientProjectsPage () {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler () {
    // load data...
    // router.push('/clients/max/projectA')
    // router.replace('/clients/max/projectA')
    router.push({
      pathname: '/clients/[id]/[clientprojectId]',
      query: { id: 'max', clientprojectId: 'projectA' }
    })
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  )
}

export default ClientProjectsPage
