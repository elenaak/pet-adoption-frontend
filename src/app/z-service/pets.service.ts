import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../model/Pet';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  getPet(id: Number): Observable<Pet> {
    return this.http.get<Pet>(`http://localhost:8080/api/pets/${id}`);
  }

  getLiked(): Observable<Pet[]> {
    return this.http.get<Pet[]>("http://localhost:8080/api/like");
  }

  likeOrDislike(petId: Number) {
    return this.http.get(`http://localhost:8080/api/like/${petId}`)
  }

  getPetsByUser(): Observable<Pet[]> {
    return this.http.get<Pet[]>("http://localhost:8080/api/my-pets");
  }

  deletePet(id: Number) {
    return this.http.delete(`http://localhost:8080/api/pets/${id}`)
  }

  getAdoptRequests(id:Number):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:8080/api/adopt/requests/${id}`)
  }

  createAdoptRequest(id:Number){
    return this.http.post(`http://localhost:8080/api/adopt/${id}`,{})
  }
}
