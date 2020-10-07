import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <h3>LOYA.IO</h3>
        <h4>All software taste like chicken</h4>
        <nav className="nav">
          <Link href="/">
            <a>blog</a>
          </Link>
          <Link href="/projects">
            <a>projects</a>
          </Link>
          <Link href="/recipes">
            <a>recipes</a>
          </Link>
          <Link href="/photos">
            <a>photos</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        a{
          margin-right: 8px;
        }
      `}
      </style>
    </>
  )
}
