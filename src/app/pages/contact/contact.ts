import { Component, inject } from '@angular/core';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { SeoService } from '../../core/seo.service';
import { LOCAL_BUSINESS_JSON_LD, SITE, mailtoHref, telHref, waChatHref } from '../../core/site';

@Component({
  selector: 'app-contact',
  imports: [BookingForm],
  templateUrl: './contact.html',
})
export class ContactPage {
  readonly site = SITE;
  readonly tel = telHref();
  readonly wa = waChatHref();
  readonly mail = mailtoHref();

  constructor() {
    inject(SeoService).update({
      title: 'Contact & Book Sofa Cleaning | Ahmedabad Sofa Cleaning',
      description:
        'Book sofa cleaning in Ahmedabad or Gandhinagar. Call or WhatsApp +91 8000384002. Open 8 AM to 10 PM, every day.',
      path: '/contact',
      jsonLd: LOCAL_BUSINESS_JSON_LD,
    });
  }
}
