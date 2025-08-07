import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {
  constructor(private http: HttpClient) {
    // Initialize the service with HttpClient if needed
  }

  getData(url: string): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');
  }
}
