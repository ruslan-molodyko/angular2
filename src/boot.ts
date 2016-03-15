import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {App} from './script/app.component'

import {provide} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);