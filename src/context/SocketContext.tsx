import React, { useEffect, useState, useCallback, useRef } from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from './socket-context';
import type { SocketContextType } from './socket-context';
import { dummyEvents } from '../data/events-data';

const socketInstance = io(import.meta.env.VITE_SOCKET_URL || '', {
    autoConnect: false,
    reconnection: true,
});

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visitors, setVisitors] = useState<number>(() => Math.floor(Math.random() * 50) + 10);
    const [lastEvent, setLastEvent] = useState<string>('Welcome to Tekprenuer Nigeria');
    const [isConnected, setIsConnected] = useState(false);
    const [userLocation, setUserLocation] = useState<string>('Nigeria');
    const locationFetched = useRef(false);

    // 1. Function to trigger a REAL event (declared early to avoid hoisting issues)
    const triggerRealEvent = useCallback((message: string) => {
        setLastEvent(message);
        if (socketInstance.connected) {
            socketInstance.emit('realtime_event', message);
        }
    }, []);

    // 2. Fetch real location of the user
    useEffect(() => {
        if (locationFetched.current) return;

        const geoUrl = import.meta.env.VITE_GEO_API_URL;
        fetch(geoUrl)
            .then(res => res.json())
            .then(data => {
                const loc = data.city ? `${data.city}, ${data.region}` : data.country_name;
                setUserLocation(loc);
                locationFetched.current = true;
                // Trigger an initial "arrival" event
                triggerRealEvent(`Someone from ${loc} is exploring this platform right now`);
            })
            .catch(() => {
                setUserLocation('Nigeria');
                locationFetched.current = true;
            });
    }, [triggerRealEvent]);

    useEffect(() => {
        // 3. Smart Dummy Loop (Runs every 10 seconds for events ONLY)
        const simulationInterval = setInterval(() => {
            setLastEvent(prev => {
                // If the last event was a very recent real interaction (joined/viewing), 
                // we'll keep it for one more cycle to ensure the user sees it, 
                // but then we allow dummy events to resume.
                const isRealInteraction = prev.includes("is exploring") || prev.includes("is viewing");

                // random chance to allow dummy data to break through, or if it's not a real interaction
                if (isRealInteraction && Math.random() > 0.3) {
                    return prev;
                }
                return dummyEvents[Math.floor(Math.random() * dummyEvents.length)];
            });
        }, 10000);

        socketInstance.on('connect', () => {
            setIsConnected(true);
            socketInstance.emit('visitor_arrival', { location: userLocation });
        });

        socketInstance.on('disconnect', () => setIsConnected(false));
        socketInstance.on('visitor_count', (count: number) => setVisitors(count));
        socketInstance.on('realtime_event', (event: string) => setLastEvent(event));

        socketInstance.connect();

        return () => {
            socketInstance.off('connect');
            socketInstance.off('disconnect');
            socketInstance.off('visitor_count');
            socketInstance.off('realtime_event');
            socketInstance.disconnect();
            clearInterval(simulationInterval);
        };
    }, [userLocation]);

    const contextValue: SocketContextType = {
        socket: socketInstance,
        visitors,
        lastEvent,
        isConnected,
        triggerRealEvent
    };

    return (
        <SocketContext.Provider value={contextValue}>
            {children}
        </SocketContext.Provider>
    );
};
