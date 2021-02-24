import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/gmkonan.png" alt="Guilherme" />
            <div>
                <strong>Guilherme</strong>
                <p>
                    {/* referenciando pasta icons diretamente pq esta na pasta public */}
                    <img src="icons/level.svg" alt="Level" /> 
                    level 1
                    </p>
            </div>
        </div>
    )
}