import { Component, OnInit, Input} from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Plato } from '../../models/plato';
import { SharedDataService } from '../../services/shared-data.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrl: './pedido-detalle.component.css'
})
export class PedidoDetalleComponent implements OnInit{

  platoSeleccionado: Plato = new Plato(0,'', '', 0, 0,"");
  cantidad: number = 1;
  especificaciones: string = '';

  arrayPedidos:Pedido[]=[];

  constructor(private sharedDataService: SharedDataService, private router: Router, private pedidoService:PedidoService,private route: Router){
    this.CargarPedidos();
  }

  ngOnInit(): void { 
    this.platoSeleccionado = this.sharedDataService.getPlato();
    if (!this.platoSeleccionado) {
      this.router.navigate(['/']);  // Redirige a la página principal si no hay plato seleccionado
    }
  }

  CargarPedidos(){
    this.pedidoService.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.arrayPedidos=data;
    });
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

  CalcularCostoTotal(){
    let total=this.cantidad*this.platoSeleccionado.costo;
    return total;
  }

  CalcularCantT(){
    let cantTotal=this.platoSeleccionado.cant*this.cantidad;
    return cantTotal;
  }

  Pagar() {
    let nuevoPedido = new Pedido(this.arrayPedidos.length+1,this.platoSeleccionado.nombre
    ,this.CalcularCantT(),this.platoSeleccionado.desc,this.especificaciones,this.CalcularCostoTotal(),this.platoSeleccionado.id);
    this.GuardarPedido(nuevoPedido);
    alert("Pedido Agregado");
    this.route.navigate(['/VerMenu'], { queryParams: { reload: true } });
  }
}