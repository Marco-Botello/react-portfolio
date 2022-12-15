import '../styles/globals.css'
import { Routes, Route } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
  return  <Component {...pageProps} />

}

export default MyApp
