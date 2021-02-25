import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

//boas praticas, dando um tipo para children
interface ChallengesProviderProps {
    children: ReactNode; //quando o filho de um componente tambem eh um componente podemos usar o reactnode
}                        //o reactNode aceita qualquer elemento filho como children (ex: texto, tag html, componente etc)

                                            //define q esse contexto segue o formato da interface passada
export const ChallengesContext = createContext({} as ChallengesContextData); 

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    const [activeChallenge, setActiveChallenge] = useState(null)

    /* o 4 eh o fator q define se sera mais facil ou mais dificil se for um numero menor ou maior */
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    //calculo de xp usado em rpgs (interessante)
    //vamos usar um calculo baseado em raiz quadrada (ou potencia)
    //em rpg tambem eh comum usar um de log, mas n vamos usar esse

  const levelUp = () => {
    setLevel(level + 1);
  }

  const startNewChallenge = () => {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  const resetChallenge = () => {
      setActiveChallenge(null);
  }

    return(
        <ChallengesContext.Provider value={{level, 
        currentExperience, 
        challengesCompleted, 
        levelUp, 
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel}}>
      {children}
    </ChallengesContext.Provider>
    )
}