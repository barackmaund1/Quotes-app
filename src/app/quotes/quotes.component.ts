import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'Sweet love quote','your always gain by giving love',"Resse Withersporn","Max-well",new Date(2020,3,25),80,0),
    new Quotes(2,'Inspiration quote',"You just can't beat the person who never gives up",'beinspired.com','John kipchoge',new Date(2019,4,6),70,0),
    new Quotes(3,"Motivation quote","With the new day comes new strength and new thoughts","Eleoner.com","Atony litunda",new Date(2018,7,20),56,0),
    new Quotes(4,'Bible quote','Without holiness no one will see God:Heb 12:14','Prophet Edward Owuor','barack maundu',new Date(2020,1,21),50,0)
  ];
  toggleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete,index){
     if(isComplete){
       let toDelete=Swal.fire({
        title: `${this.quotes[index].name}`,
        icon: 'success',
        html:`The quote has been deleted successfully.`
          ,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
     
     if(toDelete){
       this.quotes.splice(index,1)
     }
      }
  }
  addNewQuote(quote){
    let quotelength=this.quotes.length;
    quote.id=quotelength+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
