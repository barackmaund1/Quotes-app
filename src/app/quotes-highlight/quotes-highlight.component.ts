import { Quotes } from './../quotes';
import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-quotes-highlight',
  templateUrl: './quotes-highlight.component.html',
  styleUrls: ['./quotes-highlight.component.css']
})
export class QuotesHighlightComponent implements OnInit {

  @Input() quote:Quotes;
 
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
