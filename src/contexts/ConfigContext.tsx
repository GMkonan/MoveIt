import { createContext, ReactNode, useState } from "react";
import { ConfigModal } from "../components/ConfigModal";

interface ConfigContextData {
    openConfigModal: () => void;
    closeConfigModal: () => void;
    updateInput: (newTime: number) => void;
    input: number;
}

interface ConfigProviderProps {
    children: ReactNode;
}

export const ConfigContext = createContext({} as ConfigContextData)

export function ConfigProvider({children}: ConfigProviderProps) {

    const [isConfigModalOpen, setConfigModalOpen] = useState(false);
    const [input, setInput] = useState(25);

    const openConfigModal = () => {
        setConfigModalOpen(true)
    }

    const closeConfigModal = () => {
        setConfigModalOpen(false)
    }

    const updateInput = (newTime: number) => {
        setInput(newTime)
    }

    return(
        <ConfigContext.Provider value={{
            openConfigModal,
            closeConfigModal,
            input,
            updateInput
        }}>
            {children}

            {isConfigModalOpen && <ConfigModal />}
        </ConfigContext.Provider>
    )
}