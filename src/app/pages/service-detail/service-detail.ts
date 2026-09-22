import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BookingForm } from '../../shared/booking-form/booking-form';
import { SeoService } from '../../core/seo.service';
import { SITE, findService, telHref, waHref } from '../../core/site';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, BookingForm],
  templateUrl: './service-detail.html',
})
export class ServiceDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  readonly site = SITE;
  readonly tel = telHref();
  readonly wa = waHref();
  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('slug') ?? '',
  });
  readonly service = computed(() => findService(this.slug()));

  constructor() {
    effect(() => {
      const current = this.service();
      if (!current) {
        return;
      }
      this.seo.update({
        title: current.seoTitle,
        description: current.seoDescription,
        path: `/services/${current.slug}`,
        image: current.image,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: current.name,
          provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneTel },
          areaServed: ['Ahmedabad', 'Gandhinagar'],
          description: current.seoDescription,
        },
      });
    });
  }
}
