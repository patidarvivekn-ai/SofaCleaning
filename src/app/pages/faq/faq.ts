import { Component, inject } from '@angular/core';
import { FaqList } from '../../shared/faq-list/faq-list';
import { SeoService } from '../../core/seo.service';
import { FAQS, SITE } from '../../core/site';

@Component({
  selector: 'app-faq-page',
  imports: [FaqList],
  template: `
    <section class="page-hero">
      <div class="wrap-narrow">
        <p class="eyebrow">FAQ</p>
        <h1>Sofa cleaning questions, answered plainly.</h1>
        <p>
          If something is not here — drying time for a velvet piece, a penthouse service lift, a same-day
          slot — call {{ site.phoneDisplay }} and ask. We would rather answer than make you guess.
        </p>
      </div>
    </section>
    <section class="section" style="padding-top: 0">
      <div class="wrap-narrow">
        <app-faq-list [items]="faqs" />
      </div>
    </section>
  `,
})
export class FaqPage {
  readonly site = SITE;
  readonly faqs = FAQS;

  constructor() {
    inject(SeoService).update({
      title: 'Sofa Cleaning FAQ Ahmedabad & Gandhinagar | Ahmedabad Sofa Cleaning',
      description:
        'Pricing, drying time, leather vs fabric, booking on WhatsApp, and service areas for sofa cleaning in Ahmedabad and Gandhinagar.',
      path: '/faq',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    });
  }
}
