import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-component',
  imports: [JsonPipe, NgIf],
  templateUrl: './data-component.html',
  styleUrl: './data-component.css',
})
export class DataComponent {

  @Input() data: any;

}
