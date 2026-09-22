import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV, SITE, telHref, waChatHref } from '../../core/site';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly site = SITE;
  readonly nav = NAV;
  readonly tel = telHref();
  readonly wa = waChatHref();
  readonly menuOpen = signal(false);

  toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  close(): void {
    this.menuOpen.set(false);
  }
}
