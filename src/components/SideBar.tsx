import styles from '../styles/components/SideBar.module.css'
import { BiHomeAlt, BiMedal, BiSun, BiMoon, BiCog } from 'react-icons/bi';

import useDarkMode from 'use-dark-mode';
import { useContext, useEffect, useState } from 'react';
import { ConfigContext } from '../contexts/ConfigContext';

export default function SideBar() {

    const darkMode = useDarkMode(false)
    console.log(darkMode.value)
    const { openConfigModal } = useContext(ConfigContext);

    /** 
     * Custom hook to fix match between local option and
     * server side option with dark mode (localstorage) 
     */
    const useLoaded = () => {
        const [loaded, setLoaded] = useState(false);
        useEffect(() => setLoaded(true), []);
        return loaded;
    };

    const loaded = useLoaded();

    return (
        <div className={styles.container}>
            <img src="logo.svg" />
                <ul>
                    <li>
                    <BiHomeAlt size={42} className={styles.iconsColor}/>
                    </li>
                    {/*<li>
                    <BiMedal size={42} className={styles.iconsColor} />
                    </li>*/}
                    <li>
                    {darkMode.value &&  loaded ?
                        <BiSun size={42} className={styles.iconsColor} onClick={darkMode.disable}/>
                        : <BiMoon size={42} className={styles.iconsColor} onClick={darkMode.enable}/>}
                    </li>
                </ul>
                <div>
                <BiCog size={42} className={styles.iconsColor} onClick={openConfigModal}/>
                </div>
        </div>
    )
}
