import Head from "next/head";
import styles from '../styles/home.module.scss';

import Image from "next/image";

import techsImages from '../../public/images/techs.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog da Builder Seu Negocio Online</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Negocios digitais e Desenvolvimento Web</h1>
            <span>Fique por dentro de noticias e dicas incriveis a respeito denegocios digitais e sobre programacao web.</span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>

          <img
              src="/images/banner-conteudos.png"
              alt="conteudo blog"
            />

        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a gerenciar Lojas Virtuais</h2>
            <span>Você vai descobrir como analisar e gerenciar lojas virtuais, e assim saber como vender mais e mais.</span>
          </section>

          <img src="/images/financasApp.png" alt="aplicativos" />
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="aplicativos" />

          <section>
            <h2>Aprenda desenvolvimento Web</h2>
            <span>Como aprender a fazer sites e assim poder vender esses serviços como Freelancer.</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techsImages} alt="Tecnologias"/>
          <h2>Conteudos sobre estas e outras tecnologias para <span className={styles.alunos}>desenvolvimento Web</span> do mercado.</h2>
          <span>Alem muitas dicas referente a negócios digitais e etc...</span>
          <a>
            <button>COMEÇAR AGORA</button>
          </a>
        </div>

      </main>
    </>
  )
}
