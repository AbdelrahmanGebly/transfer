import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-again-transfer-with-css',
  templateUrl: './again-transfer-with-css.component.html',
  styleUrls: ['./again-transfer-with-css.component.scss']
})
export class AgainTransferWithCssComponent implements OnInit{
  myForm!:FormGroup;
  constructor(private _FormBuilder:FormBuilder){

  }
ngOnInit(): void {
  this.myForm = this._FormBuilder.group({
    branch:new FormControl('', Validators.required),
    username:new FormControl('', Validators.required),
    time:new FormControl('', Validators.required),
    fileNumber:new FormControl('', Validators.required),
    fileDate: new FormControl('', Validators.required),
    userStatus:new FormControl('', Validators.required),
    fromBranch:new FormControl('', Validators.required),
    toBranch:new FormControl('', Validators.required),
    fileNumberInBranch:new FormControl('', Validators.required),
    fromStorage:new FormControl('', Validators.required),
    toStorage:new FormControl('', Validators.required),
    handNumber:new FormControl('', Validators.required),
    requestSubjectsNumber : new FormControl('', Validators.required),
    requestSubjectsDate: new FormControl('', Validators.required),
    notes:new FormControl('', Validators.required)
  })
}
// myForm:FormGroup = new FormGroup({
//   branch:new FormControl(''),
//   username:new FormControl(''),
//   time:new FormControl(''),
//   fileNumber:new FormControl(''),
//   fileDate: new FormControl(''),
//   userStatus:new FormControl(''),
//   fromBranch:new FormControl(''),
//   toBranch:new FormControl(''),
//   fileNumberInBranch:new FormControl(''),
//   fromStorage:new FormControl(''),
//   toStorage:new FormControl(''),
//   handNumber:new FormControl(''),
//   requestSubjectsNumber : new FormControl(''),
//   requestSubjectsDate: new FormControl(''),
//   notes:new FormControl('')
// })

  handleForm(){
    console.log(this.myForm.value);
  }
}
