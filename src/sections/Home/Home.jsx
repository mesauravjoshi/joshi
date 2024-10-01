import styles from './HomeStyles.module.css';
// my photo 
import Img from '../../assets/img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailDark from '../../assets/emailDark.svg';
// emailLight
import emailLight from '../../assets/emailLight.svg';

import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Home() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  // my photo 
  const myImage = theme === 'light' ? Img : Img  ;

  // email icon 
  const emailIcon = theme === 'light' ? emailDark : emailLight  ;

  // github icon 
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="home" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={myImage}
          className={styles.hero}
          alt="SAURAV JOSHI IMG"
        />
        {/* <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        /> */}
      </div>
      <div className={styles.info}>
        <h1 className={styles.name} >
          SAURAV JOSHI
          {/* <br /> */}
        </h1>
        {/* <h2>Frontend Developer</h2> */}
        <h2>A Bit About Me</h2>
        <p className={styles.description}>
          I am a computer science enthusiast with a Bachelor’s degree from Panjab University, specializing in web development and software engineering.
          {/* I focus on leveraging my hands-on experience with various programming languages and technologies to create efficient software solutions. */}
        </p>
        <span>
          <a href="https://github.com/mesauravjoshi/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/saurav-joshi-b9736028b/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="mailto:mesaruavjoshii@gmail.com" >
            <img src={emailIcon} alt="Github icon" />
          </a>
        </span>
        
        <a 
        href={'https://drive.google.com/file/d/1V-16faPuyoxOSdxlFbAnCtiy9nGU1Dj7/view?usp=drive_link'} 
        target="_blank"
        >
          <button >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
