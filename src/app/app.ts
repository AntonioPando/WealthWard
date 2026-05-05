import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/layout/header/header";
import { MenuLateral } from "./components/layout/menu-lateral/menu-lateral";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MenuLateral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WealthWard');
}
