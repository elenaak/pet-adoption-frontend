import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Pet} from '../model/Pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  getPet(id:Number):Observable<Pet>{
      return this.http.get<Pet>(`http://localhost:8080/api/pets/${id}`);
  }
}
