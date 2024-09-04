import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const FooterWrapper = styled.footer`
    background-color: #f8f9fa;
    padding: 2rem 0;
    text-align: center;
`;

const Footer = () => {

    // const auth = useAuth();

    return (
        <FooterWrapper>
            <SocialLinks/>
            <p>&copy; 2024 AgendaFácil. Todos os direitos reservados.</p>
        </FooterWrapper>
    );
};

export default Footer;