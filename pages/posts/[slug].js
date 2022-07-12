import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts-util"

function PostDetailPage ({ post }) {
  return (
    <PostContent post={post} />
  )
}

export function getStaticProps ({ params }) {
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths () {
  const postFilenames = getPostsFiles()

  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export default PostDetailPage
