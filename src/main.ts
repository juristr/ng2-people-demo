import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { enableProdMode } from '@angular/core';
import { CraftyrolAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CraftyrolAppComponent, [ HTTP_PROVIDERS ]);
