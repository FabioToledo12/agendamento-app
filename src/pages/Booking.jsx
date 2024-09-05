import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookingWrapper = styled.div`
  padding: 2rem;
`;

const BookingTitle = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const BookingForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
        opacity: .7;
    }
`;

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    // hour: '',
    reserva: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para processar o agendamento
    if ( formData.service === "" || (formData.date === "") === true  /*|| formData.time === null*/ ) {
      toast.warning("🤔 Você precisa preecher obrigatoriamente todos os campos 🤔.");
    } else {  
      const { data: newBooking } = await axios.post("http://localhost:3001/booking", {
        service: formData.service,
        date: formData.date,
        // hour: '2024-09-01 11:00', /*formData.hour,*/
        reserva: formData.reserva
      } )
      toast.success("😀 Você foi cadastrado com sucesso !!! 😀");
    }
  };

  return (
    <BookingWrapper>
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
      <BookingTitle>Agende seu Horário</BookingTitle>
      <BookingForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="service">Serviço</Label>
          <Select id="service" name="service" value={formData.service} onChange={handleChange}>
            <option value="">Selecione um serviço</option>
            <option value="Academia">Academia</option>
            <option value="Personal">Personal Trainer</option>
            <option value="Consulta">Consulta de Saúde</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Data</Label>
          <Input type="datetime-local" id="date" name="date" value={ formData.date } onChange={handleChange} />
        </FormGroup>
        {/* <FormGroup>
          <Label htmlFor="time">Horário</Label>
          <Input type="time" id="time" name="time" value={formData.hour} onChange={handleChange} />
        </FormGroup> */}
        <SubmitButton type="submit">Agendar</SubmitButton>
      </BookingForm>
    </BookingWrapper>
  );
};

export default Booking;