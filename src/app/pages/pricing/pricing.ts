import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { SeoService } from '../../core/seo.service';
import { SITE, telHref, waChatHref } from '../../core/site';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink, BookingForm],
  templateUrl: './pricing.html',
})
export class PricingPage {
  readonly site = SITE;
  readonly tel = telHref();
  readonly wa = waChatHref();

  constructor() {
    inject(SeoService).update({
      title: 'Sofa Cleaning Price Ahmedabad — ₹170/seat | Ahmedabad Sofa Cleaning',
      description:
        'Sofa cleaning in Ahmedabad and Gandhinagar from ₹170 per seat and ₹50 per cushion. Other services quoted on call. No hidden visit fees.',
      path: '/pricing',
    });
  }
}
