import { Injectable } from '@angular/core';
import { Ad } from '../model/Ad'
import { Contact } from '../model/Contact';
import { MedicalRecord } from '../model/MedicalRecord';
import { Pet } from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }

  ad: Ad; // this should be a list
  
  addAd(ad:Ad){
     this.ad=ad;
  }
}
