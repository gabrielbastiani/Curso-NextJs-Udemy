
import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
    <Head>
        <title>Board - Organizando suas tarefas.</title>
    </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="ferramenta board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para o seu dia a dia Escreva, planeje e organize-se...</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>
        <div className={styles.donaters}>
          <img src="https://allmylinks.com/upload/User/photo/i/l/N/PGJ_3WbZTFj1N9eViTTII1Pt_jOSxICF.jpg" alt="usuario 1" />
        </div>
      </main>
    </>
  )
}