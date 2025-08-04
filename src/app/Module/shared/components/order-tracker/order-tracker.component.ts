import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, CommonModule],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.scss'
})
export class OrderTrackerComponent {
  @Input() activeStep:any
  @Input() steps:any
last: any;
step: any;
}
