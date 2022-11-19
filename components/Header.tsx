import styles from '../styles/header.module.css'

import { SiReactos } from "react-icons/si";

function Header() {
  return (
    <div className={styles.headerContainer}>
        <a className={styles.navLink} href="https://google.com"><SiReactos /> K&D Components</a>
    </div>
  )
}

export default Header