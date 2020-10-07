import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LOYA.IO</title>
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>
        © 2020 Loya. This page is <a href="https://github.com/lionloya/loya.io">open sourced with a WTFPL license under on GitHub</a>
      </footer>
    </>
  )
}
