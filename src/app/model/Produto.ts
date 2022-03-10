import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produto{

    public id:number
    public nome:string
    public preco: number
    public foto:string
    public quantidade:number
    public usuario:User
    public categoria:Categoria
}