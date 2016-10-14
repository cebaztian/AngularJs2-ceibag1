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
    selectedPatient: Patient;
    searchName: string;
    priorityList = [
        { id: 1, name: 'Low' },
        { id: 2, name: 'Normal' },
        { id: 3, name: 'high' },
    ];

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
    
    onSelect(patient: Patient): void {
        if (!patient)
            this.selectedPatient = patient;
        else
            this.selectedPatient = Object.assign({}, patient);
    }

    add(): void {
        this.selectedPatient = new Patient();
    }

    search(): void {
        if (this.searchName) {
            this.patientService.getAll().then(patients => this.patients = patients
                .filter(p => p.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 || p.lastName.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1)
                .map(function (p) { return p; }));
        }
        else
            this.getAll();
    }

    delete(id: string): void {
        this.patientService.delete(id).then(() => this.patients = this.patients.filter((v, i) => v.id !== id));
    }

    addCallBack(patient: Patient): void {
        this.patients.push(patient);
    }

    updateCallBack(patient: Patient): void {
        this.patients
            .filter(v => v.id === patient.id)
            .map(function (p) {
                p.address = patient.address;
                p.contact = patient.contact;
                p.lastName = patient.lastName;
                p.name = patient.name
                p.id = patient.id
                p.priority = patient.priority
                p.status = patient.status
            });
    }

    getPriorityName(id: number): string {
        return this.priorityList.find(v => v.id === id).name;
    }
    
}