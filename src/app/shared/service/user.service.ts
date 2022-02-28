import {Injectable} from "@angular/core";
import jwtDecode from "jwt-decode";
import {JwtUser} from "../../model/jwt-user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public login(login: string, password: string): Observable<string> {
    return this.http.post<string>(`${environment.backend}/login`, {
      login: login,
      password: password
    }, {responseType: 'text' as 'json'});
  }

  public storeJwt(jwt: string) {
    localStorage.setItem("jwt", jwt);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem("jwt");
    return !!token;
  }

  public getRoles(): string[] {
    const token = localStorage.getItem("jwt");
    if (token) {
      return jwtDecode<JwtUser>(token).roles;
    } else {
      return [];
    }
  }

}
