import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-logintoapp',
  templateUrl: './logintoapp.component.html',
  styleUrls: ['./logintoapp.component.css']
})
export class LogintoappComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router) { }
  profileForm;
  exitappbtn:boolean= true;
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      UserEmail : [''],
      Password : ['']
    })
    console.log(this.router.url);
  }
 
  onSubmit(fromValue){
    console.log(fromValue.value.UserEmail);
    if(fromValue.value.UserEmail == "rutuja@gmail.com" && fromValue.value.Password == "rutuja123"){
        alert("successfully logIn");
        this.router.navigate(['/users'])
       
    }
    if(fromValue.value.UserEmail == "admin@gmail.com" && fromValue.value.Password == "admin123"){
      alert("successfully logIn");
        this.router.navigate(['/pizza-admin'])
    }
    
  }
  
}
