import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeaturesComponent } from './components/features/features';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { BookingComponent } from './components/booking/booking';
import { FooterComponent } from './components/footer/footer';
import { LoaderComponent } from './components/loader/loader';
import { SidebarComponent } from './components/sidebar/sidebar';
import { ScrollButtonsComponent } from './components/scroll-buttons/scroll-buttons';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    BookingComponent,
    FooterComponent,
    LoaderComponent,
    SidebarComponent,
    ScrollButtonsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit() {
    this.setupScrollAnimations();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.animateOnScroll();
  }

  setupScrollAnimations() {
    setTimeout(() => this.animateOnScroll(), 100);
  }

  animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }
}
