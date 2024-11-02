import { useState, useContext, useEffect } from "react";
import { CaixaContext } from "../context/caixaContext";
import { sorteioResultados } from "../types";

export const MegaHooks = () => {
    const [mega, setmega] = useState<sorteioResultados | undefined>();

    const caixaContexto = useContext(CaixaContext);
    const sorteios = caixaContexto?.sorteios?.megasena;

    useEffect(() => {
        if (sorteios) {
            setmega(sorteios);
        }
    }, [sorteios]);

    return mega;
}



