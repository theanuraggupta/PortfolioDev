import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { UtilModule } from '../util/util.module';
import { ConstructionComponent } from '../util/construction/construction.component';

@NgModule({
  declarations: [PostsComponent, ConstructionComponent],
  imports: [
    CommonModule,
    UtilModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
