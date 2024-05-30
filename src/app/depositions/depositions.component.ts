import { Component } from '@angular/core';
import { DepositionsService, DepositionsProps } from '../depositions.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-depositions',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './depositions.component.html',
  styleUrl: './depositions.component.scss',
})
export class DepositionsComponent {
  depositions: DepositionsProps[];

  constructor(private depositionsService: DepositionsService) {
    this.depositions = this.depositionsService.getDepositions();
  }
}
