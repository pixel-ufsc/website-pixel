import styles from './intro-content.module.css';
import introImage from '@public/intro-image.png';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import Image from 'next/image';
import HoverableButton from '@components/ui/buttons/hoverable-button/hoverable-button.component';

export default function IntroContent() {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h1>Desenvolvendo soluções digitais que fazem a diferença</h1>
                <HoverableButton label={'Conheça nossos serviços'} href={'/servicos'} arrowed />
            </div>
            <div className={styles.imageContainer}>
                <Image src={introImage} alt="" fill />
            </div>
            <span>
                <MdKeyboardDoubleArrowDown /> Continue descendo
            </span>
        </section>
    );
}
