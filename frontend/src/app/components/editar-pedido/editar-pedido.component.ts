import { Component, OnInit, Input} from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Plato } from '../../models/plato';
import { SharedDataService } from '../../services/shared-data.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { PlatoService } from '../../services/plato.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.css'
})
export class EditarPedidoComponent implements OnInit{
  
  platoSeleccionado: Plato = new Plato('', '', 0, 0,'');
  pedidoSeleccionado: Pedido = new Pedido('',0,'','',0,'');
  pedido_id:string='';
  cantidad: number = 1;
  especificaciones: string = '';

  constructor(private sharedDataService: SharedDataService, private router: Router
    , private pedidoService:PedidoService,private route: Router, private platoService:PlatoService){ }

  ngOnInit(): void { 
    this.pedido_id = this.sharedDataService.getPedido();
    if(!this.pedidoSeleccionado || this.pedido_id==null || this.pedido_id=='0'){
      this.router.navigate(['/Pedidos']);
    }else{
      this.pedidoService.obtenerDatoPorId(this.pedido_id).subscribe(res=>{
        this.pedidoSeleccionado.nombre_plato=res.pedido_c.nombre_plato
        this.pedidoSeleccionado.cantidad=res.pedido_c.cantidad
        this.pedidoSeleccionado.descripcion=res.pedido_c.descripcion
        this.pedidoSeleccionado.esp=res.pedido_c.esp
        this.pedidoSeleccionado.costoTotal=res.pedido_c.costoTotal
        this.pedidoSeleccionado.id_plato=res.pedido_c.id_plato
        this.especificaciones = this.pedidoSeleccionado.esp;
        this.ObtenerPlato();
      },err=>{
        console.log('Error al obtener el pedido')
      })
    }
  }

  CalcularCostoTotal(){
    let total=this.cantidad*this.platoSeleccionado.costo;
    return total;
  }

  CalcularCantT(){
    let cantTotal=this.platoSeleccionado.cant*this.cantidad;
    return cantTotal;
  }

  ObtenerPlato(){
    this.platoService.obtener_plato_por_id(this.pedidoSeleccionado.id_plato).subscribe(
      res =>{
        this.platoSeleccionado.nombre = res.plate.nombre
        this.platoSeleccionado.desc = res.plate.desc
        this.platoSeleccionado.costo = res.plate.costo
        this.platoSeleccionado.cant = res.plate.cant
        this.platoSeleccionado.img = res.plate.img
    },err=>{
      console.log('Error al obtener el plato')
    })
  }

  Actualizar() {
    this.EditarPedido();
    this.route.navigate(['/Pedidos'], { queryParams: { reload: true } });
  }

  EditarPedido(){
    let nuevoPedido = new Pedido(this.pedidoSeleccionado.nombre_plato,this.CalcularCantT(),
    this.pedidoSeleccionado.descripcion,this.especificaciones,this.CalcularCostoTotal(),
    this.pedidoSeleccionado.id_plato);
    this.pedidoService.editarDato(nuevoPedido,this.pedido_id).subscribe(
      response => {
        console.log('Pedido editado correctamente:', response);
        alert("Pedido Actualizado");
      },
      error => {
        console.error('Error al editado el Pedido:', error);
      });
  }
}