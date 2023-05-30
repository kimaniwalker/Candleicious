"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { styled } from 'styled-components'
import { colors } from '../../utils/colors'
import { inter } from '../../utils/fonts'
import { useRouter } from 'next/navigation'
import Loading from './Loading'

const supabase = createClient('https://qpwvdraqvozhvestaili.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwd3ZkcmFxdm96aHZlc3RhaWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg0Mjk4NzQsImV4cCI6MTk3NDAwNTg3NH0.IwZ052DPrTiCH9e5dmlasnq-PfS2Fmnv21KBfjm-nTI')

export default function Login() {
    const [session, setSession] = useState<any>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const router = useRouter()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)

        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            if (session) {
                router.push("/auth/profile")
            }
        })
        setIsLoaded(true)

        return () => subscription.unsubscribe()
    }, [])
    if (!isLoaded) return <Loading message='Checking your credentials ...' />
    if (!session) {
        return (
            <Wrapper>
                <LoginContainer>
                    <Auth view='sign_in' otpType='sms' magicLink showLinks socialLayout='horizontal' providers={['google', 'facebook', 'apple']} redirectTo="http://localhost:3000/auth/login" supabaseClient={supabase} appearance={{
                        theme: ThemeSupa, style: {
                            button: {
                                background: `${colors.periwinkle}`,
                                color: 'white',
                                fontSize: '16px',
                                fontFamily: `${inter.style.fontFamily}`,
                                borderRadius: '8px',
                            },
                            message: { fontSize: '16px' },

                            label: { fontSize: '16px' },
                            loader: { fontSize: '16px' },
                            anchor: { color: 'blue', fontFamily: `${inter.style.fontFamily}`, fontSize: '16px' },
                            input: {
                                minHeight: '45px',
                                fontSize: '16px',
                                fontFamily: `${inter.style.fontFamily}`
                            },
                            divider: {

                            }
                            //..
                        },
                    }} />
                </LoginContainer>
            </Wrapper>
        )
    }
    return <Loading message='Loading ...' />

}


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `

const LoginContainer = styled.div`
    max-width: 700px;
    min-height: 100vh;
    width: 100%;
    padding: 16px;
    margin: 2rem 0;
`

