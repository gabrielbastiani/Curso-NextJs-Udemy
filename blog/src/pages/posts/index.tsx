
import Head from 'next/head';

import styles from './styles.module.scss';
import Link from 'next/link';

import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';

import {FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi';

export default function Posts(){
    return(
        <div>
            <>
                <Head>
                    <title>Blog | Builder Seu Negócio Online</title>
                </Head>
                <main className={styles.container}>
                    <div className={styles.posts}>
                        <Link href="/">
                            <a>
                                <Image
                                    src={thumbImg}
                                    alt="Post titulo 1"
                                    width={720}
                                    height={410}
                                    quality={100}
                                />
                                <strong>Como fazer um site em Wordpress</strong>
                                <time>22 MAIO 2022</time>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </a>
                        </Link>

                        <div className={styles.buttonNavigate}>
                            <div>
                                <button>
                                    <FiChevronsLeft size={25} color="#FFF" />
                                </button>
                                <button>
                                    <FiChevronLeft size={25} color="#FFF" />
                                </button>
                            </div>

                            <div>
                                <button>
                                    <FiChevronRight size={25} color="#FFF" />
                                </button>
                                <button>
                                    <FiChevronsRight size={25} color="#FFF" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </div>
    )
}