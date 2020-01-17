import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { SpaRouterlinkDirective } from './spa-routerlink.directive';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CustomFooterComponent,
    SpaRouterlinkDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [SpaRouterlinkDirective],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  entryComponents: [
    CustomFooterComponent
  ],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customeFooterElement = createCustomElement(CustomFooterComponent, {injector: this.injector});
    customElements.define('custom-footer', customeFooterElement);
  }
}
