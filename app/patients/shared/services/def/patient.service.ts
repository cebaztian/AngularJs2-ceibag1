import {Patient} from '../../models/patient.model';
import { Observable } from 'rxjs';

export interface IPatientService {
  getAll():Promise<Patient[]>;
  get(id:string):Promise<Patient>;
  update(patient:Patient):Promise<Patient>;
  create(patient:Patient): Promise<Patient>; 
  delete(id: string): Promise<void>;
}

