export class Pedido {
    public nombre_plato:string;
    public cantidad:number;
    public descripcion:string;
    public esp:string;
    public costoTotal:number;
    public id_plato:string;

    constructor(nombre_plato:string,cantidad:number,descripcion:string,esp:string,
        costoTotal:number,id_plato:string){
        this.nombre_plato=nombre_plato;
        this.cantidad=cantidad;
        this.descripcion=descripcion;
        this.esp=esp;
        this.costoTotal=costoTotal;
        this.id_plato=id_plato;
    }
}

export interface Pedido{
    "nombre_plato":string;
    "cantidad":number;
    "descripcion":string;
    "esp":string;
    "costoTotal":number;
    "id_plato":string;
}