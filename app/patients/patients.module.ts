import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*components*/
import { PatientComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

/*Services*/
import { PatientService } from './shared/services/src/patient.service';

/*Routing*/
import  { patientsRouting } from './patients.routing';

@NgModule({
    imports: [patientsRouting, CommonModule, FormsModule],
    exports: [],
    declarations: [PatientComponent, DetailComponent],
    providers: [{provide:"IPatientService", useClass: PatientService}]
})
export class PatientsModule { }
