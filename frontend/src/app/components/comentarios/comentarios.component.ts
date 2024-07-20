import { Component, inject } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  formService = inject(FormularioService)

  arrComentarios: any[] = [];
  
  constructor() {}

  ngOnInit() {
    const users = this.formService.getAll().subscribe(
      data => {
        this.arrComentarios = data;
      },
      response => {
        console.log('Respuesta del servidor:', response);
      }
    );

  }

}
