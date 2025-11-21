"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.navbar}
        >
            <div className={styles.glassContainer}>
                <Link href="/" className={styles.logo}>
                    Portfolio
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#education">Education</Link></li>
                    <li><Link href="#certifications">Certifications</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
