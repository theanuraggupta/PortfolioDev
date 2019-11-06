import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'about', loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'posts', loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'construction', loadChildren: './util/util.module#UtilModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
