import { Component, effect, inject, input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SERVICES, bookingMessage, waHref } from '../../core/site';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule],
  templateUrl: './booking-form.html',
})
export class BookingForm {
  private readonly platformId = inject(PLATFORM_ID);
  readonly services = SERVICES;
  readonly preset = input<string | undefined>();
  name = '';
  phone = '';
  locality = '';
  service = SERVICES[0].name;
  error = '';

  constructor() {
    effect(() => {
      const preset = this.preset();
      if (preset) {
        this.service = preset;
      }
    });
  }

  submit(): void {
    this.error = '';
    const name = this.name.trim();
    const phone = this.phone.trim();
    const locality = this.locality.trim();
    if (!name || !phone || !locality) {
      this.error = 'Please add your name, phone, and locality.';
      return;
    }
    if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
      this.error = 'Enter a valid phone number.';
      return;
    }
    const url = waHref(bookingMessage({ name, phone, locality, service: this.service }));
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = url;
    }
  }
}
