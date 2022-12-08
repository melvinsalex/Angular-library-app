


import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Country, State, City }  from 'country-state-city';
import { SampleServiceService } from '../sample-service.service';
import { MatDialog } from '@angular/material/dialog';




 @Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  
  states:any

  
  firstFormGroup = this._formBuilder.group({
    bookName: ['', Validators.required],
    author: ['', Validators.required],
    genre: ['', Validators.required],
    



  });
  secondFormGroup = this._formBuilder.group({
    dob: ['', Validators.required],
    gender: ['', Validators.required],

  });
  thirdFormGroup=this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
 
  fourthFormGroup:any
  country=new FormControl(null,Validators.required)
  state= new FormControl(null, Validators.required )
 countries:any


  login(){
    this.router.navigate(['login/'])
    }
  form1(){
      
  }
  form2(){
    
  } 
  form3(){
    
  } 
  form4(){
    this.service.createELEMENT_DATA({...this.firstFormGroup.value})
    .subscribe(data=>{
    })
    this.dialog.closeAll();
  }
 
  isEditable = true;

  constructor(private router:Router,private _formBuilder: FormBuilder,private service: SampleServiceService,public dialog:MatDialog) {}
  
  ngOnInit(): void {
    this.countries=Country.getAllCountries()
 this.fourthFormGroup=new FormGroup({
   country:this.country,
   state:this.state
 
 })
 
 this.country.valueChanges.subscribe((value:any)=>{
   this.states=State.getStatesOfCountry(value.isoCode)
 
 })
   }
 
  }