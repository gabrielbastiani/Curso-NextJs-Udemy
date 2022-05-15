
import styles from './styles.module.scss';
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';

export function SignInButton(){

    const session = true;

    return session ? (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => {}}
        >
            <img src="https://allmylinks.com/upload/User/photo/i/l/N/PGJ_3WbZTFj1N9eViTTII1Pt_jOSxICF.jpg" alt="Foto do usuario" />
            Olá Gabriel
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => {}}
        >
            <FaGithub color='#FFB800' />
            Entrar com Github
        </button>
    )
}