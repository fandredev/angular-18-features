import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe(`${BannerComponent.name}`, () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let nativeElement: HTMLElement;

  function createComponent() {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
    }).compileComponents();
    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title with the content "grátis para a sua turma!" ', () => {
    const searchByTitle = nativeElement.querySelector('h1');

    expect(searchByTitle).toBeTruthy();
    expect(searchByTitle?.textContent).toBe('grátis para a sua turma!');
  });

  it('should have a subtitle text above the title with the content "Um jeito fácil de tornar o aprendizado de idiomas divertido e personalizado."', () => {
    const searchBySubtitle = nativeElement.querySelector(
      '.main-content-left span'
    ) as HTMLSpanElement;

    expect(searchBySubtitle).toBeTruthy();
    expect(searchBySubtitle?.textContent?.trim()).toBe(
      'Um jeito fácil de tornar o aprendizado de idiomas divertido e personalizado.'
    );
  });

  it('should have a button with the text "COMEÇAR" ', () => {
    const searchByButton = nativeElement.querySelector(
      '.main-content-left button'
    );

    const textContent = searchByButton?.textContent?.trim();

    expect(searchByButton).toBeTruthy();
    expect(textContent).toBe('COMEÇAR');
  });

  it('should have a image in banner with the alt text "Personagens do Duolingo numa sala de aula" ', () => {
    const searchByImage = nativeElement.querySelector(
      '.main-content-right img'
    ) as HTMLImageElement;

    const altAttribute = searchByImage?.getAttribute('alt');

    expect(searchByImage).toBeTruthy();
    expect(altAttribute).toBe('Personagens do Duolingo numa sala de aula');
  });

  it('should render correct app-button when page loads', () => {
    const searchByButton = nativeElement.querySelector('app-button');
    expect(searchByButton).toBeTruthy();
  });
});
