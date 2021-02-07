import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() public newPage = new EventEmitter<number>();
  @Input() public totalPages = 0;

  public pages: number[] = [1, 2, 3];
  private currentPage = 1;

  constructor() {
  }

  public get page(): number {
    return this.currentPage;
  }

  @Input()
  public set page(value: number) {
    this.currentPage = value;
  }

  ngOnInit(): void {
    this.pages = [
      this.page,
      this.page + 1,
      this.page + 2
    ];
  }

  public updatePage(type: 'next' | 'previous' | 'first' | 'last' | 'number', page?: number): void {
    switch (type) {
      case 'next':
        if (this.page === this.pages[2] && this.page < this.getFinalPage(this.totalPages)) {
          this.pages = this.pages.map(item => item += 1);
        }
        if (this.page < this.getFinalPage(this.totalPages)) {
          this.page += 1;
        }
        break;
      case 'previous':
        if (this.page > 1) {
          if (this.page === this.pages[0]) {
            this.pages = this.pages.map(item => item -= 1);
          }
          this.page -= 1;
        }
        break;
      case 'first':
        this.page = 1;
        this.pages = [this.page, this.page + 1, this.page + 2];
        break;
      case 'last':
        this.page = this.getFinalPage(this.totalPages);
        this.pages = [this.page, 0, 0];
        break;
      case 'number':
        if (page) {
          this.page = page;
        }
        break;
    }

    this.newPage.emit(this.page);
  }

  private getFinalPage(totalPages: number): number {
    return totalPages / 10;
  }

}
