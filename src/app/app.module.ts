import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FileUploadModule } from 'ng2-file-upload'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ApplyComponent } from './apply/apply.component';
import { BusinessComponent } from './business/business.component';
import { DeveloperComponent } from './developer/developer.component';

import { WindowRefService } from './window-ref.service';
import { UploaderComponent } from './components/uploader/uploader.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    ApplyComponent,
    BusinessComponent,
    DeveloperComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
