import React, { forwardRef } from 'react';
import styles from './ProjectsStyles.module.css';
// 1
import passwordManager from '../../assets/password.jpg';
// 2
import keylog from '../../assets/keylog.png';
import ProjectCard from '../../common/ProjectCard';

const Projects = forwardRef((props, ref) => (
  <section id="projects" className={styles.container} ref={ref}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      {/* <div className={styles.projectBox}> */}
        <ProjectCard
          src={passwordManager}
          link="https://github.com/mesauravjoshi/PasswordManager_SHA_AES"
          h3="Password Manager"
          p="&nbsp;Utilized SHA-512 hashing and AES-256 encryption to protect your passwords."
        />
      {/* </div> */}
      {/* <div className={styles.projectBox}> */}
        <ProjectCard
          src={keylog}
          link="https://github.com/mesauravjoshi/Keylog_spy"
          h3="Key Logger"
          p="&nbsp;Real-time keystroke logging and clipboard monitoring capabilities"
        />
      {/* </div> */}
      {/* <div className={styles.projectBox}> */}
        <ProjectCard
          src={passwordManager}
          link="https://github.com/mesauravjoshi/Currency_Convertor"
          h3="Currency Convertor"
          p="Utilized a custom hook to handle currency conversion logic.&nbsp;"
        />
      {/* </div> */}
    </div>
  </section>
));

export default Projects;
