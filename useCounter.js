import { useState } from "react"

export const useCounter = (iniciar=10) =>{
    const [Count, setCount] = useState(iniciar)

    const incrementar = (value=1) =>{
        setCount((current)=>current+value);
    }

    const decrementar = (value=1) =>{
        setCount((current)=>current-value);
    }

    const reniciar = (value=iniciar) =>{
        setCount(value);
    }

    return{
        Count,
        incrementar,
        decrementar,
        reniciar
    }
}