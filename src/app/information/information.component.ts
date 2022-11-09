import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
peopleList : any;
term:string="";
  constructor(private searchservice : SearchService) { }

  ngOnInit(): void {
    this.searchservice.getUser().subscribe(data=>{
      this.peopleList = data;
    })
    this.searchservice.search.subscribe(res=>{
      this.term=res;
    })
  }

}
