import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { People } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
public search = new BehaviorSubject<string>('')
  constructor(private http : HttpClient) { }

  baseUrl: string =('http://localhost:3000/People')
  getUser(){
    return this.http.get<People[]>(this.baseUrl)
  }
  
}
