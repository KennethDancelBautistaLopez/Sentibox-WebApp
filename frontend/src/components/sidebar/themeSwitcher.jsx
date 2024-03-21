import React, { useEffect, useState } from 'react';
import {FaMoon } from 'react-icons/fa';
import {BsSunFill } from 'react-icons/bs';

const themeSwitcher = () => {

    const [theme, setTheme] = useState(null)

    useEffect(() =>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, []);

    useEffect(() =>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
    <button
    onClick={handleThemeSwitch}
    classname=''>
        {theme === 'dark' ? <FaMoon /> : <BsSunFill />}
    </button>
    );
};

export default themeSwitcher;
