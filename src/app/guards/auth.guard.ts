import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { ButtonClickService } from '../services/button-click.service';

export const authGuard: CanActivateChildFn = (childRoute,
  state) => {
    const router = inject(Router);
    const btnService = inject(ButtonClickService);
    const btnClick: boolean = btnService.isButtonClicked();
    if(btnClick) {
      // If the button has been clicked, allow access to the child route
      return true;
    } else {
      // If the button has not been clicked, redirect to the parent route
      router.navigate(['/parent']);
      return false;
    }
};
