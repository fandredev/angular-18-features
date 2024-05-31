import { TestBed } from '@angular/core/testing';

import { FooterLinksService } from './footer-links.service';

describe(`${FooterLinksService.name}`, () => {
  let service: FooterLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of links', () => {
    const links = service.getLinks();
    expect(links).toEqual([
      { title: 'Duolingo', url: 'https://www.duolingo.com/' },
      { title: 'Sobre', url: 'https://www.duolingo.com/info' },
      { title: 'Carreiras', url: 'https://careers.duolingo.com/' },
      { title: 'Aplicativos', url: 'https://www.duolingo.com/mobile' },
      { title: 'Ajuda', url: 'https://duolingoschools.zendesk.com/hc/en-us' },
      { title: 'Termos de uso', url: 'https://www.duolingo.com/terms' },
      { title: 'Privacidade', url: 'https://www.duolingo.com/privacy' },
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/groups/duolingoeducators',
      },
      { title: 'Twitter', url: 'https://x.com/DuolingoSchools' },
    ]);
  });
});
