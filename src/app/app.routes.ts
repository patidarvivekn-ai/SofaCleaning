import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ServicesPage } from './pages/services/services';
import { ServiceDetailPage } from './pages/service-detail/service-detail';
import { PricingPage } from './pages/pricing/pricing';
import { AreasPage } from './pages/areas/areas';
import { AreaDetailPage } from './pages/area-detail/area-detail';
import { FaqPage } from './pages/faq/faq';
import { ContactPage } from './pages/contact/contact';
import { NotFoundPage } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'services', component: ServicesPage },
  { path: 'services/:slug', component: ServiceDetailPage },
  { path: 'pricing', component: PricingPage },
  { path: 'service-areas', component: AreasPage },
  { path: 'service-areas/:city', component: AreaDetailPage },
  { path: 'faq', component: FaqPage },
  { path: 'contact', component: ContactPage },
  { path: '**', component: NotFoundPage },
];
