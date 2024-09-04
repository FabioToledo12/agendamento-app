import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialLink href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </SocialLink>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;