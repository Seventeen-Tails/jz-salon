import { Component } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Teste } from './components/teste/teste';

@Component({
  selector: 'app-root',
  imports: [Menu,Teste],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
