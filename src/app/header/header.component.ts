import { Component, Input, OnInit } from '@angular/core'

import AV from 'app/app.leancloud.init'
import util from 'app/util'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navidx: string

  isShowSignInPop = false
  currentUser = null

  model = {
    username: '',
    password: '1234567890'
  }

  closeSigninPop () {
    this.isShowSignInPop = false
  }
  signin () {
    Promise.resolve().then(() => {
      return AV.User.logIn(this.model.username, this.model.password)
    }).then((loginedUser) =>  {
      this.currentUser = loginedUser
      this.closeSigninPop()
      util.toast('登录成功')
    }).catch(() => {
      util.toast('登录失败')
    })
  }
  signout () {
    AV.User.logOut()
    this.currentUser = null
    this.closeSigninPop()
    util.toast('登出成功')
  }

  constructor() {
    this.currentUser = AV.User.current()
  }

  ngOnInit() {
  }
}
