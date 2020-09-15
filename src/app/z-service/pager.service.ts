import { Injectable } from '@angular/core';
import { Pet } from '../../model/Pet';
import { Contact } from '../../model/Contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsSearchResult } from '../../model/PetsSearchResult';

@Injectable({
  providedIn: 'root'
})
export class PagerService {
    constructor(public http: HttpClient){

    }

    getPageList(name: string, type: string, breed: string, age: string, sex: string, color: string,
      page: number, size: number):Observable<any>{
      var parametars="";
      if(name!=null){
        parametars=parametars.concat(`name=${name}`);
      }
      if(type!=null){
        parametars=parametars.concat(`&type=${type}`);
      }
      if(breed!=null){
        parametars=parametars.concat(`&breed=${breed}`);
      }
      if(age!=null){
        parametars=parametars.concat(`&age=${age}`);
      }
      if(sex!=null){
        parametars=parametars.concat(`&sex=${sex}`);
      }
      if(color!=null){
        parametars=parametars.concat(`&color=${color}`);
      }
      parametars=parametars.concat(`&page=${page-1}`);
      if(size==0){
        size=15;
      }
      parametars=parametars.concat(`&size=${size}`);
      console.log("adsd"+parametars)
      return this.http.get(`http://localhost:8080/api/pets/search?${parametars}`);
  }

  getAll(page:Number,size:Number):Observable<PetsSearchResult>{
    var param = ""
    param=param.concat(`page=${page}`);
    param=param.concat(`&size=${size}`);
    return this.http.get<PetsSearchResult>(`http://localhost:8080/api/pets?${param}`);
  }

  
}
