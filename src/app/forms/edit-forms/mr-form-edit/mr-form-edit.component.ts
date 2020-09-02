import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { AdCreateService } from 'src/app/ad-create.service';
import { MedicalRecord } from 'src/model/MedicalRecord';

@Component({
  selector: 'app-mr-form-edit',
  templateUrl: './mr-form-edit.component.html',
  styleUrls: ['./mr-form-edit.component.css']
})
export class MrFormEditComponent implements OnInit {

  @Input() pet: Pet;

  medicalR: MedicalRecord=new MedicalRecord();
  
  @Output() mrForm = new EventEmitter<boolean>();

  constructor(private adCreateService: AdCreateService) { }

  ngOnInit(): void {
    console.log(this.pet.name);
    this.medicalR.height=this.pet.height;
    this.medicalR.weight=this.pet.weight;
    this.medicalR.allergies=this.pet.allergies;
    this.medicalR.vaccines=this.pet.vaccination;
    this.medicalR.neutered=this.pet.neutered;
  }

  onSubmit(): void {
    this.adCreateService.setMedicalR(this.medicalR);
    this.mrForm.emit(true);
  }

}
