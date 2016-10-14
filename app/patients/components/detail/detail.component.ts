import { Component, OnInit, EventEmitter, Input, Output, Inject  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IPatientService } from '../../shared/services/def/patient.service'
import { Patient } from '../../shared/models/patient.model'


@Component({
    moduleId: module.id,
    selector: 'patient-detail',
    template: ''
})
export class DetailComponent implements OnInit {

    private patientService: IPatientService;
    private router: Router;
    private route: ActivatedRoute;
    constructor( @Inject("IPatientService") patientService: IPatientService, router: Router, route: ActivatedRoute) {
        this.patientService = patientService;
        this.router = router;
        this.route = route;
    }

    ngOnInit() {

    }

}


