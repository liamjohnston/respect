import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { attributes, react as HomeContent } from '../content/home.md'

import styles from '../styles/Home.module.css'
import { Cat } from '../types/cms'

const Home: NextPage = () => {
    const { title, cats } = attributes
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <article>
                    <h1>{title}</h1>
                    <HomeContent />
                    <ul>
                        {(cats as Array<Cat>).map((cat, k) => (
                            <li key={k}>
                                <h2>{cat.name}</h2>
                                <p>{cat.description}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Home
