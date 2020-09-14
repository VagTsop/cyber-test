import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }
  
    //with intercept  we set the request header before request leaves our application
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        // add header with basic auth credentials if user is logged in and request is to the api url
 
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.authdata;
        const isApiUrl = request.url.startsWith(environment.apiUrl); 
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${user.authdata}`
                }
            })
        }


        return next.handle(request) // forward the request after we customise it

    }

}