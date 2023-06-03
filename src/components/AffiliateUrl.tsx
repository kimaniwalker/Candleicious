import React from 'react'
import { styled } from 'styled-components';
import { colors } from '../../utils/colors';
import { useUserContext } from '../../utils/context/user';
import { pangolin } from '../../utils/fonts';



export default function AffiliateUrl() {

    const { userData } = useUserContext()
    const handleCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DOMAIN}/?affiliateCode=${userData.userData.account_id}`);
    }
    const [copied, setCopied] = React.useState(false)
    if (copied) return (
        <Wrapper bg_color={colors.success} onClick={handleCopy}>
            <Description>Copied!</Description>
        </Wrapper>
    )
    return (
        <Wrapper bg_color={colors.apricot} onClick={handleCopy}>
            <Description>Click to copy shareable url</Description>
        </Wrapper>
    )
}
const Wrapper = styled.div<{ bg_color: string }>`
    max-width: 200px;
    width: 100%;
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

