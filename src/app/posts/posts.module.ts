import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { ConstructionComponent } from '../util/construction/construction.component';
import { UtilModule } from '../util/util.module';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    PostsRoutingModule,
    UtilModule
  ]
})
export class PostsModule { }
