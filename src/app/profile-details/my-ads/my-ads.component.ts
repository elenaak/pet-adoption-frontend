import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../z-service/pets.service';
import { Pet } from '../../../model/Pet';
import { faEdit, faUsers, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  constructor(private petsService: PetsService,
    private router: Router) { }

  trash = faTrash;
  edit = faEdit;
  users = faUsers;
  all: Pet[];
  sublist: Pet[];
  limit = 3;
  stop = false;
  empty = false;
  size = 0;
  deleteClicked = false;
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.petsService.getPetsByUser().subscribe(
      pets => {
        this.loading = false;
        this.all = pets
        this.sublist = this.all.slice(0, this.limit);
        this.size = this.all.length;
        if (this.size == 0)
          this.empty = true;
          this.stop=true;
      }
    );
  }
  onClick() {
    this.limit += 3;
    if (this.limit >= this.all.length) {
      this.stop = true;
    }
    this.sublist = this.all.slice(0, this.limit);
  }

  onDelete(id: Number) {
    this.router.navigate(['/delete/'.concat(id.toString())])
  }
}
