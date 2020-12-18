
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocktable',
  templateUrl: './stocktable.component.html',
  styleUrls: ['./stocktable.component.scss']
})

// var Product:String;
// var Type:String;
// var ClosingStock:Number;
  

export class StocktableComponent implements OnInit {


Product:any;
Type:any;
ClosingStock:any;
  


 
  headers=[

  "Product","Type","ClosingStock"

  ];



  rows = [
    {
     Product: "Jhadoo", 

      // Type: ['Royal1', 'Royal2', 'Royal3', 'Royal4',]
      type:[
        {
          name:'Royal1',
          closingStack:240
        },
        {
          name:'Royal2',
          closingStack:40
        },
        {
          name:'Royal3',
          closingStack:140
        },
      ]
    }

   
   
    // {
    //   Product: "Mops", 
    //   Type: "Flat Mop",
    //   ClosingStock:140,
    // },
    // {
    //   Product: "Floor Cleaner", 
    //   Type: "Jasmaine 1 ltr",
    //   ClosingStock:120,
    // },
    // {
    //   Product: "Acid", 
    //   Type: "Acid 100ml",
    //   ClosingStock:60,
    // },
    // {
    //   Product: "Bleaching Powder", 
    //   Type: "Bleaching Powder 1ltr ",
    //   ClosingStock:40,
    // },
    // {
    //   Product: "Wiper", 
    //   Type: "Wiper Small",
    //   ClosingStock:120,
    // },
    // {
    //   Product: "Scrubber", 
    //   Type: "Scrub pad big",
    //   ClosingStock:60,
      
    // },
  
  ];

  dataList = [
    {
     pname: "abc",
     numbers: [123, 234]
    },
   {
     pname: "mno",
     numbers: [125,  237],
     
    }
   ]

constructor() { }

  ngOnInit(): void {
  }
// onchange(deviceValue: number){

// }


}


