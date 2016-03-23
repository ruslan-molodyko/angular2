import {Component, Input} from 'angular2/core';

@Component({
    selector: 'menu-dashboard',
    moduleId: module.id,
    templateUrl: './template/index.html',
    styleUrls: ['./style/main.css']
})
export class MenuDashboard {
    list:any = [
        {
            name: "UI Element",
            icon: 'fa-toggle-off',
            active: true,
            list: [
                {
                    name: 'Button',
                    icon: 'fa-circle-o',
                    href: '#'
                },
                {
                    name: 'Dropdown',
                    icon: 'fa-arrows-v',
                    active: true,
                    href: '#'
                },
                {
                    name: 'Other element',
                    icon: 'fa-flag-o',
                    href: '#'
                },
            ]
        },
        {
            name: 'Panel',
            icon: 'fa-bookmark-o',
            list: [
                {
                    name: 'Button',
                    icon: 'fa-circle-o',
                    href: '#'
                },
                {
                    name: 'Dropdown',
                    icon: 'fa-arrows-v',
                    href: '#'
                },
                {
                    name: 'Other element',
                    icon: 'fa-flag-o',
                    href: '#'
                },
            ]
        },
        {
            name: 'Table',
            icon: 'fa-table',
            href: '#'
        }
    ];

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