import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  constructor() {
    emailjs.init('OOkmUmFerAGWMfVDf');
  }
  quickLinks = ['Home', 'About Us', 'Services', 'Contact', 'Privacy'];
  services = ['Graphic Design', 'Ads/Advertisement', 'Model Shoot', 'Food Photography', 'VFX'];
  
  currentYear = new Date().getFullYear();

  form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSending = signal(false);
  sendStatus = signal('');

  sendEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.form.name || !this.form.email || !this.form.phone || !this.form.message) {
      this.sendStatus.set('Please complete all fields before sending.');
      return;
    }

    if (!emailPattern.test(this.form.email)) {
      this.sendStatus.set('Please enter a valid email address.');
      return;
    }

    this.isSending.set(true);
    this.sendStatus.set('');

    emailjs.send(
      'service_6fuhcqs',
      'template_0ppr6fp',
      {
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        message: this.form.message
      }
    ).then(() => {
      this.sendStatus.set('Email sent successfully!');
      this.form = { name: '', email: '', phone: '', message: '' };
    }).catch((error) => {
      console.error('FAILED...', error);
      this.sendStatus.set('Failed to send email. Please try again later.');
    }).finally(() => {
      this.isSending.set(false);
    });
  }
} 
