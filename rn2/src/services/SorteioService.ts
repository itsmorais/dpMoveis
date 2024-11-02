import api from "./api";

const SorteioService = async ()  => {
    const response = (await api.get("/")).data
    return response
}

export default SorteioService;