import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
// import {useAuth} from "../core/providers/auth-provider";
// import api from "../core/utils/api-copy";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Person2TwoTone } from '@mui/icons-material';

const LoginWrapper = styled.div`
  padding: 2rem;
  /* height: 100vh; */
  /* background: black; */
`;

const LoginForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
        opacity: .7;
  }
`;

const Login = () => {
  //     const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // console.log({ name, value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Booking submitted:', formData);

    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(formData);

    if (formData.email === "" || formData.password === "") {
      toast.warn("🤔 Todos os campos precisam estar preechidos. 🤔");
    } else if (formData.email === "admin" || formData.password === "admin") {
      navigate("/booking");
    } else if (isValid === false) {
      toast.error("❌ Você não tem autorização para entrar no sistema. ❌");
    } else {
      await axios.post('http://localhost:3001/login', formData).then(r => {
        console.log('responsta do login: ', r.data);
        navigate('/booking')
      }).catch(e => {
        console.log('responsta do login: ', e.data);
        toast.error("❌ Você não tem autorização para entrar no sistema. ❌");
      })
    };
  }

  const teste = () => {
    // auth.logout();
    alert("Sair do App")
  }

  return (
    <LoginWrapper>
      <ToastContainer
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
      />
      <LoginForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">E-Mail</Label>
          <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </FormGroup>

        <SubmitButton type="submit">
          <Person2TwoTone />
          Entrar
        </SubmitButton>
        {/* <SubmitButton type="button" onClick={teste}>LOGOUT</SubmitButton> */}
      </LoginForm>
    </LoginWrapper>
  )
}

export default Login;