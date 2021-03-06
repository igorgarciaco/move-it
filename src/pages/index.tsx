import Head from 'next/head'

import { CompletedChallanges } from '../components/CompletedChallanges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from "../components/ExperiencieBar"
import { Profile } from '../components/Profile'

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
