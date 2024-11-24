import { useState, useContext, useEffect } from "react";
import { ContatoContext } from "../context/contatoContext";
import { Contact } from "../types";

export const getContatosHook = () => {
    const [contatos, setContatos] = useState<Contact[] | null>([])
    const ContatoContextValues = useContext(ContatoContext)!;

    useEffect(() => {
        if (ContatoContextValues) {
            setContatos(ContatoContextValues.contatos);
        }
    }, [ContatoContextValues]);

    return contatos;
}



