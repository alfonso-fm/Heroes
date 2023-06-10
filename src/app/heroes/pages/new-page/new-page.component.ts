import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public hero?: Hero;

  public publishers = [
    { id: 'DC Comics', desc:'DC - Comics' },
    { id: 'Marvel Comics', desc:'Marvel - Comics' },
  ]
}
