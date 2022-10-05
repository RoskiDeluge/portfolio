import { useEffect } from 'react'
import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import TagManager from 'react-gtm-module'

import '../styles/main.css'

const tagManagerArgs = {
  id: "GTM-PH7X4H4",
}

export default function Nextra({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/AUTHENTICSans-60.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/AUTHENTICSans-150.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
