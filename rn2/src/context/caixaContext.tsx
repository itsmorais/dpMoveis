import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { caixaResultados } from '../types';
import SorteioService from '../services/SorteioService';

interface CaixaContext {
  sorteios: caixaResultados | null;
  setSorteios: React.Dispatch<React.SetStateAction<caixaResultados | null>>;
}

export const CaixaContext = createContext<CaixaContext | undefined>(undefined);

interface CaixaProviderProps {
  children: ReactNode;
}

export const CaixaProvider = ({ children }: CaixaProviderProps) => {
  const [sorteios, setSorteios] = useState<caixaResultados | null>(null);

  const loadSorteio = async () => {
    try {
      const response = await SorteioService();
      setSorteios(response);
    } catch (error) {
      console.error("Erro ao buscar api da Caixa", error);
    }
  };

  useEffect(() => {
    loadSorteio();
  }, []);

  return (
    <CaixaContext.Provider value={{ sorteios, setSorteios }}>
      {children}
    </CaixaContext.Provider>
  );
};
