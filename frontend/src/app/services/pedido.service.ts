import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl='http://localhost:3000';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…');
  }

  obtenerDatos(): Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"/pedidos");
  }

  obtenerDatoPorId(id:string): Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"/obtener_pedido_por_id/"+id);
  }

  obtenerIdPedido(id:string): Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"/obtener_id_pedido/"+id);
  }

  agregarDato(datos: Pedido) : Observable<any>{
    return this.httpclient.post<Pedido>(this.apiUrl+"/agregar-pedido", datos);
  }

  eliminarDato(id:string){
    return this.httpclient.delete(this.apiUrl+'/borrar-pedido/'+id);
  }

  editarDato(pedido:any,id:string){
    let url=this.apiUrl+'/editar-pedido/'+id;
    return this.httpclient.put(url,pedido);
  }
}