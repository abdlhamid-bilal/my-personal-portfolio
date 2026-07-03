import { useState, useEffect } from 'react'
import styles from './ScientificWork.module.css'
import { motion, AnimatePresence } from 'motion/react'
import TypeWriter from 'typewriter-effect'

function ScientificWork() {
    const [workName, setWorkName] = useState(null);

    const closePreview = () => setWorkName(null);

    useEffect(() => {
        if (workName) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [workName]);

    const worksData = {
        "Wavelets and Multiresolution Processing": {
            link: "https://github.com/abdlhamid-bilal/Wavelets-and-Multiresolution-Processing",
            title: "Wavelets and Multiresolution Processing",
            institution: "RWTH Aachen University",
            advisor: "Dr. Karim Knaebel",
            contributors: "Abdlhamid Bilal, Berk Can Ucar",
            description: "-- Link to paper coming soon --"
        }
    };

    const previewBox = () => {
        const work = worksData[workName];
        if (!work) return null;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ margin: 0 }}>{workName}</h2>
                    <button className={styles.closePreviewBtn} onClick={closePreview}>✕</button>
                </div>

                <div style={{ textAlign: 'left', flex: 1, overflowY: 'auto', paddingRight: '5px' }}>

                    {work.institution && (
                        <>
                            <h3>Institution</h3>
                            <p>{work.institution}</p>
                        </>
                    )}

                    {work.advisor && (
                        <>
                            <h3>Advisor</h3>
                            <p>{work.advisor}</p>
                        </>
                    )}

                    {work.contributors && (
                        <>
                            <h3>Contributors</h3>
                            <p>{work.contributors}</p>
                        </>
                    )}

                    <h3>Description</h3>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        {work.description}
                    </motion.p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <button
                        className={styles.viewPaperBtn}
                        onClick={() => { window.open(work.link); }}
                    >
                        View paper
                    </button>
                </div>
            </div>
        )
    }

    const buttonComponent = (name) => {
        const work = worksData[name];
        if (!work) return null;

        return (
            <motion.button className={styles.workContainer}
                onClick={() => { setWorkName(name); }}
                whileHover={{ scale: 1.05, y: -5 }}
            >
                <p>{name}</p>
            </motion.button>
        )
    }

    return (
        <>
            <div className={styles.container}>
                <h3>Scientific Work</h3>
                <div className={styles.worksContainer}>
                    {buttonComponent("Wavelets and Multiresolution Processing")}
                </div>
            </div>

            <AnimatePresence>
                {workName != null && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closePreview}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, width: '100vw', height: '100vh',
                                background: 'rgba(0,0,0,0.5)',
                                zIndex: 1999
                            }}
                        />
                        <motion.div className={styles.workPreview}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.3 }}
                        >
                            {previewBox()}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default ScientificWork
