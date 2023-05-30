"use client"
import React, { useState, createContext, useRef } from "react";
import { storeValue, getStorageValue } from '../hooks/useLocalStorage'


interface AffiliateProviderProps {
    children: React.ReactNode
}

export const AffiliateContext = createContext({
    affiliateCode: '',
    setAffiliateCode: (value: string) => { },
    getInitialValue: () => { }
});

export const AffiliateWrapper = ({ children }: AffiliateProviderProps) => {

    const [affiliateCode, setAffiliateCode] = useState<string>(() => getInitialValue())


    const initialRender = useRef(true);

    React.useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            storeValue('affiliateCode', affiliateCode)
        }
    }, [affiliateCode]);


    function getInitialValue() {
        const value = getStorageValue('affiliateCode', '')
        return value
    }



    return (
        <AffiliateContext.Provider value={{ affiliateCode, setAffiliateCode, getInitialValue }}>
            {children}
        </AffiliateContext.Provider>
    );
};

export function useAffiliateContext() {
    return React.useContext(AffiliateContext)
}