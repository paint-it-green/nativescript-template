import { Injectable, Injector, OnDestroy } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "@nativescript/core";
import { Subscription } from "rxjs";
import { ExtendedNavigationExtras } from "@nativescript/angular/router/router-extensions";

@Injectable()
export abstract class BaseComponent implements OnDestroy {

    page: Page;
    routerExtensions: RouterExtensions;
    activeRoute: ActivatedRoute;

    private _subscription = new Subscription();

    constructor(
        protected injector: Injector,
    ) {
        this.page = injector.get(Page);
        this.routerExtensions = injector.get(RouterExtensions);
        this.activeRoute = injector.get(ActivatedRoute);

        this.setDefaults();
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    protected setDefaults(): void {
        if (this.page) {
            this.page.enableSwipeBackNavigation = false;
        }
    }

    navigate(
        path: Array<string | number>,
        options: Partial<ExtendedNavigationExtras> = {}
    ): void {
        this.routerExtensions.navigate(path, {
            ...{ relativeTo: this.activeRoute },
            ...options
        });
    }

    back(): void {
        this.routerExtensions.back({ relativeTo: this.activeRoute });
    }
}
