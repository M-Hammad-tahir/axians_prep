import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-button',
  imports: [MatAnchor, CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button implements OnInit {
  @Input() type?: string;
  @Input() text?: string;
  @Input() color?: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  onClick():void {
    console.log(`${this.type}: Button Clicked!!`);
    this.btnClick.emit();
  }

}