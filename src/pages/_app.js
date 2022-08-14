import Header from '@components/Header'
import Script from 'next/script'
import Head from 'next/head'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'

import '@styles/global.css'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>React Shop</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2W909411MJ" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());       
          gtag('config', 'G-2W909411MJ');`}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
