"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.imageCol}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about.png"
                                alt="About Me"
                                width={400}
                                height={400}
                                className={styles.aboutImage}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.textCol}
                    >
                        <h2 className={styles.heading}>About Me</h2>
                        <p className={styles.text}>
                            I'm a passionate developer with a keen eye for design. I specialize in building modern web applications
                            that are not only functional but also beautiful and intuitive.
                        </p>
                        <p className={styles.text}>
                            With a background in Computer Science and years of hands-on experience, I love solving complex problems
                            and turning ideas into reality. When I'm not coding, you can find me exploring new technologies or gaming.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
