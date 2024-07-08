import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private id_pedido:number=0
  private id_plato:number=0

  setPlato(id_plato: any) {
    this.id_plato = id_plato;
  }

  getPlato(): any{
    return this.id_plato;
  }

  setPedido(pedido: any) {
    this.id_pedido = pedido;
  }

  getPedido(): any{
    return this.id_pedido;
  }
}