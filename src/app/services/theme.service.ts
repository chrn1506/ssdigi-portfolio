import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = signal(false);

  constructor() {
    document.body.classList.add('light-mode');
  }

  toggleTheme() {
    this.isDark.update(v => !v);
    document.body.classList.toggle('light-mode');
  }
}
