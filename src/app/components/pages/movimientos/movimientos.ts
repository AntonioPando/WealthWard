import { Component } from '@angular/core';
import { Filtros } from './filtros/filtros';
import { Tabla } from './tabla/tabla';
import { HeaderMovimientos } from './header-movimientos/header-movimientos';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [
    HeaderMovimientos,
    Filtros,
    Tabla
  ],
  templateUrl: './movimientos.html',
  styleUrls: ['./movimientos.css'],
})
export class Movimientos {

}
