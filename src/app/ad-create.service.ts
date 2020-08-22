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
  
  setPet(pet: Pet) {
    this.pet = pet;
  }

  setMedicalR(medicalR: MedicalRecord) {
    this.pet.medicalRecord = medicalR;
  }

  setContact(contact: Contact) {
    this.pet.contact = contact;
  }

  createAd() {
    if (this.pet != null && this.pet.medicalRecord != null && this.pet.contact != null)
      console.log("ad is created");
  }
}
