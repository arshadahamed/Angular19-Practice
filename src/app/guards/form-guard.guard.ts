import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const formGuardGuard: CanDeactivateFn<LoginComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if(component.email?.dirty && component.password?.dirty) {
    return confirm("You have unsaved changes. Do you really want to leave?")
    ? true : false;
  }
  console.log("Current Route:", currentRoute);
  console.log("Current State:", currentState);
  console.log("Next State:", nextState);
  return true; // Allow navigation if no unsaved changes

}
