import styles from './header.module.css';
import { useState } from 'react';
import Link from 'next/link';
// Assets
import PixelLogoHorizontal from '@public/svgs/pixel/pixel-logo-horizontal';
// Components
import { Squash } from './hamburguer-icon/squash-hamburger.component';
import HeaderButton from './header-button/header-button.component';

function Navigation({ mobile }) {
    return (
        <nav className={mobile ? styles.vertical_nav : styles.horizontal_nav}>
            <HeaderButton href="/">Home</HeaderButton>
            <HeaderButton href="/servicos">Serviços</HeaderButton>
            <HeaderButton href="/sobre">Sobre Nós</HeaderButton>
            <HeaderButton href="/portfolio">Portfólio</HeaderButton>
            <HeaderButton href="/contato">Contato</HeaderButton>
        </nav>
    );
}

export default function Header() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);
    // TODO - Adicionar highlight para o path acessado no momento

    return (
        <>
            <div
                className={
                    isMenuOpen ? `${styles.mobile_menu_container} ${styles.active}` : styles.mobile_menu_container
                }
            >
                <div className={styles.mobile_menu_wrapper}>
                    <Navigation mobile={true} />
                </div>
            </div>
            <header className={styles.container}>
                <Link href={'/'} className={styles.logo_wrapper}>
                    <PixelLogoHorizontal className={styles.logo} />
                </Link>
                <Navigation />
                <button className={styles.mobile_hamburger_icon}>
                    <Squash toggled={isMenuOpen} toggle={setMenuIsOpen} label="Show menu" size={24} area={32} />
                </button>
            </header>
        </>
    );
}
