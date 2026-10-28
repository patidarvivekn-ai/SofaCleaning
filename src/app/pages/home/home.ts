import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { FaqList } from '../../shared/faq-list/faq-list';
import { SeoService } from '../../core/seo.service';
import {
  AHMEDABAD_LOCALITIES,
  FAQS,
  GANDHINAGAR_LOCALITIES,
  HOME_SERVICES,
  LOCAL_BUSINESS_JSON_LD,
  PROCESS_STEPS,
  SITE,
  VENUE_SERVICES,
  WHY_POINTS,
  telHref,
  waChatHref,
} from '../../core/site';

@Component({
  selector: 'app-home',
  imports: [RouterLink, BookingForm, FaqList],
  templateUrl: './home.html',
})
export class HomePage {
  readonly site = SITE;
  readonly services = HOME_SERVICES;
  readonly venues = VENUE_SERVICES;
  readonly why = WHY_POINTS;
  readonly steps = PROCESS_STEPS;
  readonly faqs = FAQS.slice(0, 6);
  readonly ahmedabad = AHMEDABAD_LOCALITIES;
  readonly gandhinagar = GANDHINAGAR_LOCALITIES;
  readonly tel = telHref();
  readonly chat = waChatHref();

  constructor() {
    inject(SeoService).update({
      title: 'Sofa Cleaning Ahmedabad & Gandhinagar | Ahmedabad Sofa Cleaning',
      description:
        'Sofa cleaning in Ahmedabad and Gandhinagar from ₹169 per seat. Fabric, leather, carpet, and mattress cleaning. Call or WhatsApp +91 8000384002 to book.',
      path: '/',
      jsonLd: LOCAL_BUSINESS_JSON_LD,
    });
  }
}
