import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useAuth} from "../core/providers/auth-provider";

const HeaderWrapper = styled.header`
    background-color: #007bff;
    padding: 1rem 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    /* background: #444333; */
`;

const Logo = styled.div`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
    /* background: black; */
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Header = () => {

    const auth = useAuth();

    useEffect(() => {
        console.log(auth)
    }, [auth]);

    return (
        <HeaderWrapper>
            <Nav>
                <Logo>AgendaFácil</Logo>
                <NavLinks>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>

                    {/* { auth.isLoggedIn ? (
                        <>
                            <NavLink to="/services">Serviços</NavLink>
                            <NavLink to="/booking">Agendar</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/services">Serviços</NavLink>
                            <NavLink to="/booking">Agendar</NavLink>
                            <NavLink to="/paying">Pagamentos</NavLink>
                        </>
                    )} */}

                    {/*<NavLink to="/services">Serviços</NavLink>*/}
                    {/*<NavLink to="/booking">Agendar</NavLink>*/}
                    {/*<NavLink to="/login">Login</NavLink>*/}
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;