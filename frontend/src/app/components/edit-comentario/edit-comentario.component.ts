import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-edit-comentario',
  templateUrl: './edit-comentario.component.html',
  styleUrl: './edit-comentario.component.css'
})
export class EditComentarioComponent {

  comentarioForm: FormGroup;
  formSubmitted: boolean = false;
  activateRoute = inject(ActivatedRoute);
  formService = inject(FormularioService);
  comentarioId = signal('');

  constructor(private router: Router){
    this.comentarioForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      nombreMesero: new FormControl('', Validators.required),
      calificacion: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required)
    })
  }

  async onSubmit() {
    if (this.comentarioForm.invalid) {
      this.formSubmitted = true;
      return;
    } else {
      const response = await this.formService.update(this.comentarioId(), this.comentarioForm.value);
      console.log(response);
      alert('El comentario ha sido modificado satisfactoriamente');
      this.router.navigate(['/Comentarios']);
    }
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params =>{
      const comentarioId = params['comentarioId'];
      this.comentarioId.set(comentarioId);
      const comentario = await this.formService.getById(comentarioId);
      console.log(comentario);

      //Rellenar el formulario
      delete comentario._id;
      delete comentario.__v;
      delete comentario.createdAt;
      delete comentario.updatedAt;
      this.comentarioForm.setValue(comentario);
    })
  }

}
