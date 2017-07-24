import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component'
import { ApplyComponent } from './apply/apply.component'
import { BusinessComponent } from './business/business.component'
import { DeveloperComponent } from './developer/developer.component'

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'apply',
    component: ApplyComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'developer',
    component: DeveloperComponent
  },
  {
    path: '*',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
