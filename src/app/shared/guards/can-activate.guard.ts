import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../service/user.service";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (route.data['roles']) {
      return this.userService.isLoggedIn().pipe(
        map(loggedIn => {
          if (loggedIn) {
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
            this.router.navigate(['/login']);
            return false;
          }
        })
      );
    } else {
      return of(true);
    }
  }
}
