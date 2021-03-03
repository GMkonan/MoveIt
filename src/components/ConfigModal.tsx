import { useContext } from 'react';
import { ConfigContext } from '../contexts/ConfigContext';
import styles from '../styles/components/ConfigModal.module.css';

export function ConfigModal() {
    
    const { closeConfigModal, updateInput } = useContext(ConfigContext);

    return (
        <div className={styles.overlay}>
        <div className={styles.container}>
            <strong>Mude o tempo (padrão 25 min)</strong>
            <input 
            placeholder="Tempo em minutos Ex: 10"
            type="number" 
            onChange={newTime => {updateInput(Number(newTime.target.value))}}></input>
            <button type="button" onClick={closeConfigModal}>
                <img src="/icons/close.svg" alt="Fechar modal" />
            </button>
        </div>
        </div>
    )
}