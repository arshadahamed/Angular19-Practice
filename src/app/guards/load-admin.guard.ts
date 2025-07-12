import { CanMatchFn } from '@angular/router';

export const loadAdminGuard: CanMatchFn = (route, segments) =>
{
  const role = localStorage.getItem('role');
  console.log('User role:', role); // Debugging line to check the role
  // Check if the user has the 'admin' role
  if (role === 'ADMIN') {
    // Allow access to the route
    return true;
  }
  return false;
};
