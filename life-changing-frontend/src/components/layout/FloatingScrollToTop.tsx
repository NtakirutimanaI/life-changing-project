import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    isFooter?: boolean;
}

export const FloatingScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop || 0;

            setIsVisible(scroll > 200);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Fallback interval check for environments where scroll events might be buggy
        const interval = setInterval(handleScroll, 500);

        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            initial={false}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
                pointerEvents: isVisible ? 'auto' : 'none',
                y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'fixed',
                bottom: '145px',
                right: '25px',
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#122f2b', // Match premium theme
                color: '#17d1ac', // Match emerald icon color
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(23, 209, 172, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                cursor: 'pointer',
                zIndex: 999999,
                outline: 'none'
            }}
            whileHover={{ scale: 1.1, backgroundColor: '#17d1ac', color: '#122f2b' }}
            whileTap={{ scale: 0.9 }}
            title="Scroll to Top"
        >
            <ArrowUp size={28} />
        </motion.button>
    );
};
