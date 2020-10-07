import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

// TODO: SEO CHANGE PAGE TITLE TO INCLUDE POST TITLE
export default function BlogArticle({frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
        <Link href="/">
          <a>Back to post list</a>
        </Link>
        <article>
          <h1>{frontmatter.title}</h1>
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { article } = ctx.params

  const content = await import(`../../_articles/${article}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      return slug
    })
    return data
  })(require.context('../../_articles', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
