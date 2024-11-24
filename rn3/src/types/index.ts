import { AxiosResponse } from "axios";

export interface NewContact {
    name: string,
    latitude: string,
    longitude: string,
    address: string;
}

export interface createNewContactType {
    (data: NewContact): Promise<string>;
}

export interface deleteContactType{
    (contato:Contact): Promise<string>
}

export interface updateContactType{
    (contato:Contact): Promise<string>
}


export interface Contact {
    id: number,
    name: string,
    latitude: string,
    longitude: string,
    address: string;
}