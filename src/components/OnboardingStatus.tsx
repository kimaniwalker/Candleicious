import React from 'react'
import { styled } from 'styled-components'
import { colors } from '../../utils/colors'
import { inter, pangolin } from '../../utils/fonts'

type Props = {
    charges_enabled: boolean
    details_submitted: boolean
}
export default function OnboardingStatus({ charges_enabled, details_submitted }: Props) {
    const IncompleteStatus = 'Incomplete'
    const CompleteStatus = 'Complete'
    if (charges_enabled && details_submitted) return (
        <Wrapper bg_color={colors.success}>
            <Description>{CompleteStatus}</Description>
        </Wrapper>
    )
    return (
        <Wrapper bg_color={colors.coral_red}>
            <Description>{IncompleteStatus}</Description>
        </Wrapper>
    )
}

const Wrapper = styled.div<{ bg_color: string }>`
    width: 100px;
    background-color: ${({ bg_color }) => bg_color};
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;

  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
padding: 5px 10px;

box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
`
const Description = styled.p`
    font-family: ${pangolin.style.fontFamily};
    font-size: 16px;
    margin: 0;
`
