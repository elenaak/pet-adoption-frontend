import { MedicalRecord } from './MedicalRecord';
import { Contact } from './Contact';

export class Pet {
    constructor() {}
    medicalRecord:MedicalRecord;
    contact: Contact;
    type: String;
    name: String;
    image: File;
    age: Number;
    breed: String;
    sex: String;
    color: String;
    behaviour: String;
    description: String;
}