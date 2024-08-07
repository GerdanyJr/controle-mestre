import { Endereco } from "./Endereco";

export interface Cliente {
    id: number,
    nome: string,
    cpf: string,
    endereco: Endereco,
    dataNascimento: string,
    sexo: "FEMININO" | "MASCULINO"
}
