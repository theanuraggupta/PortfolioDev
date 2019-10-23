import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
