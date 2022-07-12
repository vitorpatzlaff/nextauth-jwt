import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage ({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps () {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },

    // revalidate: 1800
  }
}

export default HomePage
