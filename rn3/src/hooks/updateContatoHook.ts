// hooks/createContatoHook.ts
import { ContatoContextType } from "../context/contatoContext";
import { Contact } from "../types";

export const updateContatoHook = async (createContext: ContatoContextType, contato: Contact) => {
  await createContext.updateContato(contato);
};
