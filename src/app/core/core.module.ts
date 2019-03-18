import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './component/main-header/main-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainHeaderComponent]
})
export class CoreModule { }
