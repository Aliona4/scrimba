/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrimba';
} 
этот код был до того как я скопировала из урока 8
ниже вставила код из урока 8. 
поробовала все работает hello world на экрране вышло  */
/*  этот код из 8 урока ниже из 10 */
import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
  
}