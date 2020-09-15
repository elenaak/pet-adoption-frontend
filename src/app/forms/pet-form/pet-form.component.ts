import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pet } from '../../../model/Pet';
import { AdCreateService } from '../../z-service/ad-create.service';


@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  pet: Pet = new Pet();
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
    console.log("input change")
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
    console.log("_handleReaderLoaded")
    var reader = e.target;
    this.pet.image = reader.result;
    this.image=true;
  }

}
