import { Injectable } from '@angular/core';
import { Pet } from '../model/Pet';
import { MedicalRecord } from '../model/MedicalRecord';
import { Contact } from '../model/Contact';
import { Ad } from '../model/Ad';

@Injectable({
  providedIn: 'root'
})
export class AdCreateService {

  constructor() { }
  ad: Ad =new Ad();

  pet: Pet;
  medicalR: MedicalRecord;
  contact: Contact;

  setPet(pet: Pet) {
    this.pet = pet;
  }

  setMedicalR(medicalR: MedicalRecord) {
    this.medicalR = medicalR;
  }

  setContact(contact: Contact) {
    this.contact = contact;
  }

  createAd() {
    if (this.pet != null && this.medicalR != null && this.contact != null)
      console.log("ad is created");
        this.ad.contact=this.contact;
        this.ad.medicalRecord=this.medicalR;
        this.ad.pet=this.pet;
  }
}
