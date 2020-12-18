import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  done:any;
  constructor(
    private fm:FormBuilder,
    private fg:FormGroup,
  ) { }

  ngOnInit(): void {
    this.done=this.fm.group({
      Rupees:[" "],
  })
}
onSubmit(){
  console.log(this.done.value)
}

}