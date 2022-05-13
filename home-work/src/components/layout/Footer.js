import {FaInstagram, FaLinkedin, FaGithub, FaMousePointer} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaMousePointer />
        </li>
        <li>
          <FaLinkedin />
        </li>

      </ul>
      <p className={styles.copy_right}>
        <span>Home Work - By Rick</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer