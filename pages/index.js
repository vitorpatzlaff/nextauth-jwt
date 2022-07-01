import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

function HomePage ({ events }) {
  const featuredEvents = getFeaturedEvents()

  return (
    <>
      <EventList items={events} />
    </>
  )
}

export async function getStaticProps () {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents 
    },

    revalidate: 1800
  }
}

export default HomePage
