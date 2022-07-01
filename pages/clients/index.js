import Link from 'next/link'

function ClientPage () {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'menu', name: 'Manuel' }
  ]

  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* há estas duas maneiras */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id }
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientPage