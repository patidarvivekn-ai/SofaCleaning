import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICES } from './core/site';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SERVICES.map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: 'service-areas/:city',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{ city: 'ahmedabad' }, { city: 'gandhinagar' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
