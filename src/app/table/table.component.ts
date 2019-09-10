import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { of, combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map, finalize, takeUntil, takeWhile, delay } from 'rxjs/operators';
import { TableVirtualScrollStrategy } from './table-vs-strategy.service';
import { DataProvider } from './data';


@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  providers: [{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useClass: TableVirtualScrollStrategy,
  }],
})
export class TableComponent implements OnInit {

  // Manually set the amount of buffer and the height of the table elements
  static BUFFER_SIZE = 3;
  rowHeight = 48;
  headerHeight = 56;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  rows: Observable<Array<any>> = of(DataProvider.Data);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Observable<Array<any>>;
  gridHeight = 400;
  loading=false;
//loadMsg:Observable<string>=new BehaviorSubject<string>("loading.......");
  constructor(@Inject(VIRTUAL_SCROLL_STRATEGY) private readonly scrollStrategy: TableVirtualScrollStrategy) { }

  public ngOnInit() {
    const range = Math.ceil(this.gridHeight / this.rowHeight) + TableComponent.BUFFER_SIZE;
    this.scrollStrategy.setScrollHeight(this.rowHeight, this.headerHeight);

    this.dataSource = combineLatest([this.rows, this.scrollStrategy.scrolledIndexChange])
    .pipe(
      // finalize(() => this.loading=false),
      //  takeUntil(this.loadMsg),
      //delay(1000),
      map((value: any) => {
        // Determine the start and end rendered range
        const start = Math.max(0, value[1] - TableComponent.BUFFER_SIZE);
        const end = Math.min(value[0].length, value[1] + range);

        // Update the datasource for the rendered range of data
        return value[0].slice(start, end);
      })
    );
   
  }
  handler(event: any) {
    console.log("Scolled index to check: ", event)
    if (event > 30) {
      this.go()
    }

  }

  elementScrolled(event: any){
    console.log("Event : ", event)
  }

  
  go() {
    console.log(this.viewport)
    this.viewport.scrollToIndex(0)
  }

}