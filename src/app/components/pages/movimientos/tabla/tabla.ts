
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.html',
  styleUrls: ['./tabla.css'],
})
export class Tabla {

  pagina: number = 1;
  itemsPorPagina: number = 7;

  get totalPaginas(){
    return Math.ceil(this.totalItems / this.itemsPorPagina);
  }

get paginas(): number[] {
  const total = this.totalPaginas;
  return Array.from({ length: total }, (_, i) => i + 1);
}

get totalItems() {
  return this.movimientos.length;
}

  irAPagina(pagina: number){
  this.pagina = pagina;
  }

  siguiente(){
    if(this.pagina < this.totalPaginas){
      this.pagina++;
    }
  }
  
  anterior(){
    if(this.pagina > 1){
      this.pagina--;
    }
  }

  get movimientosPaginados() {
  const inicio = (this.pagina - 1) * this.itemsPorPagina;
  const fin = inicio + this.itemsPorPagina;
  return this.movimientos.slice(inicio, fin);
}

  movimientos = [
    {
      fecha: '24 Oct, 2026',
      categoria: 'Minorista',
      descripcion: 'Compra Apple Store',
      monto: -1299,
      tipo: 'gasto'
    },
    {
      fecha: '22 Oct, 2026',
      categoria: 'Salario',
      descripcion: 'Honorarios',
      monto: 8500,
      tipo: 'ingreso'
    },
    {
      fecha: '20 Oct, 2026',
      categoria: 'Entretenimiento',
      descripcion: 'Netflix',
      monto: -15,
      tipo: 'gasto'
    },
    {
      fecha: '18 Oct, 2026',
      categoria: 'Transporte',
      descripcion: 'Uber',
      monto: -25,
      tipo: 'gasto'
    },
    {
      fecha: '15 Oct, 2026',
      categoria: 'Inversiones',
      descripcion: 'Dividendos',
      monto: 200,
      tipo: 'ingreso'
    },
      {
      fecha: '10 Oct, 2026',
      categoria: 'Minorista',
      descripcion: 'Compra Amazon',
      monto: -89,
      tipo: 'gasto'
    },
    {
      fecha: '5 Oct, 2026',
      categoria: 'Salario',
      descripcion: 'Honorarios',
      monto: 8500,
      tipo: 'ingreso'
    },
    {
      fecha: '1 Oct, 2026',
      categoria: 'Entretenimiento',
      descripcion: 'Spotify',
      monto: -10,
      tipo: 'gasto'
    },
     {
      fecha: '28 Sep, 2026',
      categoria: 'Transporte',
      descripcion: 'Uber',
      monto: -25,
      tipo: 'gasto'
    },
    {
      fecha: '25 Sep, 2026',
      categoria: 'Inversiones',
      descripcion: 'Dividendos',
      monto: 200,
      tipo: 'ingreso'
    },
     {
      fecha: '20 Sep, 2026',
      categoria: 'Minorista',
      descripcion: 'Compra Zara',
      monto: -150,
      tipo: 'gasto'
    },
  ];
}
