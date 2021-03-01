import { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/gmkonan.png" alt="Guilherme" />
            <div>
                <strong>Guilherme</strong>
                <BiLogOut size={40} className={styles.logOut}/>
                <p>
                    {/* referenciando pasta icons diretamente pq esta na pasta public */}
                    <img src="icons/level.svg" alt="Level" /> 
                    Level {level} 
                </p>
                
            </div>
        </div>
    )
}