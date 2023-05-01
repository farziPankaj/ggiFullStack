import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalCallService } from '../service/gateway/external-call.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  formattedEnrollmentDate = "";
  enrollmentForm: FormGroup;
  modifiedFormData!: {};

  constructor(private fb: FormBuilder, private ex : ExternalCallService) {
    this.enrollmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      batch: ['', Validators.required],
      status:  ['', Validators.required],
      gender:  ['', Validators.required],
      enrollmentDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.enrollmentForm.reset();
  }

  onSubmit(): void {
    // console.log(this.enrollmentForm.value);
    if (this.enrollmentForm.valid) {
      console.log(this.enrollmentForm.value);
      this.saveData(this.enrollmentForm.value);
    }else{
      console.log("Form is Invaild. Try Again!")
    }
  }

  async saveData(data: any) {
    try{
      const apiData = await this.ex.insertData(data);
      console.log('API data:', apiData);
    }catch(err) {
      console.log("Error while saving the data!")
    }
  }

}
