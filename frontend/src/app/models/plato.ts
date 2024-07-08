export class Plato {
    public nombre:string;
    public desc:string;
    public costo:number;
    public cant:number;
    public img:string;

    constructor(nombre:string,desc:string,costo:number,cant:number,img:string){
        this.nombre=nombre;
        this.desc=desc;
        this.costo=costo;
        this.cant=cant;
        this.img=img;
    }
}

export interface Plato{
    "nombre":string;
    "desc":string;
    "costo":number;
    "cant":number;
    "img":string
}