import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Abstract Factory',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/domain-model">
          <a>Domain Model</a>
        </Link>{' '}
        |{' '}
        <Link href="/apis">
          <a>APIs</a>
        </Link>{' '}
        |{' '}
        <Link href="/web-apps">
          <a>Web Applications</a>
        </Link>{' '}
        |{' '}
        <Link href="/mobile-apps">
          <a>Mobile Apps</a>
        </Link>{' '}
        |{' '}
        <Link href="/security">
          <a>Security</a>
        </Link>       
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout