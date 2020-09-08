import { MedicalRecord } from './MedicalRecord';
import { Contact } from './Contact';
import { LoginComponent } from 'src/app/login/login.component';
import { User } from './User';

export class Pet {
    constructor() { }
    id: Number;
    contact: Contact;
    type: String;
    name: String;
    image: String;
    age: String;
    breed: String;
    sex: String;
    color: String;
    behaviour: String;
    description: String;
    weight: Number;
    height: Number;
    neutered: Boolean;
    allergies: String;
    vaccination: String;
    owner: User;
}