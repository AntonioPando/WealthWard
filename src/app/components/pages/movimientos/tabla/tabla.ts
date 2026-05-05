import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.html',
  styleUrls: ['./tabla.css'],
})
export class Tabla {
    movimientos = [
    {
      fecha: '24 Oct',
      categoria: 'Minorista',
      descripcion: 'Compra Apple Store',
      monto: -1299,
      tipo: 'gasto'
    },
    {
      fecha: '22 Oct',
      categoria: 'Salario',
      descripcion: 'Honorarios',
      monto: 8500,
      tipo: 'ingreso'
    }
  ];
}
