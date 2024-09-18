import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useAuth} from "../core/providers/auth-provider";

import { AccessibilityTwoTone, AssignmentTurnedIn, CallToAction } from '@mui/icons-material';

const HeaderWrapper = styled.header`
    /* background-color: #007bff; */
    background: transparent;
    padding: 1rem 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 150px;
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
    width: 100%;
    align-items: center;
    justify-content: space-between;
    /* background: black; */
`;

const NavLink = styled(Link)`
    color: white;
    width: 300px;
    text-align: center;
    text-justify: center;
    font-size: 25px;
    text-decoration: none;
    background: #007bff;
    padding: 5px;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
        color: white;
        /* text-decoration: underline; */
    }

    &:active {
        opacity: 0.5;
        color: white;
        /* text-decoration: underline; */
    }
`;

const HeaderLogin = () => {

    const auth = useAuth();

    useEffect(() => {
        console.log(auth)
    }, [auth]);

    return (
        <HeaderWrapper>
            <Nav>
                <NavLinks>
                    <NavLink to="/booking"> <AssignmentTurnedIn /> Agendar</NavLink>
                    <NavLink to="/services"> <AccessibilityTwoTone /> Serviços</NavLink>
                    <NavLink to="/paying"> <CallToAction /> Pagamentos</NavLink>
                    {/* { auth.isLoggedIn ? (
                        <>
                            <NavLink to="/services">Serviços</NavLink>
                            <NavLink to="/booking">Agendar</NavLink>
                        </>
                    ) : (
                        <>
                            
                        </>
                    )} */}

                    {/* <NavLink to="/services">Serviços</NavLink>
                    <NavLink to="/booking">Agendar</NavLink>
                    <NavLink to="/login">Login</NavLink> */}
                </NavLinks>
                {/* <Logo>AgendaFácil</Logo> */}
            </Nav>
        </HeaderWrapper>
    );
};

export default HeaderLogin;