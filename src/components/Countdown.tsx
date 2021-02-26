import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown } = useContext(CountdownContext);


    // 25 -> '25' split -> ['2', '5']
    /**
     * o padStart chega se o string(minutes) tem 2 caracteres, se n tiver
     * ele vai no comeco (esquerda) e preenche com o numero 0
     */
    //desestruturacao, aqui estamos apenas formatando para mostrar na aplicacao
    //entao isso esta sendo usado para mexer em como a interface eh vista,
    //e n como aplicacao funciona, ou seja, n eh uma regra de negocio
    //como os dados sao visualizados eh uma regra especifica desse componente,
    //q n vai ser usado em mais lugar nenhum, por isso n foi botado no context
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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