import {Component, Input} from 'angular2/core';

/**
 * Menu item interface
 */
export interface MenuItems {
    name: string;
    icon: string;
    active?: boolean;
    href?: string;
    list?: MenuItems[];
}

@Component({
    selector: 'menu-dashboard',
    templateUrl: './modules/menu-dashboard/assets/template/index.html',
    styleUrls: ['./modules/menu-dashboard/assets/style/main.css']
})
export class MenuDashboard {

    /**
     * List of menu items
     */
    @Input() list: MenuItems[];

    /**
     * Width of menu
     * @type {string}
     */
    @Input() width:string = '300px';

    /**
     * Clear all active classes from all previous links
     */
    clearLinkedElement() {
        for (let item of this.list) {
            if (item.list != null) {
                for (let itemNested of item.list) {
                    itemNested.active = false;
                }
            } else {
                item.active = false;
            }
        }
    }
}