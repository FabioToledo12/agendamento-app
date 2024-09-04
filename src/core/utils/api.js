import axios from "axios";

export const apiAgendaFacil = axios.create({
  baseURL: "http://localhost:3001",
});