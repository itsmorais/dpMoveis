import api from "./api";

const getContacts = async ()  => {
    const response = (await api.get("/")).data
    return response
}

export default getContacts;