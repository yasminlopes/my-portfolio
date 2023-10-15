import { Component } from '@angular/core';
import { fadeInUp } from '../../animations/fadeInUp';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [fadeInUp],
  standalone: true
})
export class FooterComponent {

}
