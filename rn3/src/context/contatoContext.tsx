import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { NewContact, Contact, createNewContactType, deleteContactType, updateContactType } from '../types';
import getContacts from '../services/getContacts';
import createContact from '../services/createContact';
import deleteContact from '../services/deleteContact';
import updateContact from '../services/updateContact';

export interface ContatoContextType {
  contatos: Contact[] | null;
  createContato: createNewContactType;
  deleteContato: deleteContactType;
  updateContato: updateContactType;
  setContatos: React.Dispatch<React.SetStateAction<Contact[] | null>>;
}

export const ContatoContext = createContext<ContatoContextType | undefined>(undefined);

interface ContatoProviderProps {
  children: ReactNode;
}

export const ContatoProvider = ({ children }: ContatoProviderProps) => {
  const [contatos, setContatos] = useState<Contact[] | null>(null);

  const loadContatos = async () => {
    try {
      const response = await getContacts();
      setContatos(response);
    } catch (error: any) {
      console.error("Erro ao buscar contatos", error.message);
    }
  };

  const createContato = async (newContact: NewContact): Promise<string> => {
    try {
      const response = await createContact(newContact);
      await loadContatos();
      return response.status.toString();
    } catch (error: any) {
      return error.message;
    }
  }

  const deleteContato = async (contato: Contact): Promise<string> => {
    try {
      const response = await deleteContact(contato);
      await loadContatos();
      return response.status.toString();
    } catch (error: any) {
      return error.message;
    }
  }

  const updateContato = async (contato: Contact): Promise<string> => {
    try {
      const response = await updateContact(contato);
      await loadContatos();
      return response.toString();
    } catch (error: any) {
      return error.message;
    }
  }

  useEffect(() => {
    loadContatos();
  }, []);

  return (
    <ContatoContext.Provider value={{ contatos, createContato, setContatos, deleteContato, updateContato }}>
      {children}
    </ContatoContext.Provider>
  );
};
