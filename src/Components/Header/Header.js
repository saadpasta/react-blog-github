import React from 'react'

import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderSubtitle
} from './'
import { config } from "../../config"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderTitle>{config.title}</HeaderTitle>
                <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
