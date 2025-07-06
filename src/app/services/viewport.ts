import { inject, Injectable, computed, signal, effect } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class Viewport {
  private breakpointObserver = inject(BreakpointObserver);

  private isMobileSignal = signal(false);

  constructor() {
    effect(() => {
      this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
        this.isMobileSignal.set(result.matches);
      });
    });
  }

  isMobile = computed(() => this.isMobileSignal());
  isDesktop = computed(() => !this.isMobileSignal());
}
