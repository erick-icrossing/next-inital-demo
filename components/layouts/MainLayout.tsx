import styles from './MainLayout.module.css';

import Head from 'next/head';
import { Navbar } from '../Navbar';
import { FC, ReactElement } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Erick</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>
            { children }
          </main>
        </div>
      )
}
