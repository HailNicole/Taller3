import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    console.log('El servicio Http esta funcionando…');
  }

  enviarDatos(formData: any): Observable<any> {
    return this.http.post(this.baseUrl+"/agregar-comentario", formData);
  }
}