import { Component, input } from '@angular/core';
import { FAQS, type FaqItem } from '../../core/site';

@Component({
  selector: 'app-faq-list',
  template: `
    <div class="faq">
      @for (item of items(); track item.q) {
        <details>
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      }
    </div>
  `,
})
export class FaqList {
  readonly items = input<FaqItem[]>(FAQS);
}
