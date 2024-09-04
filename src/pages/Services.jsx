// import api from "./../core/utils/api";
import axios from "axios"
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Features from "../components/Features";

const ServicesWrapper = styled.div`
    padding: 2rem;
`;

const ServicesTitle = styled.h1`
    color: #333;
    text-align: center;
    /* margin-bottom: 2rem; */
`;

const ServicesList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

// const ServiceItem = styled.li`
//     background-color: #f8f9fa;
//     margin-bottom: 1rem;
//     padding: 1rem;
//     border-radius: 5px;
// `;

const ContentTable = styled.table`
    //background-color: red;
    display: flex;
    flex-flow: column nowrap;
`
const ContentTableHead = styled.thead`
    background-color: #007BFF;
`
const ContentTableBody = styled.tbody``
const ContentTableTr = styled.tr`
    display: flex;
    padding: .4rem 0;
    /* margin-left: 10px; */
`
const ContentTableTh = styled.th`
    display: flex;
    flex: 1;
    margin-left: 10px;
`
const ContentTableTd = styled.td`
    display: flex;
    flex: 1;
    margin-left: 10px;
`
const Button = styled.button`
    outline: none;
    border: none;
    padding: .4rem .6rem;
    border-radius: .2rem;
    background: #007BFF;
    color: #ffffff;
`

const Services = () => {

    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getClientes();
    }, []);

    const getClientes = async () => {
        setLoading(true);
        await axios.get('http://localhost:3001/booking').then(r => {
            // console.log('lista de clientes: ', r);
            console.log(r.data.reserva)
            
            setClientes(r.data);
            setLoading(false);
        }).catch(e => {
            // console.log('DEU ERRO: ', e);
            setLoading(false);
        });
    }

    const  handleUpdate = async (id) => { 
        // const bookingUpdate = clientes.filter((bookingItem) => bookingItem._id === id);
        // if (bookingUpdate[0]._id === id ){
        //     await axios.put(`http://localhost:3001/booking/${id}`, {
        //         service: clientes.service, 
        //         date: clientes.date, 
        //         reserva: clientes.reserva
        //     })
        // }
        alert("cliquei pra dar update")
    }

    return (
        <ServicesWrapper>
            <ServicesTitle>Nossos Serviços</ServicesTitle>
            <ServicesList>
            <Features />
                {/* <ServiceItem>Academias</ServiceItem>
                <ServiceItem>Personal Trainers</ServiceItem>
                <ServiceItem>Consultas de Saúde</ServiceItem> */}
                <ContentTable>
                    <ContentTableHead>
                        <ContentTableTr>
                            <ContentTableTh>Servico</ContentTableTh>
                            <ContentTableTh>Data Agendamento</ContentTableTh>
                            <ContentTableTh>Hora Agendamento</ContentTableTh>
                            <ContentTableTh>Reserva</ContentTableTh>
                            <ContentTableTh></ContentTableTh>
                        </ContentTableTr>
                    </ContentTableHead>

                    <ContentTableBody>
                        {
                            loading ? (
                                <ContentTableTr>
                                    <ContentTableTd colSpan={3}>Aguarde carregando...</ContentTableTd>
                                </ContentTableTr>
                            ) : (
                                clientes?.length > 0 ?
                                    clientes.map((cliente, index) => (
                                        <ContentTableTr
                                            key={index}
                                            style={{background: index % 2 === 0 ? 'rgba(0,0,0,.1)' : 'unset'}}
                                        >
                                            <ContentTableTd>{cliente.service}</ContentTableTd>
                                            <ContentTableTd> 
                                                {/* {cliente.date}*/}
                                                {
                                                    new Intl.DateTimeFormat('pt-BR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                 }).format(new Date(cliente.date))}
                                            </ContentTableTd> 
                                            <ContentTableTd>
                                                {/* {cliente.date} */}
                                                {
                                                 new Intl.DateTimeFormat('pt-BR', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                 }).format(new Date(cliente.date))}
                                            </ContentTableTd>
                                            <ContentTableTd>{cliente.reserva === true ? "Agenda Ativa" : "Agenda Cancelada" }</ContentTableTd>
                                            {/* <ContentTableTd>
                                                <Button type="button" onClick={ () => handleUpdate(cliente._id) } >Editar</Button>
                                            </ContentTableTd> */}
                                        </ContentTableTr>
                                    )) : (
                                        <ContentTableTd colSpan={3}>Nenhum cliente cadastrado</ContentTableTd>
                                    )
                            )
                        }
                    </ContentTableBody>
                </ContentTable>
            </ServicesList>
        </ServicesWrapper>
    );
};

export default Services;