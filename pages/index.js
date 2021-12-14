import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../Comps/Navbar";
import Footer from "../Comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <meta name="keywards" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}> Hello Canada </h1>
        <p className={styles.text}>  Hey there I am someone who came from another planet and I am currently learning Next js cuz I love it and I want to take next to my planet  </p>
        <p className={styles.text}>  Hey there I am someone who came from another planet and I am currently learning Next js cuz I love it and I want to take next to my planet  </p>
        <Link href="/ninjas"> 
          <a className={styles.btn}> See Ninja Listing </a> 
        </Link>
      </div>
    </>
  )
}
