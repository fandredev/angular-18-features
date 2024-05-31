import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { InformationsComponent } from './informations/informations.component';
import { DepositionsComponent } from './depositions/depositions.component';
import { ButtonComponent } from './button/button.component';
import { FooterLinksProps, FooterLinksService } from './footer-links.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    InformationsComponent,
    DepositionsComponent,
    ButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  footerLinks: FooterLinksProps[] = [];

  constructor(private footerLinksService: FooterLinksService) {
    this.footerLinks = this.footerLinksService.getLinks();
  }
}
