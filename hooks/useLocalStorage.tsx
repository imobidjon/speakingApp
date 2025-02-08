
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            }
        } catch (error) {
            console.error("Error accessing localStorage:", error);
        }
        return initialValue;
    });

    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue;
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
