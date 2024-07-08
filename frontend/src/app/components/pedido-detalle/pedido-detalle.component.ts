import { Component, OnInit, Input} from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Plato } from '../../models/plato';
import { SharedDataService } from '../../services/shared-data.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { PlatoService } from '../../services/plato.service';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrl: './pedido-detalle.component.css'
})
export class PedidoDetalleComponent implements OnInit{

  plato_id: string= ''
  platoSeleccionado:Plato = new Plato('', '', 0, 0,"");
  cantidad: number = 1;
  especificaciones: string = '';

  arrayPedidos:Pedido[]=[];

  constructor(private sharedDataService: SharedDataService, private pedidoService:PedidoService,
    private route: Router, private platoService:PlatoService){
    this.CargarPedidos();
  }

  ngOnInit(): void { 
    this.plato_id = this.sharedDataService.getPlato();
    if (!this.plato_id || this.plato_id==null || this.plato_id=='0') {
      this.route.navigate(['/']);  // Redirige a la página principal si no hay plato seleccionado
    }else{
      this.platoService.obtener_plato_por_id(this.plato_id).subscribe(res =>{
        this.platoSeleccionado.nombre = res.plate.nombre
        this.platoSeleccionado.desc = res.plate.desc
        this.platoSeleccionado.costo = res.plate.costo
        this.platoSeleccionado.cant = res.plate.cant
        this.platoSeleccionado.img = res.plate.img
      },err=>{
        console.log('Error al obtener el plato')
      })
    }
  }

  CargarPedidos(){
    this.pedidoService.obtenerDatos().subscribe(data =>{
      this.arrayPedidos=data;
    });
  }

  CalcularCostoTotal(){
    let total=this.cantidad*this.platoSeleccionado.costo;
    return total;
  }

  CalcularCantT(){
    let cantTotal=this.platoSeleccionado.cant*this.cantidad;
    return cantTotal;
  }

  GuardarPedido(nuevoPedido:Pedido){
    this.pedidoService.agregarDato(nuevoPedido).subscribe(
      response => {
        console.log('Pedido agregado correctamente:', response);
      },
      error => {
        console.error('Error al agregar Pedido:', error);
      });
  }

  Pagar() {
    let nuevoPedido = new Pedido(this.platoSeleccionado.nombre,this.CalcularCantT(),
    this.platoSeleccionado.desc,this.especificaciones,this.CalcularCostoTotal(),this.plato_id);
    this.GuardarPedido(nuevoPedido);
    alert("Pedido Agregado");
    this.route.navigate(['/VerMenu'], { queryParams: { reload: true } });
  }
}