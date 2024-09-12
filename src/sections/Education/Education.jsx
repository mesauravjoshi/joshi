import styles from './Education.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Education() {
  const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>

      <h1 className="sectionTitle">Education</h1>
      {/* one  */}
      <div className={styles.skillList2}>
        <div className={styles.oneLL}>
          <ul>
            <li>
              <h4>
                PANJAB UNIVERSITY, CHANDIGARH
              </h4>
            </li>
          </ul>
        </div>
        <div className={styles.oneRR}>
          <ul>
            <li>
              <p>
                Bachelor of Computer Application,
              </p>
            </li>
            <li>
              <p>
                Grade Achieved: 73%
              </p>
            </li>
            <li>
              <p>
                (2021-24)
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* two  */}
      <div className={styles.skillList2}>
        <div className={styles.oneLL}>
          <ul>
            <li>
              <h4>
                GMSSS SECTOR-23 CHANDIGARH:
              </h4>
            </li>
            {/* <li>
              <p>
            (2020-21)
              </p>
            </li> */}
          </ul>
        </div>
        <div className={styles.oneRR}>
          <ul>
            <li>
              <p>Class XII, Commerce,</p>
            </li>
            <li>
              <p>
                Grade Achieved: 68.2%
              </p>
            </li>
            <li>
              <p>
                (2020-21)
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* three */}
      <div className={styles.skillList2}>
        <div className={styles.oneLL}>
          <ul>
            <li>
              <h4>
                GMHS SECTOR-43 CHANDIGARH
              </h4>
            </li>
          </ul>
        </div>
        <div className={styles.oneRR}>
          <ul>
            <li>
              <p>
                Class X, Grade Achieved: 70%
              </p>
            </li>
            <li>
              <p>
                {/* Grade Achieved: 73% */}
              </p>
            </li>
            <li>
              <p>
                (2018-19)
              </p>
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default Education;
