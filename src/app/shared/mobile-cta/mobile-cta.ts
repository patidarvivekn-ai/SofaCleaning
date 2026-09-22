import { Component } from '@angular/core';
import { SITE, telHref, waChatHref } from '../../core/site';

@Component({
  selector: 'app-mobile-cta',
  template: `
    <div class="mobile-cta" role="navigation" aria-label="Quick contact">
      <a class="btn btn-terracotta" [href]="tel">Call {{ site.phoneDisplay }}</a>
      <a class="btn btn-whatsapp" [href]="wa" target="_blank" rel="noopener">Chat on WhatsApp</a>
    </div>
  `,
})
export class MobileCta {
  readonly site = SITE;
  readonly tel = telHref();
  readonly wa = waChatHref();
}
