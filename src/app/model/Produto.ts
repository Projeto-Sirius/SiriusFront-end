import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produto{

    public id:number
    public nome:string
    public preco: number
    public quantidade:number
    public disponivel:boolean
    public usuario:User
    public categoria:Categoria
}