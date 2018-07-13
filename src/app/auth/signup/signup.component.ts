import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ConfirmPassword } from '../../validators/confirmPassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){ 
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      password2: ['',Validators.required]
    },
  {
    validator: ConfirmPassword.MatchPassword
  });
  }

  onSubmit(){
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
   
    this.authService.createNewUser(email, password).then(
      ()=>{
        this.router.navigate(['/games']);
      },
      (error)=>{
        this.errorMessage = error;
      }
    )
  }

  passwordsAreOk(){
   const password = this.signupForm.get('password').value;
   const password2 = this.signupForm.get('password2').value;
    if(password === password2){
      return true;
    }else{
      return false;
    }
  }

}
