import { Injectable } from '@angular/core';
import { Pet } from '../../model/Pet';
import { MedicalRecord } from '../../model/MedicalRecord';
import { Contact } from '../../model/Contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdCreateService {

  constructor(private http: HttpClient) { }

  pet: Pet;

  setPet(pet: Pet) {
    this.pet = pet;
    this.pet.name = pet.name;
  }

  setMedicalR(medicalR: MedicalRecord) {
    this.pet.weight = medicalR.weight;
    this.pet.height = medicalR.height;
    this.pet.neutered = medicalR.neutered;
    this.pet.allergies = medicalR.allergies;
    this.pet.vaccination = medicalR.vaccines;
  }

  setContact(contact: Contact) {
    this.pet.contact = contact;
  }

  createAd() {
    return this.http.post<Pet>('http://localhost:8080/api/pets/create', {
      type: this.pet.type,
      name: this.pet.name,
      breed: this.pet.breed,
      color: this.pet.color,
      age: this.pet.age,
      sex: this.pet.sex,
      description: this.pet.description,
      behaviour: this.pet.behaviour,
      image: this.pet.image,
      weight: this.pet.weight,
      height: this.pet.height,
      allergies: this.pet.allergies,
      vaccines: this.pet.vaccination,
      contact: this.pet.contact
    });
  }

  editAd(id: Number) {
    return this.http.put<Pet>(`http://localhost:8080/api/pets/edit/${id}`, {
      type: this.pet.type,
      name: this.pet.name,
      breed: this.pet.breed,
      color: this.pet.color,
      age: this.pet.age,
      sex: this.pet.sex,
      description: this.pet.description,
      behaviour: this.pet.behaviour,
      image: this.pet.image,
      weight: this.pet.weight,
      height: this.pet.height,
      allergies: this.pet.allergies,
      vaccines: this.pet.vaccination,
      contact: this.pet.contact
    });
  }
}
