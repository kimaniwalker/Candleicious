'use client';
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { pangolin } from '../../utils/fonts'
import { ProductItem, PromoBannerProps } from '../../utils/types'
import Image from 'next/image';
import { useCartContext } from '../../utils/context/cart';
import { useRouter } from 'next/navigation';
import SvgImage from './SvgImage';



const PromoBanner = ({ content }: PromoBannerProps) => {
    return (
        <PromoBannerWrapper>
            <PromoText>{content}</PromoText>
        </PromoBannerWrapper>
    )
}


export default function Header() {


    const { cart } = useCartContext()
    const [cartTotal, setCartTotal] = React.useState(0)
    const router = useRouter()

    const getTotal = () => {
        let total = cart?.reduce((total: number, item: ProductItem) => total + item.qty, 0)
        setCartTotal(total)
    }
    React.useEffect(() => {
        if (cart) {
            getTotal()
        }
    }, [cart])


    return (
        <>

            <PromoBanner content='' />
            <Wrapper>
                <Content>
                    <LogoWrapper onClick={() => router.push("/")}>
                        <Image src="/logo.png" width={75} height={75} alt="logo" />
                    </LogoWrapper>
                    <CartIconWrapper onClick={() => router.push("/cart")}>

                        <SvgImage fill={colors.pinkie} stroke='#000' height={64} width={64} />
                        <CartCount><CountText>{cartTotal}</CountText></CartCount>
                    </CartIconWrapper>
                </Content>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.section`
    min-height: 150px;   
    background-color: ${colors.brownie}; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgb(255,170,171);
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);
    `
const Content = styled.div`
flex-wrap: wrap;
    max-width: 1280px;

    width: 100%;
    display: flex;
    justify-content: space-between;
`

const PromoBannerWrapper = styled.div`
    min-height: 25px;
    padding: 8px;
    background-color: ${colors.periwinkle};
    display: flex;
    justify-content: center;
    background: rgb(255,170,171);
background: radial-gradient(circle, rgba(255,170,171,1) 6%, rgba(199,210,255,1) 99%);
   
`
const PromoText = styled.p`
    color: black;
    font-family: ${pangolin.style.fontFamily};
    font-size: 16px;
    text-align: center;
    margin: 0;
`

const CartIcon = styled(SvgImage)`
`
const CartIconWrapper = styled.div`
position: relative;
padding: 16px;

:hover{
    cursor: pointer;
}
`
const CartCount = styled.div`
    position: absolute;
    background-color: black;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -5px;
    left: 55px;
`
const LogoWrapper = styled.div`
    :hover {
        cursor: pointer;
    }
`
const CountText = styled.p`
    color: white;
    font-family: ${pangolin.style.fontFamily};
`
