import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://restcountries.com/v3.1/region/America';
  constructor(private http: HttpClient  ) { }


  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCountryByName(name: string): Observable<any> {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    return this.http.get<any>(url);
  }
}
