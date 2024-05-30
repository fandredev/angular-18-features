import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsComponent } from './depositions.component';

describe(`${DepositionsComponent.name}`, () => {
  let component: DepositionsComponent;
  let fixture: ComponentFixture<DepositionsComponent>;
  let nativeElement: HTMLElement;

  function createComponent() {
    fixture = TestBed.createComponent(DepositionsComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositionsComponent],
    }).compileComponents();

    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a three cards for depositions when components loads', () => {
    expect(component.depositions.length).toBe(3);
  });

  it('should have render a card component when components loads"', () => {
    expect(nativeElement.querySelector('app-card')).toBeTruthy();
  });
});
