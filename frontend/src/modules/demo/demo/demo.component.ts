import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {}
}
