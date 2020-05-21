import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Abstract Factory',
}) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <h1>Abstract Factory</h1>
    </header>
    <nav className={styles.mainMenu}>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/domain-model">
          <a>Domain Model</a>
        </Link>
      </div>
      <div>
        <Link href="/apis">
          <a>APIs</a>
        </Link>
      </div>
      <div>
        <Link href="/web-apps">
          <a>Web Applications</a>
        </Link>
      </div>
      <div>
        <Link href="/mobile-apps">
          <a>Mobile Apps</a>
        </Link>
      </div>
      <div>
        <Link href="/security">
          <a>Security</a>
        </Link>  
        </div>     
      </nav>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default Layout