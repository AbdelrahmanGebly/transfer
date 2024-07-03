import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-exchange-goods',
  templateUrl: './exchange-goods.component.html',
  styleUrls: ['./exchange-goods.component.scss']
})
export class ExchangeGoodsComponent {

  myForm:FormGroup = new FormGroup({
    branch:new FormControl(''),
    username:new FormControl(''),
    time:new FormControl(''),
    fileNumber:new FormControl(''),
    fileDate: new FormControl(''),
    endRequestDate:new FormControl(''),
    adoptedBy:new FormControl(''),
    recommendedBy:new FormControl(''),
    project:new FormControl(''),
    location:new FormControl(''),
    storage:new FormControl(''),
    file:new FormControl(''),
    notes : new FormControl(''),
  })
  handleForm(){
    console.log(this.myForm.value)
  }
}
