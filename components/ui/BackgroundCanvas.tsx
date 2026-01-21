"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundCanvas() {
    // Animation: Move very slowly, rotate gently.
    // Respects reduced motion via CSS media query or motion's transition settings typically.

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-50 dark:bg-gray-950 pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-black/50" />

            {/* Blob 1 - Top Left */}
            <motion.div
                className="absolute -top-[20%] -left-[10%] h-[60vh] w-[60vh] rounded-full bg-blue-400/20 blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 2 - Bottom Right */}
            <motion.div
                className="absolute -bottom-[20%] -right-[10%] h-[70vh] w-[70vh] rounded-full bg-indigo-400/20 blur-[120px]"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 3 - Mid Left/Center */}
            <motion.div
                className="absolute top-[40%] -left-[20%] h-[50vh] w-[50vh] rounded-full bg-cyan-400/10 blur-[80px]"
                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-[10%] right-[20%] h-[40vh] w-[40vh] rounded-full bg-purple-400/10 blur-[90px]"
                animate={{
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
