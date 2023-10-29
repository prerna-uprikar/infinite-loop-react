import styles from './Header.module.scss';
import React, { useEffect, useState } from 'react';


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${styles.headerSection}`}>
               <div> 
               <div className={` ${styles.headerWrapper}`} style={{  backgroundColor: isScrolled ? "white" : "transparent" }}>
                    <div className={styles.header} style={{color: isScrolled ? "#37A" : "white"}}>
                        <div>Infinite Loop</div>
                    </div>
                    <div className={styles.navlistwrap} style={{color: isScrolled ? "#37A" : "white"}}>
                        <li className={styles.navList}>Home</li>
                        <li className={styles.navList}>What We Do</li>
                        <li className={styles.navList}>Testimonials</li>
                        <li className={styles.navList}>Gallery</li>
                        <li className={styles.navList}>Contact</li>
                    </div>
                </div>

                <div className={styles.infiniteSection}>
                    <p className={styles.infiniteLoopHeading}>Infinite Loop</p>
                    <p className={styles.infinitePara}>Bootstrap 4.0 Parallax Theme <br />
                        Free HTML Template by TOOPLATE
                    </p>
                </div>
               </div>
            </div>


        </>
    );
}

export default Header;
