'use client'

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function ToggleTheme() {
    const [mounted,setMounted] = useState(false)
    const {theme,setTheme} = useTheme()

    useEffect(()=> {
        setMounted(true)
    },[])

    if(!mounted)
        return null

    return(
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <span className="text-base">🌞</span>
            ) : (
                <span className="text-base">🌙</span>
            )}
        </button>
    )
}