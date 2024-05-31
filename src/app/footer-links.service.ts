import { Injectable } from '@angular/core';

export interface FooterLinksProps {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class FooterLinksService {
  constructor() {}

  getLinks(): FooterLinksProps[] {
    return [
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
    ];
  }
}
