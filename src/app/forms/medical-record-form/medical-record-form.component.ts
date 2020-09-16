import { Component, EventEmitter, Output } from '@angular/core';
import { MedicalRecord } from '../../../model/MedicalRecord';
import { AdCreateService } from '../../z-service/ad-create.service';
import { Pet } from '../../../model/Pet';

@Component({
  selector: 'app-medical-record-form',
  templateUrl: './medical-record-form.component.html',
  styleUrls: ['./medical-record-form.component.css']
})
export class MedicalRecordFormComponent {

  pet: Pet;
  medicalR: MedicalRecord = new MedicalRecord();
  @Output() mrForm = new EventEmitter<boolean>();

  constructor(private adCreateService: AdCreateService) { }

  onSubmit(): void {
    this.adCreateService.setMedicalR(this.medicalR);
    this.mrForm.emit(true);
  }


}
