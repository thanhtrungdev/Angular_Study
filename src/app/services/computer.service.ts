import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  constructor(private http: HttpClient) {}

  computerURL = '../data/computer.json';

  getComputer() {
    //return this.http.get(this.computerURL);

    return this.http.get<Computer>(this.computerURL);
  }
}
