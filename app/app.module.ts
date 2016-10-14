/*Módulos externos*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import './rxjs-extensions';


/*Módulos propios*/
import { PatientsModule  } from './patients/patients.module';

/*Componentes*/
import { AppComponent }   from './app.component';


/*Mocks*/
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './mocks/in-memory-data.service';



@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PatientsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }