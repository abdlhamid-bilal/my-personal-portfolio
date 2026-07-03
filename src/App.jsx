import { useState, useEffect } from 'react'
import './App.css'
import MainButton from './components/MainButton'
import { motion, AnimatePresence } from 'motion/react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Competitions from './components/Competitions';
import ScientificWork from './components/ScientificWork';
import TypeWriter from 'typewriter-effect'
import Contact from './components/Contact';

const songPaths = [
  "/assets/sounds/songs/song1.mp3",
  "/assets/sounds/songs/song2.mp3",
  "/assets/sounds/songs/song3.mp3",
  "/assets/sounds/songs/song4.mp3",
  "/assets/sounds/songs/song5.mp3",
  "/assets/sounds/songs/song6.mp3",
  "/assets/sounds/songs/song7.mp3",
  "/assets/sounds/songs/song8.mp3",
  "/assets/sounds/songs/song9.mp3",
  "/assets/sounds/songs/song10.mp3",
  "/assets/sounds/songs/song11.mp3",
  "/assets/sounds/songs/song12.mp3",
  "/assets/sounds/songs/song13.mp3",
];


let songAudio = new Audio();
let currentSong = -1;

function App() {
  const [isMusic, setIsMusic] = useState(false);
  const [activeView, setActiveView] = useState('home');

  // Edit this to change what you are currently doing
  const CURRENT_STATUS = "Studying 📖";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const toggleMusic = () => {
    if (isMusic) {
      setIsMusic(false);
      songAudio.pause();
    } else {
      if (currentSong === -1) {
        changeMusic();
      }
      setIsMusic(true);
      songAudio.play();
    }
  }

  const changeMusic = () => {
    songAudio.pause();
    songAudio.currentTime = 0;
    let r = Math.floor(Math.random() * songPaths.length);
    if (r === currentSong) {
      r = r === songPaths.length - 1 ? r - 1 : r + 1;
    }

    currentSong = r;
    songAudio.src = songPaths[currentSong];
    songAudio.volume = 0.1;
    songAudio.loop = true;
    songAudio.play();
  }

  const renderView = () => {
    if (activeView === 'home') {
      return (
        <motion.div 
          className="bentoContainer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bentoGrid">
            {/* Profile Card */}
            <div className="bentoItem profileItem">
              <img
                src='/assets/photo.jpeg'
                className="profileImage"
                alt="Profile"
              />
              <h1 className="heroTitle">
                <TypeWriter
                  options={{
                    strings: "Hi, I'm Abdlhamid",
                    autoStart: true,
                    loop: false,
                    cursor: "|",
                    delay: 80,
                  }}
                />
              </h1>
              <div className='statusBubble'>
                <div className="statusDot" />
                <div className="statusContent">
                  Currently: <span className="highlight">{CURRENT_STATUS}</span>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="bentoItem aboutItem">
              <AboutMe />
            </div>

            {/* Navigation Cards */}
            <motion.div 
              className="bentoItem navItem" 
              onClick={() => setActiveView('competitions')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🏆 Competitions
            </motion.div>

            <motion.div 
              className="bentoItem navItem" 
              onClick={() => setActiveView('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💻 Projects
            </motion.div>

            <motion.div 
              className="bentoItem navItem" 
              onClick={() => setActiveView('scientificwork')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📄 Scientific Work
            </motion.div>

            <motion.div 
              className="bentoItem navItem" 
              onClick={() => setActiveView('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ✉️ Contact
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // Detail Views
    let ContentComponent;
    if (activeView === 'competitions') ContentComponent = <Competitions />;
    else if (activeView === 'projects') ContentComponent = <Projects />;
    else if (activeView === 'scientificwork') ContentComponent = <ScientificWork />;
    else if (activeView === 'contact') ContentComponent = <Contact />;

    return (
      <motion.div
        key={activeView}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        style={{ width: '100%' }}
      >
        <div className="sectionHeader">
          <button className="backBtn" onClick={() => setActiveView('home')}>← Back to Overview</button>
        </div>
        <section className='section' style={{ paddingTop: '2rem' }}>
          {ContentComponent}
        </section>
      </motion.div>
    );
  };

  return (
    <>
      <nav className='navbar'>
        <MainButton label={"Home"} onClick={() => setActiveView('home')} />
        <MainButton label={"Competitions"} onClick={() => setActiveView('competitions')} />
        <MainButton label={"Projects"} onClick={() => setActiveView('projects')} />
        <MainButton label={"Scientific Work"} onClick={() => setActiveView('scientificwork')} />
        <MainButton label={"Contact"} onClick={() => setActiveView('contact')} />
      </nav>

      <AnimatePresence mode='wait'>
        {renderView()}
      </AnimatePresence>

      <div className='musicControls'>
        <motion.button
          onClick={toggleMusic}
          className='musicBtn'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isMusic ? "Pause Music" : "Play Music"}
        >
          <img src={isMusic ? '/assets/pause.png' : '/assets/play.png'} alt="play/pause" />
        </motion.button>

        <AnimatePresence>
          {isMusic && (
            <motion.button
              onClick={changeMusic}
              className='musicBtn'
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: -20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
              title="Change Song"
            >
              <img src={'/assets/change.png'} alt="change song" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.img
          animate={isMusic ? { rotate: 360 } : { rotate: 0 }}
          transition={isMusic ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
          className='musicNote'
          src='/assets/music_note.png'
          alt="music note playing animation"
        />
      </div>
    </>
  )
}

export default App
