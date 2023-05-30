"use client"
import React, { useState, createContext, useRef } from "react";
import { storeValue, getStorageValue } from '../hooks/useLocalStorage'


interface UserProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext({
    session: '',
    setSession: (value: any) => { },
    userData: {
        userData: {
            customer_id: '',
            account_id: ''
        }
    },
    setUserData: (value: any) => { },
    getInitialUserValue: () => { },
    getInitialProfileDataValue: () => { },
});

export const UserWrapper = ({ children }: UserProviderProps) => {

    const [session, setSession] = useState<any>(() => getInitialUserValue())
    const [userData, setUserData] = useState<any>(() => getInitialProfileDataValue())


    const initialRender = useRef(true);

    React.useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            storeValue('user', session)
            storeValue('profileData', userData)
        }
    }, [session, userData]);


    function getInitialUserValue() {
        const value: any = getStorageValue('user', [])
        return value
    }
    function getInitialProfileDataValue() {
        const value: any = getStorageValue('profileData', [])
        return value
    }


    return (
        <UserContext.Provider value={{ session, setSession, getInitialUserValue, getInitialProfileDataValue, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export function useUserContext() {
    return React.useContext(UserContext)
}