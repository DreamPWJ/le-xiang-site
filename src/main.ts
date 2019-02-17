import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(res => {
    // 启动完成  Web端启动动画隐藏
    document.querySelector('.start-animation').remove();
  })
  .catch(err => console.error(err))
  .finally(() => {
  });
