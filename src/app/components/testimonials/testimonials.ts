import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent {
  currentIndex = signal(0);
  
  testimonials = [
    {
      name: 'Dave Wood',
      role: 'Web Developer',
      image: '👨‍💼',
      text: 'SS Digi Promotions transformed our digital presence completely. Their creative approach and dedication to quality is unmatched. Highly recommended!'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      image: '👩‍💼',
      text: 'Working with SS Digi has been an absolute pleasure. They delivered exceptional results and exceeded all our expectations. True professionals!'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: '👨‍💻',
      text: 'The team at SS Digi is incredibly talented and responsive. They helped us achieve our digital marketing goals within budget. Outstanding service!'
    }
  ];

  next() {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
