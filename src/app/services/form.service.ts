import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormData } from '../models/form-data.model';
import { HttpClient } from '@angular/common/http';
import { NetworkData } from '../models/network-data';

@Injectable({
  providedIn: 'root',
})
export class FormServiceTs {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private limit = 6;

  private submittedDataSubject = new BehaviorSubject<FormData | null>(null);
  submittedData$ = this.submittedDataSubject.asObservable();
  
  submitForm(data: FormData): void{
    console.log('Form submitted:', data);
    this.submittedDataSubject.next(data);
  }

  clearData(): void {
    this.submittedDataSubject.next(null);
  }

  getNetworkData(): Observable<NetworkData[]> {
    return this.http.get<NetworkData[]>(`${this.apiUrl}?_limit=${this.limit}`);
  }

  getNetworkDataById(id: number): Observable<NetworkData> {
    const result = this.http.get<NetworkData>(`${this.apiUrl}/${id}`);
    return result;
  }
}
