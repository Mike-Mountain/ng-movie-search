import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchQuery: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public search(query: string): void {
    this.router.navigateByUrl(`'results/${query}`);
  }

}