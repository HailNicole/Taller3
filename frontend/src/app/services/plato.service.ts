import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private apiUrl='http://localhost:3000';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…');
  }

  obtenerPlatos(): Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+'/platos');
  }

  obtener_id_plato(id:String): Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"/obtener_id_plato/"+id);
  }

  obtener_plato_por_id(id:String): Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"/obtener_plato_por_id/"+id);
  }

  agregarPlato(datos: any) : Observable<any>{
    return this.httpclient.post<any>(this.apiUrl+ "/agregar-plato", datos);
  }

  eliminarPlato(id:String): Observable<any>{
    return this.httpclient.delete<any>(this.apiUrl+'/borrar-plato/'+id);
  }
}