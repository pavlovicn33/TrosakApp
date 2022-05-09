import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DemoRoutes } from './demo.routes';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DemoRoutes),
    ButtonModule,
    RippleModule,
  ],
})
export class DemoModule {}
