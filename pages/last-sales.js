// import { useEffect, useState } from 'react'

// function LastSalesPage () {
//   const [sales, setSales] = useState()
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     setIsLoading(true)
//     fetch('https://nextjs-academind-5107b-default-rtdb.firebaseio.com/sales.json')
//     .then(response => response.json())
//     .then(data => {
//       const tranformedSales = []

//       for (const key in data) {
//         tranformedSales.push({
//           id: key,
//           username: data[key].username,
//           volume: data[key].volume
//         })
//       }

//       setSales(tranformedSales)
//       setIsLoading(false)
//     })
//   }, [])

//   if (isLoading) {
//     return (
//       <p>Loading...</p>
//     )
//   }

//   if (!sales) {
//     return (
//       <p>No data yet</p>
//     )
//   }
  
//   return (
//     <ul>
//       {sales.map(sale => (
//         <li key={sale.id}>
//           {sale.username} - ${sale.volume}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default LastSalesPage

// using SWR
import { useEffect, useState } from 'react'
import useSWR from 'swr'

function LastSalesPage (props) {
  const [sales, setSales] = useState(props.sales)

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error } = useSWR('https://nextjs-academind-5107b-default-rtdb.firebaseio.com/sales.json', fetcher)

  useEffect(() => {
    if (data) {
      const tranformedSales = []

      for (const key in data) {
        tranformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        })
      }

      setSales(tranformedSales)
    }
  }, [data])

  if (error) {
    return <p>Failed to load.</p>
  }
  
  if (!data && !sales) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps () {
  const response = await fetch('https://nextjs-academind-5107b-default-rtdb.firebaseio.com/sales.json')
  
  const data = await response.json()

  const tranformedSales = []

  for (const key in data) {
    tranformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume
    })
  }

  return {
    props: { sales: tranformedSales }
  }
}

export default LastSalesPage
