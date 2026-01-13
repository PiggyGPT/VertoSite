import React from "react";
import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

interface SapphireCardProps {
    className?: string;
    balance?: string;
}

/**
 * Reverted to Legacy Swipes Card design per user request.
 * Keeps the "SapphireCard" name for import compatibility.
 */
export const SapphireCard: React.FC<SapphireCardProps> = ({ 
    className = "", 
    balance
}) => {
    return (
        <div className={`relative aspect-[1.586/1] w-full max-w-[280px] mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-2xl z-10 flex flex-col justify-between p-5 border-t border-white/20 overflow-hidden ${className}`}>
            
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

            {/* Top: Chip & Contactless */}
            <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-6 bg-yellow-200/80 rounded shadow-inner" />
                <Wifi className="w-6 h-6 text-white/50 rotate-90" />
            </div>

            {/* Middle: Optional Balance Display */}
            {balance && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Available Credit</p>
                        <p className="text-2xl font-bold tracking-tight text-white">{balance}</p>
                    </div>
                </div>
            )}
            
            {/* Bottom: Card Info Skeleton */}
            <div className="space-y-2 relative z-10"> 
                <div className="flex gap-3">
                    <div className="h-2 w-12 bg-white/20 rounded-full" />
                    <div className="h-2 w-12 bg-white/20 rounded-full" />
                    <div className="h-2 w-12 bg-white/20 rounded-full" />
                    <div className="h-2 w-6 bg-white/40 rounded-full" />
                </div>
                <div className="flex justify-between items-end">
                    <div className="h-3 w-24 bg-white/30 rounded-full" />
                    <div className="w-8 h-8 rounded-full bg-red-500/80 mix-blend-screen" />
                </div>
            </div>
        </div>
    );
};
