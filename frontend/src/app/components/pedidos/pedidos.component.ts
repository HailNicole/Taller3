import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';
import { Router} from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit{

  arrayDatos:any[]=[];
  obtenerDato: any;

  constructor(private pedidoService:PedidoService,private router: Router,private sharedDataService: SharedDataService){
    this.pedidoService.obtenerDatos().subscribe(data =>{
      this.arrayDatos = data;
    });
  }
  ngOnInit(): void { }

  Eliminar(id:string){
    this.pedidoService.eliminarDato(id).subscribe(res=>{
      //console.log('Pedido Eliminado Correctamente',res)
    },err=>{
      console.log('Error al eliminar el ',err)
    });
        // Navega a la misma ruta para recargar la página
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/Pedidos']);
        });
  }

  Editar(id:string){
    this.pedidoService.obtenerIdPedido(id).subscribe(res=>{
      let pedidoSeleccionado = res.pedidoId
      this.sharedDataService.setPedido(pedidoSeleccionado);
      this.router.navigate(['/EditarPedido']);
    },err=>{
      console.log('error al obtener el id del pedido')
    })
  }
}