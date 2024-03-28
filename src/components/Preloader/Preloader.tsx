"use client";
import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.scss";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

const greetings = [
    "· Hey!",
    "· Hola!",
    "· Привет!",
    "· مرحبا!",
    "· Bonjour!",
    "· Hallo!",
    "· Ciao!",
    "· Γεια σας!",
    "· こんにちは!",
    "· 你好!",
    "· Cześć!",
    "· Hej!",
    "· Olá!",
    "· مرحبا!",
    "· Hello!",
];

export default function () {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showWipeAnimation, setShowWipeAnimation] = useState(false);

    useEffect(() => {
        if (greetings[greetingIndex] !== "· Hello!") {
            const timer = setTimeout(() => {
                const nextIndex = (greetingIndex + 1) % greetings.length;
                setGreetingIndex(nextIndex);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [greetingIndex]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPreloader(false);
            setShowWipeAnimation(true);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[10000] h-full overflow-hidden flex flex-col items-center justify-center ${
                styles.preloaderContainer
            } ${showPreloader ? "visible" : "invisible"} ${showWipeAnimation ? styles.wipeAnimation : ""}`}
        >
            <h1 className="text-white">{greetings[greetingIndex]}</h1>
        </div>
    );
}
