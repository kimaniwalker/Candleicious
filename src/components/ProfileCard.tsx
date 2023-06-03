import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { styled } from 'styled-components'
import { useAffiliateContext } from '../../utils/context/affiliate'
import { berkshire, pangolin } from '../../utils/fonts'
import useHandlePayment from '../../utils/hooks/useHandlePayment'
import useStripe from '../../utils/hooks/useStripe'
import OnboardingStatus from './OnboardingStatus'

type ProfileProps = {
    type?: string
    profileData: any
}
export default function ProfileCard({ type, profileData }: ProfileProps) {

    const { checkout } = useHandlePayment()
    const { createAccountLink } = useStripe()
    const { affiliateCode } = useAffiliateContext()
    const router = useRouter()
    const params = useSearchParams()
    const query = params.get('affiliate_refresh')
    console.log(query)

    const handleAffiliateFlow = async () => {
        const url = await createAccountLink(profileData?.userData.account_id)
        console.log({ url })
        router.push(url.url)
    }


    const handleVipFlow = async () => {
        console.log('clicked')

        let body = {
            mode: 'subscription',
            customer_id: profileData?.userData?.customer_id,
            payment_method_types: ['card', 'cashapp'],
            metadata: { 'orderid172': 'testien' },
            cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/profile`,
            line_items: [
                { price: process.env.NEXT_PUBLIC_STRIPE_MONTHLY, quantity: 1 },
            ],
            shipping_total: 0,
            application_fee_amount: 1890,
            affiliate_code: affiliateCode
        }
        console.log({ body })
        const results = await checkout(body)
        console.log({ results })
        router.push(results)
    }

    React.useEffect(() => {
        if (query === 'true') {
            handleAffiliateFlow()
        }
    }, [])


    if (type === 'affiliate') return (
        <Wrapper onClick={handleAffiliateFlow}>
            <Heading>Become a affiliate</Heading>
            <OnboardingStatus charges_enabled={profileData?.accountData?.charges_enabled} details_submitted={profileData?.accountData?.details_submitted} />
            <Description>
                Join the Candleicious Affiliate Program! Earn up to 10% commission per sale with your unique code. Get a featured candle monthly when your code is used 5 times. Turn your love for candles into a profitable venture. Sign up now!
            </Description>
        </Wrapper>
    )
    if (type === 'vip')
        return (
            <Wrapper onClick={handleVipFlow}>
                <Heading>Become a vip member</Heading>
                <Description>
                    Experience the ultimate candle indulgence with Candleicious VIP Membership! For just $20.99 a month, become a VIP member and receive a handpicked 12oz featured candle delivered straight to your doorstep, allowing you to immerse yourself in captivating scents and elevate your ambiance. Enjoy unparalleled convenience with the ability to pause or cancel your subscription at any time, putting you in control. As a VIP member, you gain access to exclusive deals, discounts, and promotions, ensuring you never miss out on new releases and receiving special perks reserved only for our VIP community. Elevate your candle game and transform your space into a haven of tranquility and beauty by signing up for our VIP program today!                </Description>
            </Wrapper>
        )
    return <></>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem;
   
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    border: solid 2px black;
    border-radius: 8px;
    padding: 8px;
    min-height: 200px;
    justify-content: center;
    background: rgb(255,170,171);
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);

    :hover {
        cursor: pointer;
    
    }
`
const Heading = styled.h2`
    font-size: 24px;
    font-family: ${berkshire.style.fontFamily};
`
const Description = styled.p`
    font-family: ${pangolin.style.fontFamily};
    font-size: 18px;
`

