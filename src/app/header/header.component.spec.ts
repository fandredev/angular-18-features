import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let nativeElement: HTMLElement;

  function createComponent() {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the two span in header', () => {
    const expectedSpansQuantity = 2;
    const spans = nativeElement.querySelectorAll(
      'header span'
    ) as NodeListOf<HTMLSpanElement>;

    expect(spans.length).toBe(expectedSpansQuantity);
    expect(spans[0].textContent).toBe('FORMAÇÃO DE PROFESSORES');
    expect(spans[1].textContent).toBe('DUOLINGO');
  });

  it('should testing the alt property the logo image when pages renders', () => {
    const img = nativeElement.querySelector('header img') as HTMLImageElement;

    expect(img.getAttribute('alt')).toBe('Logotipo duolingo');
  });
});
