import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello world!</h1>
      </Layout>
      <footer className={styles.footer}></footer>
    </>
  );
}
