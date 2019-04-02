import { Component, OnInit, Input  } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Variable, IData } from '../dataObject';
@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  stationDict = new Object();
  variableDict = new Object();
  @Input() colData: IData;
  constructor(dsService: DataServiceService) {
    dsService.getStations().subscribe(res => {
      res.map(item => {
        this.stationDict[item.id] = item.name;
      });
    });
    dsService.getVariables().subscribe(res => {
      res.map(item => {
        this.variableDict[item.id] = item.unit;
      });
    });

  }

  ngOnInit() {
  }

}
