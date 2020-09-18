import { Component } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why-adopt-pet',
  templateUrl: './why-adopt-pet.component.html',
  styleUrls: ['./why-adopt-pet.component.css']
})
export class WhyAdoptPetComponent {

  active = 1;
  next = faChevronRight;
  prev = faChevronLeft;

  onPrev() {
    if (this.active == 1)
      this.active = 5;
    else
      this.active -= 1;
  }

  onNext() {
    if (this.active == 5)
      this.active = 1;
    else
      this.active += 1;
  }
}
