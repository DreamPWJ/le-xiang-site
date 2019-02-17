import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';

export const COMPONENTS = [FooterComponent];

/**
 * 所有组件的模块管理
 */
@NgModule({
  declarations: [COMPONENTS],
  entryComponents: [],
  imports: [CommonModule],
  exports: [COMPONENTS]
})
export class ComponentsModule {
}
