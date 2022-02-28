import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../service/user.service";

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (route.data['roles']) {
      // Routes need a role
      const roles = this.userService.getRoles();
      let auth = false;
      route.data['roles'].forEach((role: string) => {
        if (roles.includes(role)) {
          auth = true;
          return;
        }
      });
      return auth;
    } else {
      return true;
    }
  }
}
