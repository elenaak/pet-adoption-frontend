import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { AdCreateService } from 'src/app/ad-create.service';

@Component({
  selector: 'app-pet-form-edit',
  templateUrl: './pet-form-edit.component.html',
  styleUrls: ['./pet-form-edit.component.css']
})
export class PetFormEditComponent implements OnInit {

  @Input() pet: Pet 
  petFormSubmmited = false;
  image = false;
  @Output() petForm = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  constructor(private adCreateService: AdCreateService) { }

  onSubmitPetForm(): void {
    this.petFormSubmmited = true;
    this.adCreateService.setPet(this.pet);
    this.petForm.emit(true);
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.readAsDataURL(file);
    reader.onload = this._handleReaderLoaded.bind(this);
  }
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.pet.image = reader.result;
    this.image=true;
  }
}
