import { Injectable } from '@angular/core';

import { Faker, pt_BR } from '@faker-js/faker';

export interface DepositionsProps {
  name: string;
  text: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DepositionsService {
  constructor() {}

  private faker = new Faker({
    locale: [pt_BR],
  });

  public getDepositions(): DepositionsProps[] {
    return [
      {
        name: this.faker.person.fullName(),
        text: 'Eu amo o Duolingo!',
        image: this.faker.image.urlLoremFlickr({
          width: 200,
          height: 200,
          category: 'person',
        }),
      },
      {
        name: this.faker.person.fullName(),
        text: 'O Duolingo é incrível!',
        image: this.faker.image.urlLoremFlickr({
          width: 200,
          height: 200,
          category: 'person',
        }),
      },
      {
        name: this.faker.person.fullName(),
        text: 'Eu adoro o Duolingo!',
        image: this.faker.image.urlLoremFlickr({
          width: 200,
          height: 200,
          category: 'person',
        }),
      },
    ];
  }
}
