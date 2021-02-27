import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

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
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

//boas praticas, dando um tipo para children
interface ChallengesProviderProps {
  children: ReactNode; //quando o filho de um componente tambem eh um componente podemos usar o reactnode
  level: number;       //o reactNode aceita qualquer elemento filho como children (ex: texto, tag html, componente etc)
  currentExperience: number;
  challengesCompleted: number;
}                    

//define q esse contexto segue o formato da interface passada
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ 
  children, 
  ...rest //junta tudo q foi passado q n eh o children podendo ser acessado pelo . como feito abaixo
  }:
  ChallengesProviderProps) {         //o ?? significa "se o rest.level n existir, use o 1"
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  /* o 4 eh o fator q define se sera mais facil ou mais dificil se for um numero menor ou maior */
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  //calculo de xp usado em rpgs (interessante)
  //vamos usar um calculo baseado em raiz quadrada (ou potencia)
  //em rpg tambem eh comum usar um de log, mas n vamos usar esse

  //quando passamos um array vazio ele executa uma unica vez assim
  // que o componente eh exibido na tela
  useEffect(() => {
    Notification.requestPermission()
  }, []) //side effect

  useEffect(() => {
      Cookies.set('level', String(level));
      Cookies.set('currentExperience', String(currentExperience));
      Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted])

  //como aqui q ele upa eh aqui q devemos botar o modal
  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification("Novo desafio 🥳", {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null);
  }

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    //let it change (curiosidade)
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel; //para pegar o valor q ele vai ter ao passar de level
      levelUp()
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    }}>
      {children}

      { isLevelUpModalOpen && <LevelUpModal /> /* usando && para ser um if sem o else */}  
    </ChallengesContext.Provider>
  )
}