import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Graphic Design',
      icon: '🎨',
      description: 'Creative and stunning graphic designs that make your brand stand out',
      color: '#01a7b4'
    },
    {
      title: 'Ads/Advertisement',
      icon: '📢',
      description: 'Strategic advertising campaigns that drive results and engagement',
      color: '#01a7b4'
    },
    {
      title: 'Model Shoot',
      icon: '📸',
      description: 'Professional model photography for your brand and products',
      color: '#01a7b4'
    },
    {
      title: 'Food Photography',
      icon: '🍔',
      description: 'Mouth-watering food photography that attracts customers',
      color: '#01a7b4'
    },
    {
      title: 'VFX',
      icon: '✨',
      description: 'Cutting-edge visual effects for stunning video content',
      color: '#01a7b4'
    },
    {
      title: 'Digital Marketing',
      icon: '📱',
      description: 'Complete digital marketing solutions for business growth',
      color: '#01a7b4'
    }
  ];
}
