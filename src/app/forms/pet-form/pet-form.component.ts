import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pet } from '../../../model/Pet';
import { AdCreateService} from '../../ad-create.service';


@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  pet: Pet = new Pet();
  petFormSubmmited = false;
  @Output() petForm = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  constructor(private adCreateService: AdCreateService ) { }

  onSubmitPetForm(): void {
    this.petFormSubmmited = true;
    this.adCreateService.setPet(this.pet);
    this.petForm.emit(true);
  }


}
