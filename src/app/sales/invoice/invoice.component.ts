import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  var=['array','object','creation'];

  constructor() { }

  ngOnInit(): void {
  }

  onBack(){
    console.log('Hello back')
  }

  onConfirmButton(){
    console.log('hello confirm')
  }
}


