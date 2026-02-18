import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats = [
    { value: '30k+', label: 'Happy Customers', icon: '😊' },
    { value: '800+', label: 'On Going Projects', icon: '✅' },
    { value: '5+', label: 'Years Experience', icon: '⭐' }
  ];
  benefits = [
  {
    title: 'Full Coverage',
    subtitle: 'Every channel, one team',
    color: '#4c6bff',
    detail: 'One crew owns every channel, so messaging and pacing stay aligned without handoffs.'
  },
  {
    title: 'Unified Strategy',
    subtitle: 'No more disconnected efforts.',
    color: '#8a2be2',
    detail: 'Roadmaps, creative, and media plans are built together—no siloed teams or clashing tactics.'
  },
  {
    title: 'Clarity & Control',
    subtitle: 'You always know what’s happening — and why.',
    color: '#e63946',
    detail: 'Crystal-clear billing, weekly updates, and structured task tracking give full visibility into priorities and performance.'
  },
  {
    title: 'Time Efficiency',
    subtitle: 'You get a team — without managing one.',
    color: '#f59e0b',
    detail: 'We handle resourcing, QA, and delivery so you skip hiring, onboarding, and people management.'
  }
];

}
