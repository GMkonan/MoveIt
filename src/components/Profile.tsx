import { signOut, useSession } from 'next-auth/client';
import { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const [session] = useSession();
    
    return(
        <div className={styles.profileContainer}>
            {session && <img src={session.user.image} alt={session.user.name} />}
            <div>
                {session && <strong>{session.user.name}</strong>}
                <BiLogOut size={40} onClick={() => signOut({callbackUrl: 'http://localhost:3000'})} className={styles.logOut}/>
                <p>
                    {/* referenciando pasta icons diretamente pq esta na pasta public */}
                    <img src="icons/level.svg" alt="Level" /> 
                    Level {level} 
                </p>
                
            </div>
        </div>
    )
}