import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './App.css';
import { FaGithub, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get('https://wttr.in/Fianarantsoa?format=j1')
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.error("Erreur météo :", err);
      });
  }, []);

  return (
    <div className="container">
      {weather && (
        <motion.div
          className="weather"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Fianarantsoa - {weather.current_condition[0].temp_C}°C - {weather.current_condition[0].weatherDesc[0].value}
        </motion.div>
      )}

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bonjour, je m&apos;appelle <span className="name">Mariot Fanantenana</span>
      </motion.h1>

      <motion.p
        className="paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Je suis un développeur fullstack <span className="tech">JavaScript</span>. <br />
        J’aime explorer, respirer l’air frais, me balader, aller à la plage... <br />
        Étudiant en 3<sup>ème</sup> année à l&apos;<strong>ENI Fianarantsoa</strong>. <br />
        J’ai effectué un stage à l’<em>EGM - Conservatoire de Musique Malagasy</em>. <br />
        Simple, ouvert et passionné.
      </motion.p>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="icons">
          <a href="mailto:mariotfanantenana@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/mariotFaah" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://facebook.com/mariotfanantenana" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://wa.me/261343074623" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
        <small>© 2025 Mariot Fanantenana</small>
      </motion.footer>
    </div>
  );
}

export default App;

