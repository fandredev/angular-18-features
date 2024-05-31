import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<app-button>COMEÇAR</app-button>`,
})
class TestHostComponent {}

describe(`${ButtonComponent.name}`, () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  function createComponent() {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [ButtonComponent],
    }).compileComponents();

    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with the text "COMEÇAR" ', () => {
    const fixtureHostComponent = TestBed.createComponent(TestHostComponent);
    const debugElement = fixtureHostComponent.debugElement.query(
      By.directive(ButtonComponent)
    );

    const element = debugElement.nativeElement;

    expect(element.textContent).toBe('COMEÇAR');
  });
});
