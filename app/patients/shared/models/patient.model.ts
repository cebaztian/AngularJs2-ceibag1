import { Person } from '../../../shared/models/person.model';

export class Patient extends Person {
    status: boolean;
    priority: number;
    address: string;
}