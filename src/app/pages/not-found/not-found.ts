import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">404</p>
        <h1>That page is not on this site.</h1>
        <p>Try the home page, services, or just call — faster than hunting a broken link.</p>
        <div class="btn-row">
          <a class="btn btn-terracotta" routerLink="/">Home</a>
          <a class="btn btn-ghost" routerLink="/contact">Contact</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundPage {
  constructor() {
    inject(SeoService).update({
      title: 'Page not found | Ahmedabad Sofa Cleaning',
      description: 'The page you asked for is not available. Book sofa cleaning in Ahmedabad or Gandhinagar from the home page.',
      path: '/404',
    });
  }
}
