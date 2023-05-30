'use client';
import React from 'react'
import styled from 'styled-components';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1440px;
    margin: 0 auto;
`