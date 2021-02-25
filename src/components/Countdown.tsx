import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60); //25 minutos em segundos
    const [isActive, setIsActive] = useState(false); // se countdown esta ativo ou n
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60); //retorna valor arredondado para baixo
    const seconds = time % 60;

    // 25 -> '25' split -> ['2', '5']
    /**
     * o padStart chega se o string(minutes) tem 2 caracteres, se n tiver
     * ele vai no comeco (esquerda) e preenche com o numero 0
     */
    //desestruturacao
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
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
        }
    }, [isActive, time]) /** esse array mantem as dependencias q irao ativar o efeito,se oq
                        * foi passado no array mudar algumra hora o q esta no useEffect eh ativado
                        */

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? ( //isso seria como um if, then. sem o else
                <button
                    disabled
                    className={styles.countdownButton}
                >

                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? (

                            <button type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >

                                Abandonar ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >

                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}

        </div>
    );
}