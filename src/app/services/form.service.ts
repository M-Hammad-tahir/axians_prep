import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormData } from '../models/form-data.model';

@Injectable({
  providedIn: 'root',
})
export class FormServiceTs {
  private submittedDataSubject = new BehaviorSubject<FormData | null>(null);
  submittedData$ = this.submittedDataSubject.asObservable();
  
  submitForm(data: FormData): void{
    console.log('Form submitted:', data);
    this.submittedDataSubject.next(data);
  }

  clearData(): void {
    this.submittedDataSubject.next(null);
  }
}
