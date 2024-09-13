import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/styles.css"
import FeaturesPay from '../components/FeaturesPay';


import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Person2TwoTone } from '@mui/icons-material';

const HalfPayment = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  width: 100%;
  /* background: black; */
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ButtonPay = styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 100%;
  padding: 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  transition: opacity 0.7s ease;
  
  &:hover {
  opacity: .8;

  &:active {
    opacity: .7;
}
`


const Paying = () => {
  //     const auth = useAuth();
  const navigate = useNavigate();

  return (
    <HalfPayment>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      // transition: Bounce,
      /> */}
      <Container>
        <HeroTitle>Selecione os Serviços para Pagamento</HeroTitle>
        <FeaturesPay />
        
        
          <ButtonPay>Efetuar Pagamento</ButtonPay>
        </Container>
    </HalfPayment>
  )
}

export default Paying;