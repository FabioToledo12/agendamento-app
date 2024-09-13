import {
	faDumbbell,
	faHeartbeat,
	faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const FeaturesWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: #f8f9fa;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    cursor: pointer;
`;

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`;

const FeatureCard = styled.div`
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
    margin-bottom: 1rem;
    color: #333;
`;

const FeatureDescription = styled.p`
    color: #666;
    font-size: 0.9rem;
`;

const InputCheckBox = styled.input`
    /* background: #007bff; */
    border: 0px;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    accent-color: #007bff;
`;

const Features = () => {
	const featuresData = [
		{
			icon: faDumbbell,
			title: "Academias",
			description: "Encontre e agende horários em academias próximas a você.",
		},
		{
			icon: faUserFriends,
			title: "Personal Trainers",
			description:
				"Conecte-se com os melhores personal trainers da sua região.",
		},
		{
			icon: faHeartbeat,
			title: "Consultas de Saúde",
			description:
				"Agende consultas com nutricionistas e outros profissionais de saúde.",
		},
	];

	return (
		<FeaturesWrapper id="servicos">
			<Container>
				<FeatureGrid>
					{featuresData.map((feature, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<FeatureCard key={index}>
							<FeatureIcon icon={feature.icon} />
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>{feature.description}</FeatureDescription>
							<InputCheckBox type="checkbox"></InputCheckBox>
						</FeatureCard>
					))}
				</FeatureGrid>
			</Container>
		</FeaturesWrapper>
	);
};

export default Features;
