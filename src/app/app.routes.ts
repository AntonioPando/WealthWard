import { Routes } from '@angular/router';
import { Movimientos } from './components/pages/movimientos/movimientos';
import { Perfil } from './components/pages/perfil/perfil';
import { Dashboard } from './components/pages/dashboard/dashboard';

export const routes: Routes = [
      {
    path: 'movimientos',
    component: Movimientos
  },
  { 
    path: 'perfil',
    component: Perfil
  },
  {
    path: 'dashboard',
    component: Dashboard
  }

];
