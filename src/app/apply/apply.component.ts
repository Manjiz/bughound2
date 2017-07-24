import { Component, OnInit, NgZone } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { UploaderComponent } from 'app/components/uploader/uploader.component'
import { WindowRefService } from 'app/window-ref.service'
import AV from 'app/app.leancloud.init'
import util from 'app/util'

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  private _window;
  business = []
  model = {
    newBusinessName: '',
    name: '',
    business: null,
    desc: '',
    files: [],
    width: document.documentElement.clientWidth
    // height: document.documentElement.clientHeight,
    // dpr: window.devicePixelRatio,
    // ua: navigator.userAgent
  }
  isShowDropdown = false
  isSubmitSucc = false

  toggleDropdown () {
    this.isShowDropdown = !this.isShowDropdown
  }
  closeDropdown () {
    this.isShowDropdown = false
  }
  getBusiness () {
    return new Observable<any>((observer) => {
      var query = new AV.Query('Business')
      query.find().then((results) => {
        observer.next(results)
        observer.complete()
      }).catch((error) => {
        observer.error(error.message)
      })
    })
  }
  selectBusiness (item) {
    this.model.business = item
    this.closeDropdown()
  }
  addBusiness (name) {
    var Business = AV.Object.extend('Business')
    var business = new Business()
    business.set('name', name)
    business.save().then((result) => {
      this._ngZone.run(() => {
        this.business.push(result)
      })
    }).catch(() => {
    })
  }

  constructor(private _ngZone: NgZone, windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow
    this.getBusiness().subscribe((list) => {
      this.business = list
    })
  }

  ngOnInit() {
     this._window.textboxio.replace('#editor', {
       ui: {
         toolbar: {
           items: [
             {
               label: 'Undo group',
               items: ['undo']
             },
             {
               label: 'Insert group',
               items: ['link', 'table']
             },
             {
               label: 'Emphasis group',
               items: ['bold', 'underline']
             },
             {
               label: 'Other group',
               items: ['styles', 'hr']
             }
           ]
         }
       }
     })
  }
}
