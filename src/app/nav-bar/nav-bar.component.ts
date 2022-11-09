import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  term:any;
  constructor(private searchservice : SearchService) { }

  ngOnInit(): void {
  }
  searchTerm!:string

  search(event : any){
this.searchTerm=(event.target as HTMLInputElement).value
console.log(this.searchTerm)
this.searchservice.search.next(this.searchTerm)


  }
}
