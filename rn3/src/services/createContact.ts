import api from "./api";
import { NewContact } from "../types";


const createContact = async (data: NewContact) => {
    const response = await api.post("/", data);
    return response
}

export default createContact;