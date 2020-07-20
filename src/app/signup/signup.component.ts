import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms'; 

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      task: ['', Validators.required]
    })
  }

  get fName() { return this.form.get('fName')}
  get lName() { return this.form.get('lName')}
  get email() { return this.form.get('email')}
  get task() { return this.form.get('task')}

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value)
  }

}
