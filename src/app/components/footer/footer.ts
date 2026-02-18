import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  quickLinks = ['Home', 'About Us', 'Services', 'Contact', 'Privacy'];
  services = ['Graphic Design', 'Ads/Advertisement', 'Model Shoot', 'Food Photography', 'VFX'];
  
  currentYear = new Date().getFullYear();
}
