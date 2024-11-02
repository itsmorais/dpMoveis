import axios from "axios";
const baseURL = "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados"

const api = axios.create({
    baseURL,
    timeout:2000
})


export default api;