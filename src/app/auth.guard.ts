import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// const router =  new Router();
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = localStorage.getItem('token');
  console.log('token',token)
  if(token){
    return true;
  }
  else{
    router.navigate(['login'])
    return false;
  }
};
