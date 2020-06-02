import React, {useContext} from 'react'
import { ThemeContext } from "styled-components";
// import Toggle from "../../Components/Theme/Toggler";

import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderSubtitle,
    GithubLogin
} from './'
import { config } from "../../config"

export const Header = ({theme, toggleTheme}) => {
    const themeContext = useContext(ThemeContext)
    console.log(themeContext)
    return (
        <HeaderContainer>
            <GithubLogin isAbsolute={true} />
            {/* <Toggle theme={theme.mode} toggleTheme={toggleTheme} /> */}
            <HeaderWrapper>
                <HeaderTitle>{config.title}</HeaderTitle>
                <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
