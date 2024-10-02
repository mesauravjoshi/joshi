import React, { forwardRef, useRef } from 'react';
import styles from './ProjectsStyles.module.css';
// 1
import passwordManager from '../../assets/password.jpg';
// 2
import keylog from '../../assets/keylog.png';
import ProjectCard from '../../common/ProjectCard';

// framer motion 
import { motion } from "framer-motion"

const Projects = forwardRef((props, ref) => {
  ref = useRef(null);
  return (
    <section id="projects" className={styles.container} >
      <h1 className="sectionTitle">Projects</h1>
      <div ref={ref} className={styles.projectsContainer}>
        <motion.div drag className={styles.cards}
         dragConstraints={ref} > 
          <ProjectCard
            src={passwordManager}
            link="https://github.com/mesauravjoshi/PasswordManager_SHA_AES"
            h3="Password Manager"
            p="&nbsp;Utilized SHA-512 hashing and AES-256 encryption to protect your passwords."
          />
        </motion.div>
        <motion.div drag className={styles.cards}
         dragConstraints={ref} > 
          <ProjectCard
            src={keylog}
            link="https://github.com/mesauravjoshi/Keylog_spy"
            h3="Key Logger"
            p="&nbsp;Real-time keystroke logging and clipboard monitoring capabilities"
          />
        </motion.div>
        <motion.div drag className={styles.cards}
         dragConstraints={ref} > 
          <ProjectCard
            src={passwordManager}
            link="https://github.com/mesauravjoshi/Currency_Convertor"
            h3="Currency Convertor"
            p="Utilized a custom hook to handle currency conversion logic."
          />
        </motion.div>

      </div>
    </section>
  );
});

export default Projects;