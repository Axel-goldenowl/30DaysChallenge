import { useState, useEffect } from "react";

export const useDebounce = (value: string, delay: number) => {
    const [debounceValue, setdebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setdebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debounceValue;
}

