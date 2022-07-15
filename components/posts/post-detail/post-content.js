import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

import PostHeader from './post-header'
import classes from './post-content.module.css'

SyntaxHighlighter.registerLanguage('js', js)

function PostContent ({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customComponents = {
    // img (image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.properties.src}`}
    //       alt={image.alt}
    //       width={900}
    //       height={450}
    //     />
    //   )
    // },

    p ({ node, children }) {
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return (
        <p>{children}</p>
      )
    },

    code ({ children, className }) {
      const language = className.replace('language-', '')
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
        >
          {children}
        </SyntaxHighlighter>
      )
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
