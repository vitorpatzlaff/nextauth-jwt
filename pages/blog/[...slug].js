// esta é uma rota catch-all, ou seja, ela pega tudo que vem depois dela na rota em forma de array, necessitando assim que possa existir qualquer coisa depois de /blog/dynamic/...

import { useRouter } from 'next/router'

function BlogPostsPage () {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  )
}

export default BlogPostsPage
