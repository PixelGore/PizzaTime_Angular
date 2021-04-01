import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(
      'http://127.0.0.1:8000/api/product-list/'
    );
  }
  getUser(){
    return this.http.get('http://127.0.0.1:8000/api/getUser/')
  }
}
export interface IUser {
  id: number,
  username: string
}

export interface IProducts {
  id: number;
  name: string;
  description: string;
  price: string;
  category_name: string;
  image: string | null;
}
