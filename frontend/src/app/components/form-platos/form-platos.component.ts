import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Plato } from '../../models/plato';
import { PlatoService } from '../../services/plato.service';
import { SharedDataService } from '../../services/shared-data.service';
import { error } from 'node:console';

@Component({
  selector: 'app-form-platos',
  templateUrl: './form-platos.component.html',
  styleUrl: './form-platos.component.css'
})
export class FormPlatosComponent implements OnInit{

  constructor(private router: Router, private sharedDataService: SharedDataService, private platoService:PlatoService){ }
  ngOnInit(): void { 
    this.platoService.obtenerPlatos().subscribe(data =>{
      this.platos = data;
    });
  }

  nombre:string="";
  descripcion:string='';
  costo:number=0.0;
  cant:number=0;
  img:string="";
  platos:any[]=[];

  Pedir(id:String) {
    this.platoService.obtener_id_plato(id).subscribe(res=>{
      let platoSeleccionado = res.platoId;
      this.sharedDataService.setPlato(platoSeleccionado);
      this.router.navigate(['/Pedir']);
    },error =>{
      console.log("Error al obtener el plato")
    })
  }
}