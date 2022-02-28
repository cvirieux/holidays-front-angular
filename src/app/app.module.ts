import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {CommonsModule} from "./shared/commons.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserService} from "./shared/service/user.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonsModule,
    AppRoutingModule,
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
