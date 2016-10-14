import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IPatientService } from '../../shared/services/def/patient.service'
import { Patient } from '../../shared/models/patient.model'


@Component({
    moduleId: module.id,
    selector: 'patient-detail',
    templateUrl: 'detail.component.html',
    styleUrls:['detail.component.css']
})
export class DetailComponent implements OnInit {
    priorityList = [
        { id: 1, name: 'Low' },
        { id: 2, name: 'Normal' },
        { id: 3, name: 'high' },
    ];

    public statusEnable: boolean = false;
    public statusDisable: boolean = false;

    @Input() patient: Patient;

    @Output() onSelect = new EventEmitter<Patient>();
    @Output() addCallBack = new EventEmitter<Patient>();
    @Output() updateCallBack = new EventEmitter<Patient>();

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

    cancel(): void {
        this.patient = null;
        this.onSelect.emit(this.patient);
    }

    save(): void {
        if (!this.patient.id)
            this.patientService.create(this.patient).then(patient => this.applyAdd(patient));
        else
            this.patientService.update(this.patient).then(() => this.applyUpdate(this.patient));


    }
    applyAdd(patient: Patient): void {
        this.addCallBack.emit(patient);
        this.cancel();
    }
    applyUpdate(patient: Patient): void {
        this.updateCallBack.emit(patient);
        this.cancel();
    }


    getPriorityName(id: number): string {
        return this.priorityList.find(v => v.id === id).name;
    }

}


