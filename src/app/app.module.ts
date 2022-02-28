import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {CommonsModule} from "./shared/commons.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserService} from "./shared/service/user.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonsModule,
    AppRoutingModule,
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
