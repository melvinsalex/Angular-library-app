import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formdata: any;
  data:any;

constructor(private router:Router,private _snackBar:MatSnackBar,private service:SampleServiceService){}
  ngOnInit(): void {
    this.formdata=new FormGroup({
      email:new FormControl(this.data?.email?? ''),
      password:new FormControl(this.data?.password?? ''),

    })
    
    
    
  }



dashboard(){
  this.router.navigate(['dashboard/'])
  }

  loginSnackBar(){
    this._snackBar.open("Login Successfull")
  }
  signup(){
    this.router.navigate(['membership/'])

  }
  login(data:any){
    this.service.login(data).subscribe(d=>{
      
      this.service.setLoginStatus(true)
       localStorage.setItem('LoginSuccessful','true')
       localStorage.setItem('email',data.email)


      
       this.router.navigate(['/dashboard'])
    
         
    })
  }
}
