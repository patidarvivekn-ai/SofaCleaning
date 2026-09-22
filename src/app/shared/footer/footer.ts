import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV, SITE, mailtoHref, telHref, waChatHref } from '../../core/site';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  readonly site = SITE;
  readonly nav = NAV;
  readonly tel = telHref();
  readonly wa = waChatHref();
  readonly mail = mailtoHref();
  readonly year = new Date().getFullYear();
}
