import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class AlwaysAuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('guard called............');
        console.log(route); 
        console.log(state);
        // validate the situation and decide whether true or whether false 
        return true;
    }
}
