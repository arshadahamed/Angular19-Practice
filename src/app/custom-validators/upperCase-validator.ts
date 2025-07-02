import { AbstractControl, ValidationErrors } from "@angular/forms";

export function upperCaseValidator(control: AbstractControl
): ValidationErrors | null {
  const userName : string = control.value as string;
  if (userName !== userName.toUpperCase()) {
    control.setValue(userName.toUpperCase());
  }
  return null;
}
