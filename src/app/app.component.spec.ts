import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe(`${AppComponent.name}`, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeElement: HTMLElement;

  function createComponent() {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render components to site when component renders', () => {
    expect(nativeElement.querySelector('app-header')).toBeTruthy();
    expect(nativeElement.querySelector('app-banner')).toBeTruthy();
    expect(nativeElement.querySelector('app-informations')).toBeTruthy();
    expect(nativeElement.querySelector('app-depositions')).toBeTruthy();
  });

  it('should render section to messages to professores vídeo when component renders', () => {
    expect(nativeElement.querySelector('iframe')).toBeTruthy();
  });

  xit('should render footer to site when component renders', () => {
    expect(nativeElement.querySelector('app-footer')).toBeTruthy();
  });
});
