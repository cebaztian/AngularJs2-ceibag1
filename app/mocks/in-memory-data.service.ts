import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let doctors = [
            { id: 11, name: 'Nick', lastName: 'Riviera', contact: '555-55-5555', speciality: 'Allergy and immunology' },
            { id: 12, name: 'Bob', lastName: 'Alicon', contact: '555-55-5555', speciality: 'Cardiology' },
            { id: 13, name: 'Barry', lastName: 'Gota', contact: '555-55-5555', speciality: 'Anaesthesiology' },
            { id: 14, name: 'Jack', lastName: 'Ayate', contact: '555-55-5555', speciality: 'Pathology' },
            { id: 15, name: 'Alcor', lastName: 'Noque', contact: '555-55-5555', speciality: 'Endocrinology' },
            { id: 16, name: 'Aquiles', lastName: 'Bailoyo', contact: '555-55-5555', speciality: 'Gastroenterology' }
        ];
        let patients = [
            { id: 1, name: 'Homer', status: true, priority: 1, lastName: 'Simpson', contact: '555-55-5555', address: 'Avenida siempre viva 123' },
            { id: 2, name: 'Andrés', status: true, priority: 3, lastName: 'Jaramillo', contact: '555-55-5555', address: 'Avenida siempre viva 123' },
            { id: 3, name: 'Natalia', status: true, priority: 1, lastName: 'Arbelaez', contact: '555-55-5555', address: 'Avenida siempre viva 123' },
            { id: 4, name: 'Elver', status: true, priority: 2, lastName: 'Galarga', contact: '555-55-5555', address: 'Avenida siempre viva 123' },
        ];
        
        return { doctors, patients };
    }
}