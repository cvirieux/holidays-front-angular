import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CanActivateGuard} from "./shared/guards/can-activate.guard";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    'roles': ['USER']
  },
  canActivate: [CanActivateGuard]
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
