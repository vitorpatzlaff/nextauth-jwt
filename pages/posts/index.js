import Head from 'next/head'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'

function AllPostsPage ({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming-related tutorials and posts!' />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export function getStaticProps () {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage
