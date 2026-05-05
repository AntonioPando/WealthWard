import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { Filtros } from './filtros/filtros';
import { Tabla } from './tabla/tabla';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [
    Sidebar,
    Header,
    Filtros,
    Tabla
  ],
  templateUrl: './movimientos.html',
  styleUrls: ['./movimientos.css'],
})
export class Movimientos {

}
