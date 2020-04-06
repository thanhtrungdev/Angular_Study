import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-computer-create',
  templateUrl: './computer-create.component.html',
  styleUrls: ['./computer-create.component.css']
})
export class ComputerCreateComponent implements OnInit {
  id = '';
  display = false;
  showHide() {
    this.display = !this.display;
  }
  /* showEvent(event) {
    this.id = event.target.value;
  } */

  formComputerCreate: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.warn(this.formComputerCreate.value);
  }

  private initForm() {
    this.formComputerCreate = new FormGroup({
      computerId: new FormControl('', Validators.required),
      computerLocation: new FormControl('', Validators.required),
      computerStatus: new FormControl('', Validators.required)
    });
  }
}
