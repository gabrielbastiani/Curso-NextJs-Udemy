import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOptions = {
    "client-id": "Aad85Z187XsBI1Y-wqsvdSA-jIgAhx1sZBwmRtxKusWEEBrhuhVD1z_EhbJavPd7Mqa18IB88joJ5-Ld",
    currency: "BRL",
    intent: "capture"
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} >
      <PayPalScriptProvider options={initialOptions}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp