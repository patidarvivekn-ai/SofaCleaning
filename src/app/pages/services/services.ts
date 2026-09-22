import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { HOME_SERVICES, VENUE_SERVICES } from '../../core/site';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
})
export class ServicesPage {
  readonly home = HOME_SERVICES;
  readonly venues = VENUE_SERVICES;

  constructor() {
    inject(SeoService).update({
      title: 'Sofa, Chair & Venue Seating Cleaning | Ahmedabad Sofa Cleaning',
      description:
        'Sofa, chair, carpet, mattress, party-plot, restaurant, office, auditorium, cinema, and bus seat cleaning in Ahmedabad and Gandhinagar.',
      path: '/services',
    });
  }
}
