import styles from '../styles/components/SideBar.module.css'
import { BiHomeAlt, BiMedal, BiSun, BiMoon } from 'react-icons/bi';

import useDarkMode from 'use-dark-mode';

export default function SideBar() {

    const darkMode = useDarkMode(false)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <BiHomeAlt className={styles.icons}/>
            <BiMedal className={styles.icons}/>
            <div
            onClick={darkMode.toggle}>
                {darkMode.value ? 
                <BiSun className={styles.icons}/> 
                : <BiMoon className={styles.icons}/>}
            </div>
            </div>
        </div>
    )
}