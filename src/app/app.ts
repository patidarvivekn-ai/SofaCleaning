import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { MobileCta } from './shared/mobile-cta/mobile-cta';
import { WhatsappChat } from './shared/whatsapp-chat/whatsapp-chat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MobileCta, WhatsappChat],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
