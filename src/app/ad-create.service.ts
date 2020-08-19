import { Injectable } from '@angular/core';
import { Pet } from '../model/Pet';
import { MedicalRecord } from '../model/MedicalRecord';
import { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class AdCreateService {

  constructor() { }

  pet: Pet;
  medicalR: MedicalRecord;
  contact: Contact;

  setPet(pet: Pet) {
    this.pet = pet;
  }

  setMedicalR(medicalR: MedicalRecord) {
    this.medicalR = medicalR;
  }

  setContact(contact: Contact){
    this.contact = contact;
  }

  createAd(){
    if(this.pet!=null && this.medicalR!=null && this.contact!=null)
      console.log("ad is created");
  }
}
