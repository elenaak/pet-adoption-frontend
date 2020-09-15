import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../model/Pet';
import { AdCreateService } from '../../z-service/ad-create.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  petForm = false;
  mrForm = false;
  contactForm = false;
  logged=false;
  loading=false;

  constructor(private adCreateService: AdCreateService,
    private route: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.logged = true;
    }
  }

  setPet(petForm: any) {
    this.petForm = petForm;
  }

  setMR(mrForm: any) {
    this.mrForm = mrForm;
  }

  setContact(contact: any) {
    this.contactForm = true;
    this.loading=true;
    this.createAd();
  }
  createAd() {
    this.adCreateService.createAd().subscribe(
      pet => {
        this.loading=false;
        this.route.navigate(['/pets']);
      }
    );
  }
}
