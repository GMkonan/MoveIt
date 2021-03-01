import styles from '../styles/components/SideBar.module.css'
import { BiHomeAlt, BiMedal, BiSun, BiMoon, BiCog } from 'react-icons/bi';

import useDarkMode from 'use-dark-mode';

export default function SideBar() {

    const darkMode = useDarkMode(false)

    return (
        <div className={styles.container}>
            <img src="logo.svg" />
                <ul>
                    <li>
                    <BiHomeAlt size={42} className={styles.iconsColor}/>
                    </li>
                    <li>
                    <BiMedal size={42} className={styles.iconsColor} />
                    </li>
                    <li onClick={darkMode.toggle}>
                    {darkMode.value ?
                        <BiSun size={42} className={styles.iconsColor} />
                        : <BiMoon size={42} className={styles.iconsColor} />}
                    </li>
                </ul>
                <div>
                <BiCog size={42} className={styles.iconsColor} />
                </div>
        </div>
    )
}
