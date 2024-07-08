import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormularioService } from '../../services/formulario.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  nombreControl = new FormControl('', Validators.required);
  apellidoControl = new FormControl('', Validators.required);
  fechaControl = new FormControl('', Validators.required);
  nombreMeseroControl = new FormControl('', Validators.required);
  calificacionControl = new FormControl('', Validators.required);
  comentarioControl = new FormControl('', Validators.required);

  constructor(private formularioService: FormularioService) {}

  ngOnInit(): void {
    this.setFechaActual();
  }

  setFechaActual(): void {
    const fechaActual = new Date().toISOString().split('T')[0]; // Obtiene la fecha en formato YYYY-MM-DD
    this.fechaControl.setValue(fechaActual);
  }

  onSubmit() {
    if (this.nombreControl.valid && this.apellidoControl.valid && this.fechaControl.valid &&
        this.calificacionControl.valid && this.comentarioControl.valid && this.nombreMeseroControl.valid) {
      const formData = {
        nombre: this.nombreControl.value,
        apellido: this.apellidoControl.value,
        fecha: this.fechaControl.value,
        nombreMesero: this.nombreMeseroControl.value,
        calificacion: this.calificacionControl.value,
        comentario: this.comentarioControl.value
      };
      this.formularioService.enviarDatos(formData)
        .subscribe((response: any) => {
          console.log('Success:', response);
          alert('Gracias por calificar al mesero');
          this.nombreControl.reset();
          this.apellidoControl.reset();
          this.fechaControl.reset();
          this.nombreMeseroControl.reset();
          this.calificacionControl.reset();
          this.comentarioControl.reset();
        }, (error: any) => {
          console.error('Error:', error);
          alert('Hubo un error al guardar los datos');
        });
    } else {
      alert('Por favor, complete todos los campos requeridos');
    }
  }
}