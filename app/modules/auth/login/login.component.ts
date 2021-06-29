import { Component, Injector, OnInit } from '@angular/core';

import { BaseComponent } from '@core/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
