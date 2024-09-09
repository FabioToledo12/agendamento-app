// import api from "./../core/utils/api";
import axios from "axios"
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Features from "../components/Features";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// import ModalUnstyled from '@mui/core/ModalUnstyled';
import { EventAvailable, EventBusy } from '@mui/icons-material';


// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


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
    /* color: #fefefe; */
    /* margin-left: 10px; */
`
const ContentTableTh = styled.th`
    display: flex;
    flex: 1;
    margin-left: 10px;
    color: #fefefe;
`
const ContentTableTd = styled.td`
    display: flex;
    flex: 1;
    margin-left: 10px;
`
const Button = styled.button`
    display:flex;
    align-items: center;
    justify-content: space-around;
    outline: none;
    border: none;
    width: 120px;
    padding: .4rem .6rem;
    border-radius: .2rem;
    background: #007BFF;
    color: #ffffff;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
    background-color: #0056b3;
    }

    &:active {
        opacity: .7;
    }
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

const Services = () => {

    const [formData, setFormData] = useState({
        service: '',
        date: '',
        // reserva: true
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        if (formData.service === "" || formData.date === ""){
            toast.warning("🤔 Você precisa preecher obrigatoriamente todos os campos 🤔.");
        } else {
            setOpen(false);
        }
        
    };

    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState([]);
    // const [date, setDate] = useState();

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

    //TODO Aqui ainda está com erro, está dando update somente no ultimo registro
    const  handleUpdate = async (id) => { 
        // handleClickOpen()

        const bookingUpdate = clientes.filter((bookingItem) => bookingItem._id === id);
        // console.log("teste dentro const booking: " + bookingUpdate[0]._id )  
        console.log( id )

        const { data } = await axios.get(`http://localhost:3001/booking`)
        const bookingUpdateSearch = data.filter((bookingItem) => bookingItem._id === id);
        

        if(bookingUpdateSearch[0]._id === id ){
            // console.log(bookingUpdate[0].service)
            // formData.service = bookingUpdateSearch[0].service
            // formData.date = bookingUpdateSearch[0].date

            // biome-ignore lint/style/useConst: <explanation>
            let service = formData.service
            // biome-ignore lint/style/useConst: <explanation>
            let date = formData.date
            
            if (bookingUpdate[0]._id === id ){                   

                await axios.put(`http://localhost:3001/booking/${id}`, {
                    service: service,
                    date: date,
                })

                console.log(service)
                console.log(date)
                console.log(id)
            }
            getClientes()
        }
        
        // console.log(bookingUpdate)
    }

    const handleUpdateCancel = async (id) => { 
        const bookingUpdate = clientes.filter((bookingItem) => bookingItem._id === id);
        if (bookingUpdate[0]._id === id ){
            // console.log( bookingUpdate )
            await axios.put(`http://localhost:3001/booking/${id}`, {
                reserva: false,
            })
            toast.success("😀 Agendamento cancelado com sucesso !!! 😀");
            getClientes()
        }
    }

    return (
        <ServicesWrapper>
            <ToastContainer
                position="top-center"
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
            <ServicesTitle>Nossos Serviços</ServicesTitle>
            <ServicesList>
            <Features />
            {/* <ModalUnstyled /> */}
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
                            <ContentTableTh>Ação</ContentTableTh>
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



{/* -----------------------------------Modal-----------------------------} */}
<Dialog
    key={index}
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
        <DialogTitle id="alert-dialog-title">
        {"Alterar Meu Agendamento"}
        </DialogTitle>
        <DialogContent>

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
                <Select id="service" name="service" onChange={""}>
                    <option value="">Selecione um serviço</option>
                    <option value="Academia">Academia</option>
                    <option value="Personal">Personal Trainer</option>
                    <option value="Consulta">Consulta de Saúde</option>
                </Select>
                <Label htmlFor="date">Data</Label>
                <Input type="datetime-local" id="date" name="date"
                    value={date}
                    onChange={(ev) => setDate(ev.target.value)}
                />
            </FormGroup> */}

        </DialogContent>
        <DialogActions>
            {/* <Button type= "button" onClick={ ( ) => handleUpdate( cliente._id  ) }  >Alterar</Button> */}
            <Button type= "button" onClick={ handleClose }  >Alterar</Button>
            <Button type= "button" onClick={ handleClose } autoFocus>Cancelar</Button>
        </DialogActions>
</Dialog>

{/* -----------------------------------Modal-----------------------------} */}

                                            {/* <ContentTableTd>{cliente._id}</ContentTableTd> */}
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
                                            <ContentTableTd>
                                                {/* <Button type="button" onClick={ () => handleUpdate(cliente._id) } > */}
                                                
                                                <Button type="button" onClick={ () => handleUpdate( cliente._id ) }  >
                                                {/* <Button type="button" onClick={ () => handleClickOpen() } >                                                   */}
                                                    
                                                    <EventAvailable />

                                                    { /* Modal */ }
                                                    {/* <Modal /> */}
                                                    Reagendar
                                                
                                                </Button>

                                                { /* Modal */ }
                                                <Button type="button" onClick={ () => handleUpdateCancel(cliente._id) } >
                                                    <EventBusy />
                                                    Cancelar
                                                </Button>
                                            </ContentTableTd>
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