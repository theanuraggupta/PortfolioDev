import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ConstructionComponent } from '../../util/construction/construction.component';
import { UtilModule } from '../../util/util.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    BlogRoutingModule,
    UtilModule
  ]
})
export class BlogModule { }
