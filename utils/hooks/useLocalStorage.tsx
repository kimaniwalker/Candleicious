

export function getStorageValue(key: string, defaultValue: any) {
    // getting stored value
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        const initial = saved !== null ? JSON.parse(saved) : defaultValue;
        return initial;
    }
}

export function storeValue(key: string, value: any) {
    // storeValue
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value))
    }
}



