import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'about', loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'posts', loadChildren: './modules/posts/posts.module#PostsModule'
  },
  {
    path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule'
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
