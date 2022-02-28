import {Injectable} from "@angular/core";
import jwtDecode from "jwt-decode";
import {JwtUser} from "../../model/jwt-user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(login: string, password: string): Observable<void> {
    return this.http.post<string>(`${environment.backend}/login`, {
      login: login,
      password: password
    }, {responseType: 'text' as 'json'})
      .pipe(
        map(jwt => {
          localStorage.setItem("jwt", jwt);
          this.loggedIn.next(true);
        })
      );
  }


  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  public getRoles(): string[] {
    const token = localStorage.getItem("jwt");
    if (token) {
      return jwtDecode<JwtUser>(token).roles;
    } else {
      return [];
    }
  }

  public logout(): void {
    localStorage.removeItem("jwt");
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
