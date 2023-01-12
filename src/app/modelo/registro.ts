import { Listado } from "./listado";

export interface Registro {
    username: string;
    password: string;
    pais:Listado;
    ofertas: boolean;
}
