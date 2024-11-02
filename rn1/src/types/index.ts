export interface caixaResultados {
    megasena: sorteioResultados;
    timemania: sorteioResultados;
    quina: sorteioResultados;
}

export interface sorteioResultados{
    dataPorExtenso:string;
    dezenas:Array<string>;
  }