import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsComponent } from './informations.component';

describe('InformationsComponent', () => {
  let component: InformationsComponent;
  let fixture: ComponentFixture<InformationsComponent>;
  let nativeElement: HTMLElement;

  function createComponent() {
    fixture = TestBed.createComponent(InformationsComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

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

  it('should have a three sections to informations', () => {
    const expectedSectionsQuantity = 3;
    const sections = nativeElement.querySelectorAll(
      'section'
    ) as NodeListOf<HTMLElement>;

    expect(sections.length).toBe(expectedSectionsQuantity);
  });

  describe('tests from section about curriculum', () => {
    const containerClass = '.container-informations-from-right-side';

    it('should have a title with contain text "currículo alinhado a padrões de aprendizagem"', () => {
      const title = nativeElement.querySelector(
        `${containerClass} h3`
      ) as HTMLElement;

      expect(title.textContent).toBe(
        'currículo alinhado a padrões de aprendizagem'
      );
    });

    it('should have a subtitle with contain text "O Duolingo for Schools utiliza..."', () => {
      const subtitle = nativeElement.querySelector(
        `${containerClass} span`
      ) as HTMLElement;

      expect(subtitle.textContent).toBe(
        'O Duolingo for Schools utiliza o mesmo currículo do Duolingo e você ainda pode filtrar pelos padrões CEFR e ACTFL. Assim você encontra o conteúdo de que precisa para ensinar.'
      );
    });

    it('should have a image with the alt text "currículo alinhado a padrões de aprendizagem no Duolingo Schools" ', () => {
      const image = nativeElement.querySelector(
        `${containerClass} img`
      ) as HTMLElement;

      const altAttribute = image?.getAttribute('alt');

      expect(image).toBeTruthy();
      expect(altAttribute).toBe(
        'currículo alinhado a padrões de aprendizagem no Duolingo Schools'
      );
    });
  });

  describe('tests from section about fun and personalized tasks', () => {
    const containerClass = '.personalized-tasks';

    it('should have a title with contain text "tarefas divertidas e personalizadas"', () => {
      const title = nativeElement.querySelector(
        `${containerClass} h3`
      ) as HTMLElement;

      expect(title.textContent).toBe('tarefas divertidas e personalizadas');
    });

    it('should have a subtitle with contain text "As tarefas combinam o melhor da inteligência artificial..."', () => {
      const subtitle = nativeElement.querySelector(
        `${containerClass} span`
      ) as HTMLElement;

      expect(subtitle.textContent).toBe(
        'As tarefas combinam o melhor da inteligência artificial e da ciência da aprendizagem para encontrar o nível e o ritmo certos para cada aluno. E eles adoram os desafios e os recursos que lembram jogos!'
      );
    });

    it('should have a image with the alt text "Tarefas divertidas e personalizadas no Duolingo Schools" ', () => {
      const image = nativeElement.querySelector(
        `${containerClass} img`
      ) as HTMLElement;

      const altAttribute = image?.getAttribute('alt');

      expect(image).toBeTruthy();
      expect(altAttribute).toBe(
        'Tarefas divertidas e personalizadas no Duolingo Schools'
      );
    });
  });

  describe('tests from section about informations and progress from students', () => {
    const containerClass = '.informations-about-progress-students';

    it('should have a title with contain text "informações sobre o progresso dos alunos"', () => {
      const title = nativeElement.querySelector(
        `${containerClass} h3`
      ) as HTMLElement;

      expect(title.textContent).toBe(
        'informações sobre o progresso dos alunos'
      );
    });

    it('should have a subtitle with contain text "Veja o desempenho dos seus alunos com informações como nível de acertos e tempo dedicado aos estudos."', () => {
      const subtitle = nativeElement.querySelector(
        `${containerClass} span`
      ) as HTMLSpanElement;

      expect(subtitle.textContent).toBe(
        'Veja o desempenho dos seus alunos com informações como nível de acertos e tempo dedicado aos estudos.'
      );
    });

    it('should have a image with the alt text "informações sobre o progresso dos alunos" ', () => {
      const image = nativeElement.querySelector(
        `${containerClass} img`
      ) as HTMLImageElement;

      const altAttribute = image?.getAttribute('alt');

      expect(image).toBeTruthy();
      expect(altAttribute).toBe('informações sobre o progresso dos alunos');
    });
  });
});
