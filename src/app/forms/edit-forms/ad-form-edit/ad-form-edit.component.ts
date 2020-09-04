import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from 'src/model/Pet';
import { AdCreateService } from 'src/app/ad-create.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ad-form-edit',
  templateUrl: './ad-form-edit.component.html',
  styleUrls: ['./ad-form-edit.component.css']
})
export class AdFormEditComponent implements OnInit {

  petForm = false;
  mrForm = false;
  contactForm = false;
  pet: Pet;
  error: Boolean = false;
  errorText =""
  
  

  constructor(private petsService: PetsService,
    private router: Router,
    private adCreateService: AdCreateService,
    private route: ActivatedRoute,) { }

 
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => this.petsService.getPet(+id))
    ).subscribe( pet => { this.pet=pet;},
      error =>{
        console.log("eror subs",error)
        this.error=error.statusText;
      });
  }

  setPet(petForm: any) {
    this.petForm = petForm;
  }

  setMR(mrForm: any) {
    this.mrForm = mrForm;
  }

  setContact(contact: any) {
    this.contactForm = true;
    this.editAd();
  }
  editAd(){
    this.adCreateService.editAd(4).subscribe(
      pet => {
        this.router.navigate(['/pets']);
      },
      err => {
       this.error=true;
       this.errorText = err.error;
      }
    );
  }
}
