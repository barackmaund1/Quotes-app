import { Quotes } from './../quotes';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote:Quotes;
  numberOflikes=0;
  numberOfdislike=0
  

  likebuttonclick(){
    this.quote.numberOflikes ++;
  }
  dislikebuttonclick(){
    this.quote.numberOfdislikes ++;
  }
  @Output()isComplete=new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

