import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ProfileComponent,
      pathMatch: 'full'
    }
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule { }
