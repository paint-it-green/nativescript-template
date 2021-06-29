import { Component, Injector, OnInit } from '@angular/core';

import { BaseComponent } from '@core/components';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent extends BaseComponent implements OnInit {

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

}
