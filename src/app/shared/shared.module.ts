import {NgModule} from '@angular/core';
import {ComponentsModule} from '../components/components.module';


/**
 * 共享模块  子组件延迟懒加载的时候  需要在子模块imports引入共享模块
 */
const SharedModules = [
  ComponentsModule
];

@NgModule({
  imports: [
    SharedModules,
  ],
  exports: [
    SharedModules
  ]
})

export class SharedModule {
}
