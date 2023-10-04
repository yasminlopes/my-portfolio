import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _email = 'yasminlopes.ti@gmail.com'

  public redirectToEmail() {
    window.location.href = 'mailto:yasminlopes.ti@gmail.com';
  }

}
