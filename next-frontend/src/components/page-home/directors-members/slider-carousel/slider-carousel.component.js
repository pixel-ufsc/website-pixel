import styles from './slider-carousel.module.css';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SliderCarousel({ children, containerClassName, wrapperClassName }) {
    const carousel = useRef(null);
    const [width, setWidth] = useState(0);

    const getScrollWidth = () => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    };

    useEffect(() => {
        getScrollWidth();
    }, []);

    return (
        <motion.div className={`${styles.container} ${containerClassName ? containerClassName : ''}`}>
            <motion.div
                className={wrapperClassName}
                ref={carousel}
                onDragStart={() => getScrollWidth()}
                whileTap={{ cursor: 'grabbing' }}
                drag={'x'}
                dragElastic={0.05}
                dragConstraints={{ left: -width, right: 0 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
