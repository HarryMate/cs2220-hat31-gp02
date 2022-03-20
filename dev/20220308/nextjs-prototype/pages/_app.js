import '../styles/globals.scss'
import Layout from '../components/layout'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </React.StrictMode>
  )
}

export default MyApp
