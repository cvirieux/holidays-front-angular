import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {CommonsModule} from "../shared/commons.module";
import {HomeService} from "./home.service";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonsModule
  ],
  providers: [HomeService]
})
export class HomeModule {
}
