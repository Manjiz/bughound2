import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload'

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'api/upload'})

  constructor() { }

  ngOnInit() {
  }
}
