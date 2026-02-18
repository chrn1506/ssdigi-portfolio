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
      color: '#6366f1'
    },
    {
      title: 'Ads/Advertisement',
      icon: '📢',
      description: 'Strategic advertising campaigns that drive results and engagement',
      color: '#ec4899'
    },
    {
      title: 'Model Shoot',
      icon: '📸',
      description: 'Professional model photography for your brand and products',
      color: '#8b5cf6'
    },
    {
      title: 'Food Photography',
      icon: '🍔',
      description: 'Mouth-watering food photography that attracts customers',
      color: '#f59e0b'
    },
    {
      title: 'VFX',
      icon: '✨',
      description: 'Cutting-edge visual effects for stunning video content',
      color: '#10b981'
    },
    {
      title: 'Digital Marketing',
      icon: '📱',
      description: 'Complete digital marketing solutions for business growth',
      color: '#3b82f6'
    }
  ];
}
