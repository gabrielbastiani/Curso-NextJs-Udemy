import styles from './styles.module.scss';
import Link from 'next/link';
import { SignInButton } from '../SigninButton';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src='/images/logo.svg' alt='Logo meu Board' />
                </Link>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/board">
                        <a>Meu Board</a>
                    </Link>
                </nav>

                <SignInButton />
                
            </div>
        </header>
    )
}