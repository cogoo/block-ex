import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BlockExplorerComponent } from './block-explorer/block-explorer.component';

@NgModule({
  declarations: [
    BlockExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [BlockExplorerComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const blockExplorerElement = createCustomElement(BlockExplorerComponent, {injector: this.injector});
    customElements.define('block-explorer', blockExplorerElement);
  }
 }
