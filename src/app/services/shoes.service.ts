import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShoesService {
  constructor(private http: HttpClient) {

  }

  requestShoes() { 
    return this.http.get('http://localhost:3000/shoes');
  }

  requestShoeById(id) {
    return this.http.get(`http://localhost:3000/shoes/${id}`);
  }

  requestShoeDelete(id) {
    return this.http.delete(`http://localhost:3000/shoes/${id}`);
  }

  requestShoeAdding(shoe) {
    return this.http.post('http://localhost:3000/shoes', shoe);
  }

  requestShoeEdditing(id, editedShoe) {
    return this.http.put(`http://localhost:3000/shoes/${id}`, editedShoe);
  }
}