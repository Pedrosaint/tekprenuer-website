import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

export interface SocketContextType {
    socket: Socket | null;
    visitors: number;
    lastEvent: string;
    isConnected: boolean;
    triggerRealEvent: (message: string) => void;
}

export const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (context === undefined) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};
