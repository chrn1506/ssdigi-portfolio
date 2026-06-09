import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class FaqComponent {
  activeIndex = signal(0);

  faqs: FaqItem[] = [
    {
      question: 'What industries does SS Digi Promotions serve?',
      answer: 'We partner with growing businesses across healthcare, education, retail, hospitality, and professional services to build tailored digital marketing solutions that drive leads and growth.'
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Most clients begin seeing measurable engagement improvements within 4–6 weeks, while strong lead generation and ROI typically build over 2–3 months with consistent campaigns.'
    },
    {
      question: 'Can I switch plans if my needs change?',
      answer: 'Absolutely. Our packages are designed to be flexible so you can scale up or adjust services as your business goals evolve.'
    },
    {
      question: 'What makes SS Digi Promotions different from other agencies?',
      answer: 'We focus on full-funnel performance, transparent reporting, and building practical marketing systems that fit your budget, not generic agency templates.'
    }
  ];

  toggle(index: number) {
    this.activeIndex.set(this.activeIndex() === index ? -1 : index);
  }

  isActive(index: number) {
    return this.activeIndex() === index;
  }
}
