import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProviderAst } from '@angular/compiler';
@Component({
  selector: 'app-closingstock',
  templateUrl: './closingstock.component.html',
  styleUrls: ['./closingstock.component.scss']
  
  
})

export class ClosingstockComponent implements OnInit {
  

  today: number = Date.now();

  products=[
    
    {
      'name':'Jhadoo',
      'childs':[
        {
          'subName':'royal ',
          'stock':240
        },
        {
          'subName':'Bheem',
          'stock':120
        },
        {
          'subName':'Smart',
          'stock':120
        },
        {
          'subName':'Steel Handle',
          'stock':120
        },
      ]
    },
    {
      'name':'Mops',
      'childs':[
        {
          'subName':'Round',
          'stock':60
        },
        {
          'subName':'Flat Mop',
          'stock':60
        },
        {
          'subName':'Super clip',
          'stock':40
        },
        
      ]
    },
    {
      'name':'Floor Cleaner',
      'childs':[
        {
          'subName':'Rose 1 ltr',
          'stock':120
        },
        {
          'subName':'Garden 1 ltr',
          'stock':60
        },
        {
          'subName':'Jasmine 1 ltr',
          'stock':60
        },
        {
          'subName':'Lime 1 ltr',
          'stock':120
        },
      ]
    },

    {
      'name':'Acid',
      'childs':[
        {
          'subName':'Acid 1200ml',
          'stock':120
        },
        {
          'subName':'Acid green 600ml',
          'stock':60
        },
        {
          'subName':'Acid 600ml',
          'stock':60
        },
        
      ]
    },
    {
      'name':'Bleaching Powder',
      'childs':[
        {
          'subName':'Bleaching powder 200gm',
          'stock':120
        },
        {
          'subName':'Bleaching powder 500gm',
          'stock':60
        },
        
      ]
    },
    {
      'name':'Wiper',
      'childs':[
        {
          'subName':'Wiper small',
          'stock':120
        },
        {
          'subName':'Wiper big',
          'stock':60
        },
        
      ]
    },
    {
      'name':'Scrubber',
      'childs':[
        {
          'subName':'Scrub pad big',
          'stock':120
        },
        {
          'subName':'Steel Scrub ',
          'stock':60
        },
        
      ]
    },
  ]
  selectedCat:any;
  selectedSubCat:any;
  selectedProduct:any;
  selectedStock:number=0;
  closeStock:number=0;
  selectedPrice:any;
  selectedAmount:number=0;
  selectedButton:any;
  amount=0;
  quantity:any;
  selectedProduct1: any;
  selectedChild:any;
  total:number=0;
  

  constructor(
    private router:Router,
    // private fb:FormBuilder,
    // private fg:FormGroup
  ) {}

  ngOnInit(): void {
    
  }

  

  onchange(deviceValue: number){
  }


  

  addProduct(){
  
    
  }
    
  





  onCheck(){
    console.log('checked')
  }

  checkOption(){
    // console.log(this.selectedCat)
    this.selectedProduct=this.products.find((a)=>{
      return a.name===this.selectedCat;
    })
    this.selectedProduct1=this.selectedProduct.childs
    console.log(this.selectedProduct1)
  }


  checkStock(){
    this.quantity=0
    this.selectedChild=this.selectedProduct1.find((a:any)=>{
      return a.subName==this.selectedStock
    })
    console.log(this.selectedStock)
    console.log(this.selectedChild)
    this.closeStock=this.selectedChild.stock

    
  }
 

  minus(){
    if(this.quantity>0){
      this.quantity=this.quantity-1
      this.closeStock=this.closeStock+1
    }
this.checkPrice()
    this.onAmount()
  }

  quantityChanged(){
    this.onAmount()
    this.closeStock=this.selectedChild.stock
    if(this.closeStock>this.quantity){

    this.closeStock=this.closeStock-this.quantity
    }
    console.log(this.selectedProduct)

}

  plus(){
      this.quantity=this.quantity+1
      this.closeStock=this.closeStock-1
    this.onAmount()

  }

  checkPrice(){
   this.selectedPrice=this.selectedPrice
    console.log(this.selectedPrice)
      this.onAmount()
      this.quantityChanged()
    }

  onAmount(){
    this.amount=(this.selectedPrice*this.quantity)
     console.log(this.selectedAmount)
     }
 
     onConfirm(){
       console.log(this.selectedStock)
       console.log(this.quantity)
      console.log('hello')
    }

onTotal(){
  this.total=this.amount
  console.log(this.amount)
  
}

}

