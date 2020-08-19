import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MedicalRecord } from '../../model/MedicalRecord';
import { AdCreateService} from '../ad-create.service';

@Component({
  selector: 'app-medical-record-form',
  templateUrl: './medical-record-form.component.html',
  styleUrls: ['./medical-record-form.component.css']
})
export class MedicalRecordFormComponent implements OnInit {

  medicalR: MedicalRecord = new MedicalRecord();
  @Output() mrForm = new EventEmitter<boolean>();

  constructor(private adCreateService: AdCreateService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.adCreateService.setMedicalR(this.medicalR);
    this.mrForm.emit(true);
  }


}
