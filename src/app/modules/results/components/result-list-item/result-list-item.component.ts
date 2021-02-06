import {Component, Input, OnInit} from '@angular/core';
import {SingleResult} from '../../models/results.model';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.scss']
})
export class ResultListItemComponent implements OnInit {

  @Input() searchResult: SingleResult | undefined;
  @Input() searchQuery: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
