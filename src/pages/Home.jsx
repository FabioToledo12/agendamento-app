import React from "react";
import styled from "styled-components";
import Features from "../components/Features";
//import SocialLinks from "../components/SocialLinks";
// import { useAuth } from "../core/providers/auth-provider";

const HeroSection = styled.section`
  background-color: #007bff;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  background-color: white;
  color: #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

// const SocialSection = styled.section`
//   text-align: center;
//   padding: 2rem 0;
// `;

const Home = () => {
	// const auth = useAuth();

	return (
		<>
			<HeroSection>
				<HeroTitle>Agende seu bem-estar com facilidade</HeroTitle>
				<HeroSubtitle>
					Academias, Personal Trainers e Consultas de Saúde em um só lugar
				</HeroSubtitle>
				<CTAButton
					href="whatsapp://send?text=Olá&phone=61991508973"
					target="_blank"
				>
					Agende Agora
				</CTAButton>
			</HeroSection>
			<Features />
			{/* <SocialSection>
					<h2>Conecte-se conosco</h2>
					<p>ESTOU LOGADO: {auth.isLoggedIn ? "Sim" : "Não"}</p>
				<SocialLinks /> 
			</SocialSection>*/}
		</>
	);
};

export default Home;
