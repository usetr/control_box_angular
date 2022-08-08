import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/shared/constants/config';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterPageService {

  constructor(private http: HttpService) { }

  public getAllUser(): Observable<any>{
    return this.http.get(environment.serviceUrlApi + Config.API_PRUEBA);
  }
  public deleteUser(id:any): Observable<any>{
    return this.http.delete(environment.serviceUrlApi + Config.API_PRUEBA + '/'+id);
  }

  public createUser(user:any): Observable<any>{
    return this.http.post(environment.serviceUrlApi + Config.API_PRUEBA,user);
  }

}
