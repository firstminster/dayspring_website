import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
// import "@/../../node_modules";
// Module not found: Can't resolve '../node_modules/font-awesome/css/font-awesome.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
