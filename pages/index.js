import PostList from '@loya.io/components/PostList'
import matter from 'gray-matter'

export default function Home({posts}) {
  return (
    <>
      <h1 className="title">Welcome to my blog!</h1>
      <main>
        <PostList posts={posts} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../_articles', true, /\.md$/))

  return {
    props: {
      posts,
    },
  }
}
