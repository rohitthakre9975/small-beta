import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EnrollmentService } from '../shared/services/enrollment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit{

 

  reactiveForm: FormGroup;
  constructor(private router: Router, actvateROute: ActivatedRoute, private http: HttpClient, private registrationService: EnrollmentService) { }

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      'name': new FormControl("John Doe", Validators.required),
      'email': new FormControl("john@requentive.com", [Validators.required, Validators.email]),
      'contact': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);

    //creating dummy POST request to send form data to a server:
    this.http.post<any>('http://localhost:3000/enroll', this.reactiveForm.value)
      .subscribe((result) => {
        console.log("result", result)
      }, (errorParam) => {
           console.log(errorParam);
         })
    console.log(this.reactiveForm.value);
    this.router.navigate(['/success'])
  }

  
}
