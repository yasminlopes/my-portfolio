import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Yasmin Lopes | Desenvolvedora Front-end');

    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, software, developer' },
      {
        name: 'description',
        content:
          'Amo a tecnologia, e o Design. Unindo os dois, crio ideias e desenvolvo soluções usando minha criatividade e meu conhecimento.',
      },
    ]);
  }
}
