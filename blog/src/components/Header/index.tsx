
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import {ActiveLink} from '../ActiveLink';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>
                        <Image src={logo} alt="Builder Seu Negocio Online"/>
                    </a>
                </ActiveLink>

                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Conteudos</a>
                    </ActiveLink>

                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Quem somos</a>
                    </ActiveLink>
                </nav>

                <a className={styles.readyButton} type="button" href="https://builderseunegocioonline.com.br">COMEÇAR</a>

            </div>
        </header>
    )
}