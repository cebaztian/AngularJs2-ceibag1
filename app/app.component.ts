import { Component,OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <nav>
                  <a routerLink="/patients" routerLinkActive="active">Patients</a>
                </nav>
              <router-outlet></router-outlet>`,
})
export class AppComponent  {
 title = 'AngularJs 2 Workshop';
}