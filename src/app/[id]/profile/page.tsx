"use client"
import AffiliateUrl from '@/components/AffiliateUrl'
import Loading from '@/components/Loading'
import OnboardingStatus from '@/components/OnboardingStatus'
import ProfileCard from '@/components/ProfileCard'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'
import { styled } from 'styled-components'
import { fetchUserData } from '../../../../utils/fetchers/fetch'
import { berkshire, pangolin } from '../../../../utils/fonts'
import useStripe from '../../../../utils/hooks/useStripe'
import GetUser from '@/components/GetUser'



export default function ProfilePage({ }) {

    const { isAffiliateReady, hasActiveSubscription, stripeBillingPortal, affiliateLoginLink } = useStripe()
    const { isLoading, isError, data, error } = useQuery('user', fetchUserData)
    const router = useRouter()

    const isActiveAffiliate = isAffiliateReady(data)
    const isVipActive = hasActiveSubscription(data)

    const handleCustomerPortal = async () => {
        const url = await stripeBillingPortal(data?.userData.customer_id)
        console.log({ url })
        router.push(url.url)
    }

    const handleLoginLink = async () => {
        const url = await affiliateLoginLink(data?.userData.account_id)
        console.log({ url })
        router.push(url.url)
    }
    const handleTerms = () => {
        router.push('/privacy/terms')
    }

    if (isError || error) return <Loading message='Something went wrong' />
    if (isLoading) return <Loading message="Loading ..." />
    if (!data) return <GetUser />
    return (
        <>
            <ProfileWrapper>


                {!isVipActive && (
                    <ProfileCard type='vip' profileData={data} />
                )}
                {isVipActive && (

                    <VipWrapper onClick={handleCustomerPortal}>
                        <Heading>Customer Portal</Heading>
                        <Description>Welcome to the Candleicious Customer Portal!
                            As a valued VIP member, we want to ensure that managing your subscription is effortless and convenient. Our customer portal provides you with full control over your subscription and payment information, along with the ability to update your shipping details.</Description>
                    </VipWrapper>
                )}
                {!isActiveAffiliate && (

                    <ProfileCard type='affiliate' profileData={data} />
                )}



                {isActiveAffiliate && (
                    <>

                        <AffiliateWrapper onClick={handleLoginLink}>
                            <Heading>Affiliate Dashboard</Heading>
                            <OnboardingStatus charges_enabled={data?.accountData?.charges_enabled} details_submitted={data?.accountData?.details_submitted} />
                            <Description>Your dashboard is your central hub for managing your affiliate earnings and tracking your success in real time. We`ve designed it to provide you with all the information you need to stay informed and empowered. To ensure the security of your account and protect your earnings, we require SMS authentication for accessing and managing your dashboard.

                            </Description>

                        </AffiliateWrapper>
                        <AffiliateWrapper>
                            <Heading>Affiliate Url</Heading>
                            <AffiliateUrl data={data} />
                            <Description>Thank you for joining our affiliate program. You are now ready to start earning with every purchase made through your unique affiliate link! When you share your affiliate link with potential customers, they can enjoy our exceptional candles while you earn 10% commission on their order as a token of our gratitude. But the benefits don`t stop there! If they sign up for a subscription, you`ll also receive a payment from each invoice, ensuring a continuous stream of earnings. It`s a win-win partnership where you can spread the joy of our candles while earning rewards. Start sharing your affiliate link today and let the rewards roll in!

                            </Description>

                        </AffiliateWrapper>
                    </>

                )}

                <AffiliateWrapper>
                    <Heading>Contact Us</Heading>
                    <Description>At Candleicious, we value your satisfaction and strive to provide exceptional customer service. If you have any further questions, concerns, or issues, we encourage you to reach out to us. Our dedicated team is here to assist you and ensure that your experience with our candles is nothing short of delightful. Whether you need assistance with an order, have inquiries about our products, or require any support, we`re just an email or phone call away. Your satisfaction is our top priority, and we`re committed to resolving any concerns you may have. Don`t hesitate to contact us, and let us go above and beyond to address your needs. Your feedback is invaluable, and we appreciate the opportunity to assist you further.
                    </Description>
                    <Description>Email: <b>admin@kustomcharmz.com</b></Description>
                </AffiliateWrapper>

                <AffiliateWrapper onClick={handleTerms}>
                    <Heading>Terms & Conditions</Heading>
                    <Description>We invite you to take a moment to review our Terms and Conditions, as they outline important details regarding your use of our services and the responsibilities of both parties. By familiarizing yourself with our Terms and Conditions, you can ensure a clear understanding of our policies and procedures. It`s essential to us that you feel informed and confident in your interactions with Candleicious. Should you have any questions or require further clarification, our team is here to assist you. We appreciate your commitment to transparency and encourage you to visit our Terms and Conditions page to enhance your overall experience with us.
                    </Description>
                </AffiliateWrapper>



            </ProfileWrapper>
        </>
    )
}


const PromoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap:wrap;
`
const VipWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    min-height: 200px;
    background-color: lightgray;
border: solid black 2px;
    background: rgb(255,170,171);
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);
    margin: 2rem 2rem;
    border-radius: 8px;
    padding: 8px 16px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    :hover{
        cursor: pointer;
    }
`
const AffiliateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    min-height: 200px;
    background-color: lightgray;
    background: rgb(255,170,171);
    border: solid black 2px;
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);
    margin: 2rem 2rem;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    :hover{
        cursor:pointer;
    }
`
const ProfileWrapper = styled.section`
    min-height: 100vh;
`
const Heading = styled.h2`
    font-family: ${berkshire.style.fontFamily};
    font-size: 24px;
`
const Description = styled.p`
    font-family: ${pangolin.style.fontFamily};
    font-size: 18px;
`