import { Contact } from "../types";
import api from "./api";

const updateContact = async (contato: Contact) => {
    const response = (await api.put("/",contato)).status
    return response
}

export default updateContact;