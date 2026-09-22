import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { AHMEDABAD_LOCALITIES, GANDHINAGAR_LOCALITIES, SITE } from '../../core/site';

@Component({
  selector: 'app-areas',
  imports: [RouterLink],
  templateUrl: './areas.html',
})
export class AreasPage {
  readonly site = SITE;
  readonly ahmedabad = AHMEDABAD_LOCALITIES;
  readonly gandhinagar = GANDHINAGAR_LOCALITIES;

  constructor() {
    inject(SeoService).update({
      title: 'Sofa Cleaning Areas — Ahmedabad & Gandhinagar | Ahmedabad Sofa Cleaning',
      description:
        'Sofa cleaning across Ahmedabad and Gandhinagar: Bopal, Satellite, Chandkheda, Kudasan, GIFT City, Maninagar, and all city localities.',
      path: '/service-areas',
    });
  }
}
