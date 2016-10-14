import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs';

import { Patient } from '../../models/patient.model';
import { IPatientService } from '../def/patient.service';


@Injectable()
export class PatientService implements IPatientService {

  private patientsUrl = 'app/patients';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  getAll(): Promise<Patient[]> {
    return this.http.get(this.patientsUrl)
      .toPromise()
      .then(response => response.json().data as Patient[])
      .catch(this.handleError);
  }

  get(id: string): Promise<Patient> {
    return this.getAll().then(patientes => patientes.find(patient => patient.id === id));
  }

  update(patient: Patient): Promise<Patient> {
    const url = `${this.patientsUrl}/${patient.id}`;
    return this.http
      .put(url, JSON.stringify(patient), { headers: this.headers })
      .toPromise()
      .then(() => patient)
      .catch(this.handleError);
  }

  create(patient: Patient): Promise<Patient> {
    patient.id = null;
    return this.http
      .post(this.patientsUrl, JSON.stringify( patient ), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    let url = `${this.patientsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}