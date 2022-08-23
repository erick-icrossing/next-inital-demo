import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';
import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css'

type NexPageLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NexPageLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return getLayout(<Component {...pageProps} />) 
}

export default MyApp
