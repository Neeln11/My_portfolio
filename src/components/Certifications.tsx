"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import styles from './Certifications.module.css';

const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        description: "Validated expertise in designing distributed systems on AWS."
    },
    {
        id: 2,
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera",
        date: "2023",
        description: "Comprehensive training in React, JavaScript, and modern UI/UX principles."
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className={`section ${styles.certifications}`}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.heading}
                >
                    Certifications
                </motion.h2>

                <div className={styles.grid}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                <Award size={24} />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{cert.date}</span>
                                <h3 className={styles.title}>{cert.title}</h3>
                                <h4 className={styles.issuer}>{cert.issuer}</h4>
                                <p className={styles.description}>{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
