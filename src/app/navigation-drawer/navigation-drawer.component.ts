import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface Page {
    icon: string;
    name: string;
    destination: string;
}

@Component({
  selector: 'navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html'
})
export class NavigationDrawerComponent {
    private _pages: Array<Page> = [];

    constructor(private _router: Router, private _menu: MenuController) {
        this._pages = [
            {name : 'Tracking', icon: 'satellite.png', destination: ''},
        ];
    }

    navigate(url: string) {
        this._menu.close();
        this._router.navigate([url]);
    }
}
