import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import { 
    StyledHeader,
    StyledBrand,
    StyledGlobeIcon,
    StyledBrandText,
    StyledUppercaseWord,
    StyledNavbarCollapse
} from './styles'

const Header = () => (
    <StyledHeader>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <StyledBrand to={'/'}>
                <StyledGlobeIcon />
                <StyledBrandText>
                    <StyledUppercaseWord>rest</StyledUppercaseWord> countries
                </StyledBrandText>
            </StyledBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <StyledNavbarCollapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="https://restcountries.eu/">Rest countries API</Nav.Link>
                    <Nav.Link href="https://github.com/Pavlepavlen/rest-countries">GitHub Repo</Nav.Link>
                </Nav>
            </StyledNavbarCollapse>
        </Navbar>
    </StyledHeader>
)

export default Header
