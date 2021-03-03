import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";
import { ConfigContext } from "./ConfigContext";

interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ChallengesProviderProps ) {

    const { startNewChallenge } = useContext(ChallengesContext);
    const { input } = useContext(ConfigContext);
    console.log(input)
    const [time, setTime] = useState(input * 60); //25 minutos em segundos
    const [isActive, setIsActive] = useState(false); // se countdown esta ativo ou n
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60); //retorna valor arredondado para baixo
    const seconds = time % 60;

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(input * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }else if(!isActive && time >= 0) {
            setTime(input * 60)
        }
    }, [isActive, time, input]) /** esse array mantem as dependencias q irao ativar o efeito,se oq
                        * foi passado no array mudar algumra hora o q esta no useEffect eh ativado
                        */

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}