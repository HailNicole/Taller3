import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { HttpClientModule,withFetch,provideHttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormPlatosComponent } from './components/form-platos/form-platos.component';
import { PedidoDetalleComponent } from './components/pedido-detalle/pedido-detalle.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EditarPedidoComponent } from './components/editar-pedido/editar-pedido.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { EditComentarioComponent } from './components/edit-comentario/edit-comentario.component';


const rutas: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'VerMenu', component: FormPlatosComponent },
  { path: 'Pedidos', component: PedidosComponent },
  { path: 'Pedir', component: PedidoDetalleComponent },
  { path: 'EditarPedido', component: EditarPedidoComponent },
  { path: 'Comentarios', component: ComentariosComponent},
  { path: 'editComentario/:comentarioId', component: EditComentarioComponent },
  { path: 'Calificar', component: FormularioComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    MenuComponent,
    FormPlatosComponent,
    PedidoDetalleComponent,
    HomeComponent,
    FormularioComponent,
    EditarPedidoComponent,
    ComentariosComponent,
    EditComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
