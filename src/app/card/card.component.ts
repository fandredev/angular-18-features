import { Component, Input } from '@angular/core';
import { DepositionsProps } from '../depositions.service';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() depositions = {} as DepositionsProps;
}
