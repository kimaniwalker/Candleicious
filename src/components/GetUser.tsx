import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function GetUser() {

    const router = useRouter()
    const redirect = () => router.push('/auth/login')
    useEffect(() => {
        redirect()
    },)


    return (
        <>

        </>
    )
}
