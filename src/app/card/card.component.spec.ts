import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Faker, pt_BR } from '@faker-js/faker';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let nativeElement: HTMLElement;
  const faker = new Faker({
    locale: [pt_BR],
  });

  function createComponent() {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a depositions object when components loads', () => {
    component.depositions = {
      name: faker.person.fullName(),
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({ category: 'person' }),
      profession: faker.person.jobType(),
    };

    fixture.detectChanges();

    const cardElement = nativeElement.querySelector('.profile-card');

    const findImageCard = cardElement?.querySelector(
      '.image img'
    ) as HTMLImageElement;
    const findSrcAttribute = findImageCard.src;

    const findDescriptionCard = cardElement?.querySelector('.description span');
    const findNameCard = cardElement?.querySelectorAll(
      '.informations-people span'
    ) as NodeListOf<HTMLSpanElement>;

    expect(findSrcAttribute).toBe(component.depositions.image);
    expect(findDescriptionCard?.textContent).toBe(
      component.depositions.description
    );

    expect(findNameCard[0].textContent?.trim()).toBe(
      component.depositions.name
    );
    expect(findNameCard[1].textContent?.trim()).toBe(
      component.depositions.profession
    );
  });
});
