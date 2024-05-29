import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsComponent } from './depositions.component';

describe(`${DepositionsComponent.name}`, () => {
  let component: DepositionsComponent;
  let fixture: ComponentFixture<DepositionsComponent>;

  function createComponent() {
    fixture = TestBed.createComponent(DepositionsComponent);
    component = fixture.componentInstance;
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
});
