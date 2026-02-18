import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class FeaturesComponent {
  features = [
    {
      icon: '🎨',
      title: 'Design',
      description: 'Creative and innovative designs that capture your brand essence and engage your audience effectively.'
    },
    {
      icon: '📊',
      title: 'Report',
      description: 'Comprehensive analytics and detailed reports to track your digital marketing performance and ROI.'
    },
    {
      icon: '📈',
      title: 'Analysis',
      description: 'In-depth market analysis and insights to optimize your digital marketing strategies for success.'
    },
    {
      icon: '🔄',
      title: '24/7 Response',
      description: 'Round-the-clock support and quick response to ensure your business never misses an opportunity.'
    }
  ];
}
