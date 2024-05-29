import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { InformationsComponent } from './informations/informations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, InformationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
