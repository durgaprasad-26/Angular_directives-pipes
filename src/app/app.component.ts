import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive_and_pipes';
  name='durgaprasad';
  check:boolean=true;
  islogged=0;
  status = 'warning';
  isActive=false;    //for ngclass
  case="case1";

  products=[
    { id: 1, name: 'Apple', price: 1.2 },
    { id: 2, name: 'Banana', price: 0.8 },
    { id: 3, name: 'Orange', price: 1.5 }
  ]
}
