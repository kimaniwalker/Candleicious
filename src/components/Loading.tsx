import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { styled } from 'styled-components'
import { colors } from '../../utils/colors'
import { berkshire } from '../../utils/fonts'

type LoadingProps = {
    message: string
}
export default function Loading({ message }: LoadingProps) {


    return (
        <>
            <Wrapper>

                <ContentWrapper>

                    <Message>{message}</Message>
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color={colors.periwinkle}
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass="loading_indicator"
                        visible={true}
                    />
                </ContentWrapper>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 100vh;
`
const Message = styled.h2`
    font-family: ${berkshire.style.fontFamily};
    font-size: 24px;
    text-align: center;
`
const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 345px;
`
