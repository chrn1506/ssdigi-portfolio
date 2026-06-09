import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class BookingComponent {
  constructor() {
    emailjs.init('OOkmUmFerAGWMfVDf');
  }

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tasks: ''
  };

  isSubmitting = signal(false);
  submitMessage = signal('');

  onSubmit() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;
    const firstName = this.formData.firstName.trim();
    const lastName = this.formData.lastName.trim();
    const email = this.formData.email.trim();
    const phone = this.formData.phone.trim();
    const message = this.formData.tasks.trim();

    if (!firstName || !email || !phone || !message) {
      this.submitMessage.set('Please fill all required fields.');
      return;
    }

    if (!emailPattern.test(email)) {
      this.submitMessage.set('Please enter a valid email address.');
      return;
    }

    if (!phonePattern.test(phone)) {
      this.submitMessage.set('Please enter a valid phone number.');
      return;
    }

    this.isSubmitting.set(true);
    this.submitMessage.set('');

    emailjs.send(
      'service_6fuhcqs',
      'template_0ppr6fp',
      {
        name: lastName ? `${firstName} ${lastName}` : firstName,
        email,
        phone,
        message
      }
    ).then(() => {
      this.submitMessage.set('Booking request sent successfully!');
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        tasks: ''
      };
    }).catch((error) => {
      console.error('FAILED...', error);
      this.submitMessage.set('Failed to send booking request.');
    }).finally(() => {
      this.isSubmitting.set(false);
    });
  }
}
