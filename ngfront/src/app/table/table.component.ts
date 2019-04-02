import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Variable, IData, Pair } from '../dataObject';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rawData = new Array<IData>();
  // rowData = new Array<IData>();
  stations = new Array<Pair>();
  page = 1;
  pageSize = 20;
  collectionSize: number;
  stationSelected: number;
  selectDate: NgbDate;
  get rowData(): IData[] {
    let re = this.rawData;
    if (this.stationSelected > 0) {
      re = re.filter(item => item.idStation === this.stationSelected);
      this.collectionSize = re.length;
    }
    if (this.selectDate) {
      const dateStr = `${this.selectDate.day}/${this.selectDate.month}/${this.selectDate.year}`;
      re = re.filter(item => item.date === dateStr);
      this.collectionSize = re.length;
    }
    return re;
  }
  get rows(): IData[] {
    return this.rowData.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  constructor(dsService: DataServiceService) {
    dsService.getData().subscribe(res => {
      this.rawData = res.map(item => {
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
