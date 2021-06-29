import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent extends BaseComponent implements OnInit {

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void { }

}
