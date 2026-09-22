import { Component } from '@angular/core';
import { SITE, waChatHref } from '../../core/site';

@Component({
  selector: 'app-whatsapp-chat',
  templateUrl: './whatsapp-chat.html',
})
export class WhatsappChat {
  readonly site = SITE;
  readonly chat = waChatHref();
}
