import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { IPatientService } from '../../shared/services/def/patient.service';
import { Patient } from '../../shared/models/patient.model';

@Component({
    moduleId: module.id,
    selector: 'patient-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class PatientComponent implements OnInit {
    patients: Patient[];

    private patientService: IPatientService;
    private router: Router;
    private route: ActivatedRoute;
    constructor( @Inject("IPatientService") patientService: IPatientService, router: Router, route: ActivatedRoute) {
        this.patientService = patientService;
        this.router = router;
        this.route = route;
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.getAll();
        });
    }

    getAll() {
        this.patientService.getAll().then(patients => this.patients = patients);
    }

    
}