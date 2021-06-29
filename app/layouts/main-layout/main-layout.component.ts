import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent extends BaseComponent implements OnInit {

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void { }

}
