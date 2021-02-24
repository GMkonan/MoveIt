import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(25 * 60); //25 minutos em segundos
    const [active, setActive] = useState(false); // se countdown esta ativo ou n

    const minutes = Math.floor(time / 60); //retorna valor arredondado para baixo
    const seconds = time % 60;

    // 25 -> '25' split -> ['2', '5']
    /**
     * o padStart chega se o string(minutes) tem 2 caracteres, se n tiver
     * ele vai no comeco (esquerda) e preenche com o numero 0
     */
    //desestruturacao
    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('');
    
    const startCountdown = () => {
        setActive(true);
    }

    useEffect(() => {
        if(active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    },[active, time]) /** esse array mantem as dependencias q irao ativar o efeito,se oq
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

            <button type="button"
             className={styles.countdownButton}
             onClick={startCountdown}
             >
                Iniciar um ciclo
            </button>
        </div>
    );
}