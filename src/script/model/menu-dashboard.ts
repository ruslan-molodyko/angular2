/**
 * Created by admin on 23.03.2016.
 */
import {MenuItems} from '../module/menu-dashboard/index';

let items: MenuItems[] = [
    {
        name: "UI Elements",
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
        name: 'Table1',
        icon: 'fa-table',
        href: '#'
    }
];

export {items};
