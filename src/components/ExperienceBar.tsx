import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    //regra de 3 para pegar tamanho da barra
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>                   {/*aqui usamos o ?? para usar o 0 caso ainda n existamo cookies */}
                <div style={{width: `${0 ?? percentToNextLevel}%`}}/> {/* Sera inline pois n sera um estilo fixo (progress bar) */}
                <span className={styles.currentExperience} style={{ left: `${0 ?? percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>                             
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}