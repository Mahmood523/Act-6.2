import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./authService";
@Injectable()
export class Guard implements CanActivate {
    constructor(private authServic: AuthService,
        private route: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        ): boolean |  Observable<boolean> | Promise<boolean> {
        if(this.authServic.isAuth){
            return true;

        } else {
            return this.route.navigate(['/auth']);
        }
    }


}