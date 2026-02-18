import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class BookingComponent {
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
    this.isSubmitting.set(true);
    
    const mailtoLink = `mailto:ssdigipromotions@gmail.com?subject=New Booking Request from ${this.formData.firstName}&body=Name: ${this.formData.firstName} ${this.formData.lastName}%0D%0AEmail: ${this.formData.email}%0D%0APhone: ${this.formData.phone}%0D%0ATasks: ${this.formData.tasks}`;
    
    window.location.href = mailtoLink;
    
    this.submitMessage.set('Opening your email client...');
    
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitMessage.set('');
      this.formData = { firstName: '', lastName: '', email: '', phone: '', tasks: '' };
    }, 2000);
  }
}
