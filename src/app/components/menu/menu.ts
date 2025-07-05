import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  imports: [ButtonModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  private darkmodeKey = 'dark-mode';
  darkmode = signal(false);

  ngOnInit(){
    const lsDM = localStorage.getItem(this.darkmodeKey);
    this.darkmode.set(lsDM === 'true');
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle(this.darkmodeKey);
    this.darkmode.update(val => {
      const newVal = !val;
      localStorage.setItem(this.darkmodeKey, String(this.darkmode));
      return newVal;
    });
  }

  darkicon(): string {
    return this.darkmode() ? 'pi-sun' : 'pi-moon';
  }
}
