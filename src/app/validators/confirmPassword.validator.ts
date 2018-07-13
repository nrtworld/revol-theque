import { AbstractControl } from '@angular/forms';
export class ConfirmPassword{

static MatchPassword(control: AbstractControl) {
    const password = control.get('password').value;
   const password2 = control.get('password2').value;
    
  if (password!=null && password2 !=null && password != password2) {
    return { validpassword: true };
  }
  return null;
}

}