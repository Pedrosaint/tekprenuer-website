import { useSocket } from '../context/socket-context';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Bell, Radio } from 'lucide-react';

const RealTimeNotice = () => {
    const { visitors, lastEvent, isConnected } = useSocket();

    return (
        <div className="fixed top-0 left-0 w-full z-[100] bg-linear-to-r from-[#021E9C]/80 to-[#010A36]/80 backdrop-blur-md border-b border-white/10 py-1.5 px-4">
            <div className="mx-auto container flex items-center justify-between text-[10px] sm:text-xs font-medium text-white/90">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isConnected ? 'bg-green-400' : 'bg-amber-400'}`}></span>
                            {/* <span className={`relative inline-flex rounded-full h-2 w-2 ${isConnected ? 'bg-green-500' : 'bg-amber-500'}`}></span> */}
                        </span>
                        {/* <span className="hidden sm:inline">{isConnected ? 'Live' : 'Simulating Live'}</span> */}
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Users size={12} className="text-blue-400" />
                        <span>{visitors} Active Visitors</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 overflow-hidden max-w-[50%] sm:max-w-none">
                    <Bell size={12} className="text-amber-400 shrink-0" />
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={lastEvent}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="truncate"
                        >
                            {lastEvent}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <div className="hidden md:flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                    <Radio size={10} className="text-red-400 animate-pulse" />
                    <span className="text-[10px]">Real-time Feed</span>
                </div>
            </div>
        </div>
    );
};

export default RealTimeNotice;
