"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.card}
                >
                    <h2 className={styles.heading}>Let's Work Together</h2>
                    <p className={styles.text}>
                        I'm currently available for freelance work and full-time positions.
                        If you have a project that needs some creative touch, I'd love to hear about it.
                    </p>

                    <div className={styles.actions}>
                        <motion.a
                            href="mailto:hello@example.com"
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} /> Say Hello
                        </motion.a>

                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
