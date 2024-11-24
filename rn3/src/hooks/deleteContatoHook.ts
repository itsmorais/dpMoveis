// hooks/createContatoHook.ts
import { ContatoContextType } from "../context/contatoContext";
import { Contact } from "../types";

export const deleteContatoHook = async (createContext: ContatoContextType, contato: Contact) => {
  await createContext.deleteContato(contato);
};
