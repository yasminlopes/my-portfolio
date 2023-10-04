import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent {

  @Output() onClick = new EventEmitter()

}
