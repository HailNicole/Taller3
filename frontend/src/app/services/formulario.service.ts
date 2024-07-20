import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

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

  getAll(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl+"/comentarios");
  }

  getById(userId: String){
    return firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/comentarios/${userId}`)
    );
  }

  update(userId: string, formValues: any){
    return firstValueFrom(
      this.http.put(`${this.baseUrl}/editComentario/${userId}`, formValues)
    );
  }
}