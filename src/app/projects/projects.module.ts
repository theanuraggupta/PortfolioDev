import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ConstructionComponent } from '../util/construction/construction.component';
import { UtilModule } from '../util/util.module';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        ProjectsRoutingModule,
        UtilModule
    ]
})

export class ProjectsModule {}