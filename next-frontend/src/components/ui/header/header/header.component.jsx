import styles from './header.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// Assets
import PixelIconFlat from '@public/svgs/pixel/pixel-icon-flat';
// Components
import { Squash } from './hamburguer-icon/squash-hamburger.component';
import HeaderButton from './header-button/header-button.component';
import SelectionProcessButton from '@components/ui/buttons/selection-process-button/selection-process-button.component';
import PixelIconColored from '@public/svgs/pixel/pixel-icon-colored';

function Navigation({ mobile }) {
    const router = useRouter();
    const pathsArray = router.pathname.split('/').splice(1);

    return (
        <nav className={mobile ? styles.vertical_nav : styles.horizontal_nav}>
            <HeaderButton href="/" selected={pathsArray[0] === ''}>
                Home
            </HeaderButton>
            <HeaderButton href="/servicos" selected={pathsArray[0] === 'servicos'}>
                Serviços
            </HeaderButton>
            <HeaderButton href="/sobre" selected={pathsArray[0] === 'sobre'}>
                Sobre
            </HeaderButton>
            <HeaderButton href="/portfolio" selected={pathsArray[0] === 'portfolio'}>
                Portfólio
            </HeaderButton>
            <HeaderButton href="/contato" selected={pathsArray[0] === 'contato'}>
                Contato
            </HeaderButton>
            <HeaderButton.highlighted href="https://app.pipefy.com/public/form/G-YzZES3" target="_blank">
                Processo seletivo
            </HeaderButton.highlighted>
        </nav>
    );
}

export default function Header() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);

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
                    <PixelIconColored className={styles.logo} />
                </Link>
                <Navigation />
                <button className={styles.mobile_hamburger_icon}>
                    <Squash toggled={isMenuOpen} toggle={setMenuIsOpen} label="Show menu" size={24} area={32} />
                </button>
            </header>
        </>
    );
}
