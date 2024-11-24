// hooks/createContatoHook.ts
import { ContatoContextType } from "../context/contatoContext";
import { NewContact } from "../types";

export const createContatoHook = async (createContext: ContatoContextType, contato: NewContact) => {
  await createContext.createContato(contato);
};
