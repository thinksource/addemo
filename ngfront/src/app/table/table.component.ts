import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Variable, IData, Pair } from '../dataObject';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rowData = new Array<IData>();
  stations = new Array<Pair>();
  page = 1;
  pageSize = 20;
  collectionSize: number;

  get rows(): IData[] {
    return this.rowData.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  constructor(dsService: DataServiceService) {
    dsService.getData().subscribe(res => {
      this.rowData = res.map(item => {
        return new IData(item.idStation, item.date, item.variables);
      });
      this.collectionSize = this.rowData.length;
    });
    dsService.getStations().subscribe(res =>
      this.stations = res.map(item => {
        return new Pair(item.id, item.name);
      })
    );
  }



  ngOnInit() {
  }

}
