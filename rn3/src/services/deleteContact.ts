import { Contact } from "../types";
import api from "./api";

const deleteContact = async (contato: Contact) => {
    const response = (await api.delete(`/?id=${contato.id}`)).data
    return response
}

export default deleteContact;