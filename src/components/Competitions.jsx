import { useState, useEffect } from 'react'
import styles from './Competitions.module.css'
import { motion, AnimatePresence } from 'motion/react'
import TypeWriter from 'typewriter-effect'

function Competitions() {

    const [compName, setCompName] = useState(null);

    const closePreview = () => setCompName(null);

    useEffect(() => {
        if (compName) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [compName]);

    const competitionsData = {
        "Itestra Hackathon": {
            description: "Developed an intelligent algorithm to control a snake in automated battles against rival teams. Over the course of a 24-hour hackathon, continuously iterated on the strategy and logic, adapting the code to the results of live tournament rounds that took place every two hours.",
            ranking: "3rd place",
            link: "https://github.com/johannsoetbeer/Itestra_Hackathon"
        },
        "AI Coding Hackathon Cologne": {
            description: "The AI Coding Hackathon in Cologne is about creating interesting and useful projects in 48 hours with Vibe Coding tools like n8n, Base44, ElevenLabs, ... My team and I created 'ExamAI'. The application empowers students by automatically generating customized, newly personalized exams to optimize their individual study and preparation processes.",
            ranking: "Winner of 'Special Category'",
            link: "https://exam-ai-2026.base44.app/"
        },
        "GetaBot Trading Bot Competition": {
            description: "Trading crypto currencies with bots that are based on Machine Learning",
            ranking: "-- Ongoing --",
            link: null
        },
        "HackHPI": {
            description: "HackHPI 2026 was about agriculture, climate & tech. Conceptualized and delivered a dashboard for the “Cula Challenge” to monitor carbon removal operations and flag anomalies, collaborating in a team of five.",
            ranking: "No win. Much fun.",
            link: "https://github.com/RichardPieters/HackHPI2026"
        },
        "Summer of Making": {
            description: "This competition was about creating projects the whole summer. I devloped three: 'Hype', 'TextCompleter' and this portfolio!",
            ranking: "No ranking",
            link: null
        },
        "BWINF 42": {
            description: "Bundeswettbewerb Informatik. The German national computer science competition. It is about solving complex computational problems with efficient algorithms",
            ranking: "1st round: 2nd prize. 2nd round: Participated",
            link: null
        },
        "BWINF 43": {
            description: "Bundeswettbewerb Informatik. The German national computer science competition.",
            ranking: "1st round: 3rd prize",
            link: null
        },
        "JWINF 23": {
            description: "Jugendwettbewerb Informatik. A programming competition for youths. Similar concept to BWINF",
            ranking: "1st+2nd round: 33/48 points. Third round: 1st prize",
            link: null
        },
        "JWINF 24": {
            description: "Jugendwettbewerb Informatik. A programming competition for youths. Similar concept to BWINF",
            ranking: "1st+2nd round: 42/48 points. 3rd round: 2nd prize",
            link: null
        },
        "BWM": {
            description: "Bundeswettbewerb Mathematik. The German national mathematics competition.",
            ranking: "Participant",
            link: null
        },
        "GamesTalente": {
            description: "A competition focusing on young game developers.",
            ranking: "Top 50",
            link: "https://blacklight7.itch.io/roby"
        }
    };

    const previewBox = () => {
        const comp = competitionsData[compName];
        if (!comp) return null;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ margin: 0 }}>{compName}</h2>
                    <button className={styles.closePreviewBtn} onClick={closePreview}>✕</button>
                </div>

                <div style={{ textAlign: 'left', flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
                    <h3>Description</h3>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        {comp.description}
                    </motion.p>
                    <h3>Ranking</h3>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        {comp.ranking}
                    </motion.p>
                </div>
                {comp.link && (
                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                        <button
                            className={styles.viewProjectBtn}
                            onClick={() => { window.open(comp.link); }}
                        >
                            View project
                        </button>
                    </div>
                )}
            </div>
        )
    }

    const buttonComponent = (name, imgPath) => {
        return (
            <motion.button className={styles.projectContainer}
                onClick={() => { setCompName(name); }}
                whileHover={{ scale: 1.05, y: -5 }}
            >
                {imgPath ? (
                    <img src={imgPath} alt={name} />
                ) : (
                    <p>{name}</p>
                )}
            </motion.button>
        )
    }


    return (
        <>
            <div className={styles.container}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Competitions and Hackathons</h2>
                
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2026</div>
                        <div className={styles.timelineContent}>
                            {buttonComponent("Itestra Hackathon")}
                            {buttonComponent("GetaBot Trading Bot Competition")}
                            {buttonComponent("AI Coding Hackathon Cologne")}
                            {buttonComponent("HackHPI")}
                        </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2025</div>
                        <div className={styles.timelineContent}>
                            {buttonComponent("Summer of Making")}
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2024</div>
                        <div className={styles.timelineContent}>
                            {buttonComponent("BWINF 43")}
                            {buttonComponent("JWINF 24")}
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2023</div>
                        <div className={styles.timelineContent}>
                            {buttonComponent("BWM")}
                            {buttonComponent("BWINF 42")}
                            {buttonComponent("JWINF 23")}
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineYear}>2022</div>
                        <div className={styles.timelineContent}>
                            {buttonComponent("GamesTalente")}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {compName != null && (
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
                        <motion.div className={styles.projectPreview}
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

export default Competitions
