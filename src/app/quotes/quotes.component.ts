import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'sweet love','your always gain by giving love',"Resse Withersporn","Max-well",new Date()),
    new Quotes(2,'inspiration','You just can beat the person who never gives up','beinspired.com','John kipchoge',new Date()),
    new Quotes(3,"Motivation","With the new day comes new strength and new thoughts","Eleoner.com","Atony litunda",new Date()),
    new Quotes(4,'bible','Without holiness no one will see God:Heb 12:14','Prophet Edward Owuor','barack maundu',new Date())
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
