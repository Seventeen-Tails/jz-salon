import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { Viewport } from '../../services/viewport';

@Component({
  selector: 'app-menu',
  imports: [ButtonModule, CommonModule, MenuModule, BadgeModule, RippleModule, AvatarModule, RouterOutlet],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  items: MenuItem[] | undefined;
  viewport = inject(Viewport);

  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      { separator: this.viewport.isDesktop() },
      {
        label: 'Cliente',
        items: [
          {
            label: 'Novo',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['/cliente/form'])
            }
          },
          {
            label: 'Buscar',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['/cliente/list'])
            }
          }
        ]
      },
      {
        label: 'Serviços',
        items: [
          {
            label: 'Novo',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['/servico/form'])
            }
          },
          {
            label: 'Buscar',
            icon: 'pi pi-search',
            command: () => {
              this.router.navigate(['/servico/list'])
            }
          }
        ]
      },
      { separator: true }
    ];
  }
}
