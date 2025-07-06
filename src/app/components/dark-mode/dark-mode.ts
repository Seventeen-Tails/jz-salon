import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dark-mode',
  imports: [ButtonModule, CommonModule],
  templateUrl: './dark-mode.html',
  styleUrl: './dark-mode.css'
})
export class DarkMode implements OnInit{
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
