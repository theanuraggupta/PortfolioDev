import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'about', loadChildren: () => import('./modules/about/about.module').then(x => x.AboutModule)
  },
  {
    path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(x => x.BlogModule)
  },
  {
    path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(x => x.ProjectsModule)
  },
  {
    path: 'construction', loadChildren: () => import('./util/util.module').then(x => x.UtilModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
