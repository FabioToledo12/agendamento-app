import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/images/hero.jpg'; // Substitua pelo caminho da sua imagem

const HeroWrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  background-color: #007bff;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitle>Agende Seu Bem-Estar</HeroTitle>
      <HeroSubtitle>Academias, Personal Trainers e Consultas em um só lugar</HeroSubtitle>
      <CTAButton href="#agendar">Agende Agora</CTAButton>
    </HeroWrapper>
  );
};

export default Hero;