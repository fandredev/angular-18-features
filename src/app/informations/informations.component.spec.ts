import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsComponent } from './informations.component';

describe('InformationsComponent', () => {
  let component: InformationsComponent;
  let fixture: ComponentFixture<InformationsComponent>;

  function createComponent() {
    fixture = TestBed.createComponent(InformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationsComponent],
    }).compileComponents();

    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
