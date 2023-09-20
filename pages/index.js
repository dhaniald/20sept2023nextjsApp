
//1 import area
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//import something from 'some library/location'

//import DefaultImport from '../somelocations'
import TITLE from './helper/constant';

//import { NamedExport } from 'some library/location'
import { CONTENT } from './helper/constant2';
import Link from 'next/link';

//2. defenation area
function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={CONTENT} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Website
        </h1>

        <h1 className={styles.title}>
          <Link href="/about"> About Us</Link>
        </h1>

        <h1 className={styles.title}>
          <Link href="/contact">Contact Us</Link>
        </h1>

        <div className={styles.grid}>
          <a href="/Lucknow/hotel" className={styles.card}>
            <h2>Lucknow &rarr;</h2>
            <p>Click Here to find hotels in Lucknow.</p>
          </a>

          <a href="/Bhopal/Hotel" className={styles.card}>
            <h2>Bhopal &rarr;</h2>
            <p>Click Here to findHotels in Bhopal!</p>
          </a>

          <a href="/Prayagraj/Hotel" className={styles.card}>
            <h2>Prayagraj &rarr;</h2>
            <p>Click Here to findHotels in Bhopal!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
//3. export area
export default Home;