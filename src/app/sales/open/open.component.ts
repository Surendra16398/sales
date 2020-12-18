import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  onDistributor(){
    console.log('distributor box')
  }

  onDealer(){
    console.log('dealer box')
  }
}