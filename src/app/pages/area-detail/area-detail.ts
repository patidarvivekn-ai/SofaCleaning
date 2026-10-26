import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { SeoService } from '../../core/seo.service';
import {
  AHMEDABAD_LOCALITIES,
  GANDHINAGAR_LOCALITIES,
  SITE,
  telHref,
  waHref,
} from '../../core/site';

@Component({
  selector: 'app-area-detail',
  imports: [RouterLink, BookingForm],
  templateUrl: './area-detail.html',
})
export class AreaDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  readonly site = SITE;
  readonly tel = telHref();
  readonly wa = waHref();
  private readonly cityParam = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('city') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('city') ?? '' },
  );
  readonly city = computed(() => {
    const slug = this.cityParam();
    if (slug === 'gandhinagar') {
      return {
        slug,
        name: 'Gandhinagar',
        places: GANDHINAGAR_LOCALITIES as readonly string[],
        intro:
          'From the sectors and Infocity to Kudasan, Sargasan, Adalaj, and GIFT City — sofa and upholstery cleaning at your home in Gandhinagar.',
      };
    }
    if (slug === 'ahmedabad') {
      return {
        slug: 'ahmedabad',
        name: 'Ahmedabad',
        places: AHMEDABAD_LOCALITIES as readonly string[],
        intro:
          'Western Ahmedabad, the SG Highway belt, the east, and the older city — sofa cleaning booked on a call, done at your doorstep.',
      };
    }
    return null;
  });

  constructor() {
    effect(() => {
      const city = this.city();
      if (!city) {
        return;
      }
      this.seo.update({
        title: `Sofa Cleaning ${city.name} | Ahmedabad Sofa Cleaning`,
        description: `Professional sofa cleaning in ${city.name}. Fabric sofas from ₹199 per seat. Carpets, mattresses, and leather quoted on call. WhatsApp +91 8000384002.`,
        path: `/service-areas/${city.slug}`,
      });
    });
  }
}
