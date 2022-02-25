import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"


export class Produto{
    
	public id:number
	public nome:string
	public preco:number
	public quantidade:number
	public disponivel:boolean
	public categoria:Categoria
	public usuario:Usuario

}
	