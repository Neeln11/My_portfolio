"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.glow} />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={styles.imageWrapper}
                    >
                        <Image
                            src="/profile.png"
                            alt="Profile Picture"
                            width={150}
                            height={150}
                            className={styles.profileImage}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.badge}
                    >
                        <Sparkles size={16} className={styles.sparkle} />
                        <span>Available for work</span>
                    </motion.div>

                    <h1 className={styles.title}>
                        Building Digital <br />
                        <span className={styles.highlight}>Experiences</span>
                    </h1>

                    <p className={styles.subtitle}>
                        I craft pixel-perfect, engaging, and accessible digital experiences that merge art with technology.
                    </p>

                    <div className={styles.ctaGroup}>
                        <motion.a
                            href="#projects"
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
