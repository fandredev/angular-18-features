import { Injectable } from '@angular/core';

import { Faker, pt_BR } from '@faker-js/faker';

export interface DepositionsProps {
  name: string;
  description: string;
  image: string;
  profession: string;
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
        description:
          'A gente aprende melhor quando o aplicativo parece um jogo. O Duolingo é pura diversão, e conseguimos potencializar isso na sala de aula.',
        image: this.faker.image.urlLoremFlickr({
          width: 200,
          height: 200,
          category: 'people',
        }),
        profession: this.faker.person.jobType(),
      },
      {
        name: this.faker.person.fullName(),
        description:
          'Eu amo o Duolingo porque é um jeito fácil e prático dos meus alunos continuarem a praticar espanhol fora da sala de aula.',
        image: this.faker.image.urlLoremFlickr({
          width: 200,
          height: 200,
          category: 'person',
        }),
        profession: this.faker.person.jobType(),
      },
      {
        name: this.faker.person.fullName(),
        description:
          'Eu adoro o Duolingo porque os aspectos de jogo fazem os meus alunos esquecerem que, enquanto se divertem, também aprendem.',
        image: this.faker.image.urlLoremFlickr({
          width: 200,
          height: 200,
          category: 'person',
        }),
        profession: this.faker.person.jobType(),
      },
    ];
  }
}
